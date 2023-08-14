import { useEffect, useState } from "react"
import { json, useLoaderData } from "react-router-dom"

import { BoardGameGrid } from "../components/BoardGame"
import { TagList } from "../components/Tag"
import { Container } from "../components/UI"


const BoardGamesPage = () => {
    const [tags, setTags] = useState([])
    const [boardGames, setBoardGames] = useState(useLoaderData().boardGames || [])

    // useEffect(() => {
    //     const tags = []
    //     boardGames.forEach(boardGame => {
    //         boardGame.tags.forEach(tag => {
    //             if (tags.filter(tagObj => tagObj.label === tag).length === 0) tags.push({ label: tag, selected: false, })
    //         })
    //     })
    //     setTags(tags)
    // }, [boardGames])


    return (
        <Container>
            <div className="board-games-page">
                <BoardGameGrid boardGames={boardGames} />
            </div>
        </Container>
    )
}

export default BoardGamesPage



export async function loader() {
    const response = await fetch("/api/board-games")
    if (!response.ok) {
        throw json({ message: 'Couldn\' fetch board games', }, { status: 500, })
    }
    const data = await response.json()
    return { boardGames: data.boardGames }
}