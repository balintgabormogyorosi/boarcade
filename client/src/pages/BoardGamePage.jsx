import { useLoaderData } from "react-router-dom"

import { BoardGameDetails } from "../components/BoardGame"


const BoardGamePage = () => {
    const { boardGame, } = useLoaderData()

    return (
        <div className="board-game-page">
            <BoardGameDetails boardGame={boardGame} />
        </div>
    )
}

export default BoardGamePage

export const loader = async ({ request, params, }) => {
    console.log(request)
    console.log(params)
    try {
        const response = await fetch("/api/board-games/" + params.slug)
        const data = await response.json()
        console.log(data)
        return { boardGame: data.boardGame, }
    } catch (errors) {
        console.log(errors)
    }
    return { boardGame: {}, }
}