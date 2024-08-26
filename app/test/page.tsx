"use client";
import {
  useQuery,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import * as React from "react";
const queryClient = new QueryClient();

export function App() {
  const [id, setId] = React.useState(1);
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(pokemon);
  return (
    <div className="flex justify-center h-screen">
      <div>
        <h1>{pokemon.name}</h1>
      </div>
    </div>
  );
}
export default function Test() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
