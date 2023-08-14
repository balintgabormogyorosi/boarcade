import { useNavigate } from "react-router-dom"
import BoardGameBadge from "../BoardGameBadge/BoardGameBadge"

import "./BoardGameGrid.css"


const BoardGameGrid = ({ boardGames, }) => {
    const navigate = useNavigate()

    const onBoardGameBadgeClick = (boardGame) => {
        navigate("/tarsasjatekok/" + boardGame.slug)
    }

    return (
        <div className="board-game-grid">
            {boardGames.map(boardGame => <BoardGameBadge key={boardGame.slug} boardGame={boardGame} onClick={onBoardGameBadgeClick} />)}
        </div>
    )
}

export default BoardGameGrid