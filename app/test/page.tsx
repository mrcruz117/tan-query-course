"use client";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";

export default function Test() {
  const [id, setId] = React.useState(1);
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery({
    // query key must be globally unique
    queryKey: ["pokemon", id],
    // queryFn doesnt need to be async
    // bun must return a promise
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
