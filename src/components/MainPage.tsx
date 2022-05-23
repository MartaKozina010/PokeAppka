import React, { ChangeEventHandler, createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useGetPokemonListQuery } from "../redux/APIslice";
import { BaseMainPage } from "./ComponentBase/BaseMainPage";
import { Button } from "./ComponentBase/Button";
import { SingleCard } from "./SingleCard";

const LoadMore = styled(Button)`
  background-color: cornflowerblue;
  transition: 0.5s background-color;

  &:hover {
    background-color: lightskyblue;
  }
`;

const DataHandle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  text-align: center;
`;

const Image = styled.img`
  height: 80%;
  border-radius: 12px;
`;

const Loading = styled.img`
  width: 25px;
  height: 25px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const MainDataError: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/PokeAppka")
    }, 3000)
  }, [])

  return (
    <BaseMainPage>
      <DataHandle>
        Sorry, an error has occured, turning back to the main page
        <Image src="/PokeAppka/errorGif.gif" />
      </DataHandle>
    </BaseMainPage>
  );
};

export const MainDataLoading: React.FC = () => {
  return (
    <BaseMainPage>
      <DataHandle>
        <Loading src="/PokeAppka/loadingGif.svg" />
      </DataHandle>
    </BaseMainPage>
  );
};

type ContextType = {
  input: string;
  inputHandler: ChangeEventHandler<HTMLInputElement>
};

export const InputContext = createContext<ContextType>({
  input: "",
  inputHandler: () => undefined,
});

let id: ReturnType<typeof setTimeout>

export const MainPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [delayedInput, setDelayedInput] = useState("");

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = event =>
    setInput(event.target.value)

  useEffect(() => {
    clearTimeout(id)
    id = setTimeout(() => {
      setDelayedInput(input)
    }, 300)
  }, [input])

  const [urlLimit, setUrlLimit] = useState(20);

  const {
    data: dataList,
    error: errorList,
    isLoading: isLoadingList,
  } = useGetPokemonListQuery(urlLimit);

  if (isLoadingList) return <MainDataLoading />;
  if (errorList || !dataList) return <MainDataError />;

  return (
    <InputContext.Provider value={{ input, inputHandler }}>
      <BaseMainPage>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {dataList.map(el => el.name.toLowerCase().includes(delayedInput) &&
            <SingleCard key={el.name} id={el.id} />)}
        </div>
        <LoadMore onClick={() => setUrlLimit(urlLimit + 20)}>load more</LoadMore>
      </BaseMainPage>
    </InputContext.Provider>
  );
};