import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonType } from "../utils/colors";

export type Pokemon = {
  name: string;
  types: PokemonType[];
  sprite: string;
  weight: number;
  height: number;
};

type PokemonResponse = {
  name: string;
  types: {
    type: {
      name: PokemonType;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
};

type PokemonListItem = {
  name: string;
  id: number;
};

type PokemonListResponse = {
  results: {
    name: string;
    url: string;
  }[];
};

const API_URL = `https://pokeapi.co/api/v2/`;
export const pokemonAPI = createApi({
  reducerPath: "pokemonAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListItem[], number>({
      query: (limit) => `pokemon?limit=${limit}&offset=0`,
      transformResponse: (response: PokemonListResponse) => {
        return response.results.map((result) => ({
          name: result.name,
          id: parseInt(result.url.split("/")[6]),
        }));
      },
    }),
    getPokemonById: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`,
      transformResponse: (response: PokemonResponse) => {
        return {
          ...response,
          types: response.types.map((el) => el.type.name),
          sprite: response.sprites.other.dream_world.front_default,
        };
      },
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonAPI;