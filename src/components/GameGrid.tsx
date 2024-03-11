import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Platform} from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {Genre} from "../hooks/useGenres";
import PlatformSelector from "./PlatformSelector";

interface Props {
    selectedGenre: Genre | null
    selectedPlatform: Platform | null
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Text>
                {error && <Text>{error}</Text>}
            </Text>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3} padding={10}>
                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>)}
                {data.map(game =>
                    <GameCardContainer key={game.id} >
                        <GameCard game={game} />
                    </GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid