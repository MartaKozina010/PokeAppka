import React from "react";
import styled from "styled-components";
import { removeFilter, setFilter } from "../redux/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { typeColor } from "../utils/colors";

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  border: 2px solid lightgray;
  margin-bottom: 10px;
`;

const Type = styled.div<{ background: string }>`
  text-align: center;
  padding: 2px 5px;
  border-radius: 12px;
  background-color: ${({ background }) => background};
  font-size: 10px;
  margin: 1px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    filter: alpha(opacity=70);
  }
`;

const Clear = styled.p`
  padding: 2px 5px;
  border-radius: 12px;
  background-color: white;
  font-size: 10px;
  margin: 1px;
  color: red;
  border: 1px solid red;

  &:hover {
    background-color: red;
    color: white;
  }
`;

export const FilterTab: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeFilters = useAppSelector(state => state.filter.activeFilters);
  const displayedTypes = useAppSelector(state => state.filter.displayedTypes)

  return (
    <FilterContainer>
      {displayedTypes.map((el, index) => (
        <Type key={el} background={
          activeFilters.includes(el)
            ? typeColor[el]
            : "lightgrey"
        }
          onClick={() => dispatch(setFilter(el))}
        >
          {el}
        </Type>
      ))}
      <Clear onClick={() => dispatch(removeFilter([]))}>clear X</Clear>
    </FilterContainer>
  );
};
