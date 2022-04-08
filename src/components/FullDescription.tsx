import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetPokemonByIdQuery } from "../redux/APIslice";
import { typeColor } from "../utils/colors";
import { MainDataError, MainDataLoading } from "./MainPage";
import { Types } from "./Types";

const MainContainer = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ background }) => background};
  width: 360px;
  height: 640px;
  border-radius: 12px;
  padding: 24px 4px 4px 4px;
`;

const Pokeball = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Sprite = styled.img`
  width: 250px; 
  height: 250px; 
  position: absolute;
  bottom: 300px;
  left: 0;
  right: 0;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

const Id = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: white;
`;

const Icon = styled.img``;

const InfoCard = styled.div`
  box-sizing: border-box;
  height: 350px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding-top: 70px;
`;

const Measurement = styled.div`
  width: 50%;
  text-align: center;
`;

const MeasurementsContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const StyledH = styled.h3<{ fontColor: string }>`
  color: ${({ fontColor }) => fontColor};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 10px;
`;

const TypesContainer = styled.div`
  width: 30%;
  left: 0;
  right: 0;
  margin: auto;
`;

const ArrowLink = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  color: white;
  text-decoration: none;

  &:hover {
    color: lightgray;
  }
`;

const Arrow = styled.p`
  font-size: 20px;
  color: white;
  font-weight: 600;

  &:hover {
    color: lightgray;
  }
`;

const LinkL = styled(Link)`
  position: absolute;
  top: 40%;
  text-decoration: none;
`;

const LinkR = styled(Link)`
  position: absolute;
  top: 40%;
  right: 4px;
  text-decoration: none;
`;

export const FullDescription: React.FC = () => {
  const params = useParams();
  const id = parseInt(params.id!);

  const { data, error, isLoading } = useGetPokemonByIdQuery(id);

  if (isLoading) return <MainDataLoading />;
  if (error || !data) return <MainDataError />;

  const type = data.types[0];
  const color = typeColor[type];

  return (
    <MainContainer background={color}>
      <Header>
        <ArrowLink to="/PokeApp">ᐊ</ArrowLink>
        <Name>{data.name}</Name>
        <Id>#{id}</Id>
      </Header>
      <Pokeball src="/PokeApp/pokeballl.svg" />
      <Sprite src={data.sprite} />
      <InfoCard>
        <StyledH fontColor={color}>About</StyledH>
        <MeasurementsContainer>
          <Measurement>
            <Icon src="/PokeApp/weight.svg" />
            <p>Weight: {data.weight} kg</p>
          </Measurement>
          <Measurement>
            <Icon src="/PokeApp/height.svg" />
            <p>Height: {data.height} m</p>
          </Measurement>
        </MeasurementsContainer>
        <StyledH fontColor={color}>Types</StyledH>
        <TypesContainer>
          <Types types={data.types} />
        </TypesContainer>
      </InfoCard>
      {id > 1 ? (
        <LinkL to={`/PokeApp/pokemon/${id - 1}`}>
          <Arrow>ᐊ</Arrow>
        </LinkL>
      ) : null}
      {data.name !== "calyrex" ? (
        <LinkR to={`/PokeApp/pokemon/${id + 1}`}>
          <Arrow>ᐅ</Arrow>
        </LinkR>
      ) : null}
    </MainContainer>
  );
};
