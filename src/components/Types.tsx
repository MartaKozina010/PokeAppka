import styled from "styled-components";
import { PokemonType, typeColor } from "../utils/colors";

const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Type = styled.div<{ background: string }>`
  text-align: center;
  padding: 2px 5px;
  border-radius: 12px;
  background-color: ${({ background }) => background};
  font-size: 10px;
  margin: 1px;
  color: white;
`;

type Props = {
  types: PokemonType[];
};

export const Types: React.FC<Props> = (props) => {
  return (
    <TypesContainer>
      {props.types.map((type) => (
        <Type key={type} background={typeColor[type]}>{type}</Type>
      ))}
    </TypesContainer>
  );
};
