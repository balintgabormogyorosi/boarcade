import "./BoardGameBadge.css"


const BoardGameBadge = ({ boardGame, onClick }) => {
    const onBoardGameBadgeClick = () => {
        if (onClick) onClick(boardGame)
    }

    return (
        <div className="board-game-badge">
            <div
                className="board-game-badge__thumbnail"
                style={{ backgroundImage: `url(${boardGame.thumbnail})`, }}
                onClick={onBoardGameBadgeClick}
            />
            <div className="board-game-badge__information">
                <strong className="board-game-badge__name" onClick={onBoardGameBadgeClick}>{boardGame.name}</strong>
            </div>
        </div>
    )
}

export default BoardGameBadge