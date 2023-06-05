import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConteiner from "./GameCardConteiner";
import { Genre } from "../hooks/useGenre";

interface Props{
  selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre} : Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConteiner key={skeleton}>
              <GameCardSkeleton />
            </GameCardConteiner>
          ))}
        {data.map((game) => (
          <GameCardConteiner key={game.id} >
            <GameCard game={game} />
          </GameCardConteiner>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
