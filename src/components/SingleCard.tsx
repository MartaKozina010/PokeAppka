import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGetPokemonByIdQuery } from "../redux/APIslice";
import { typesToFilter } from "../redux/filterSlice";
import { useAppSelector } from "../redux/hooks";
import { typeColor } from "../utils/colors";
import { Types } from "./Types";

const MainContainer = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const CardContainer = styled.div<{ borderColor: string }>`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 12px 12px 0 0;
  padding: 5px 30px;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-bottom: 0;


  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
`;

const Id = styled.div<{ background: string }>`
  text-align: center;
  background-color: ${({ background }) => background};
  border-radius: 0 0 12px 12px;
  margin-bottom: 8px;
  height: 20px;
  color: white;
  font-size: 12px;
  font-weight: 600;
`;

const Sprite = styled.img`
  height: 50px;
  width: 50px;
`;

const Name = styled.p<{ textColor: string }>`
  font-size: 25px;
  opacity: 90%;
  color: ${({ textColor }) => textColor};
`;

const DataHandle = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  border: 2px solid lightgray;
  margin-bottom: 8px;
  padding: 32px 0;
  text-align: center;
  font-size: 10px;
  color: ${({ theme }) => theme.text};
`;

const DataError: React.FC = () => {
  return (
    <DataHandle>Ooops, an error has occured. Try again!</DataHandle>
  );
};

const DataLoading: React.FC = () => {
  return (
    <DataHandle>Wait a while, the data is loading...</DataHandle>
  );
};

type Props = {
  id: number;
};


export const SingleCard: React.FC<Props> = (props) => {
  const { data, error, isLoading } = useGetPokemonByIdQuery(props.id);

  const activeFilters = useAppSelector((state) => state.filter.activeFilters);
  const dispatch = useDispatch();

  if (isLoading) return <DataLoading />;
  if (error || !data) return <DataError />;
  if (activeFilters.length &&
    !data.types.filter((el) => activeFilters.includes(el)).length)
    return null;

    const type = data.types[0];
    const color = typeColor[type];

    dispatch(typesToFilter(data.types))

  return (
    <MainContainer to={`/PokeApp/pokemon/${props.id}`}>
      <CardContainer borderColor={color}>
        <Types types={data.types} />
        <Name textColor={color}>{data.name}</Name>
        <Sprite src={data.sprite} />
      </CardContainer>
      <Id background={color}>
        {`#${props.id}`}
      </Id>
    </MainContainer>
  );
};
