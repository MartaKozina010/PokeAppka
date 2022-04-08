import { createGlobalStyle } from "styled-components";

export type ThemeType = {
  browser: string;
  background: string;
  text: string;
  card: string;
  backgroundHover: string;
};

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
body {
  background-color: ${({ theme }) => theme.browser};
  color: ${({ theme }) => theme.text};
  transition: all .5s linear;
}
`;

export const lightTheme: ThemeType = {
  browser: "#e5e5e5",
  background: "#F7F7F7",
  text: "black",
  card: "white",
  backgroundHover: "#EEEEEE",
};

export const darkTheme: ThemeType = {
  browser: "#3A3A3A",
  background: "#5A5A5A",
  text: "white",
  card: "#757575",
  backgroundHover: "#616161",
};

export const typeColor = {
  normal: "#AAA67F",
  fighting: "#C12239",
  flying: "#A891EC",
  poison: "#A43E9E",
  ground: "#DEC16B",
  rock: "#B69E31",
  bug: "#A7B723",
  ghost: "#70559B",
  steel: "#B7B9D0",
  fire: "#F57D31",
  water: "#6493EB",
  grass: "#74CB48",
  electric: "#F9CF30",
  psychic: "#FB5584",
  ice: "#9AD6DF",
  dragon: "#7037FF",
  fairy: "#E69EAC",
  dark: "#75574C",
};

export type PokemonType =  keyof typeof typeColor;
