import { PeopleOutline, TimeOutline } from "react-ionicons"

import { TagList } from "../../Tag"

import "./BoardGameDetails.css"


const BoardGameDetails = ({ boardGame, }) => {
    return (
        <div className="board-game-details">
            <div
                className="board-game-details__images"
                style={{ backgroundImage: `url(${boardGame.thumbnail})` }}
            />
            <div className="board-game-details__information">
                <div className="">
                    <h2>{boardGame.name}</h2>
                </div>
                <TagList tags={boardGame.tags} />
                <div className="">
                    <div>
                        <PeopleOutline
                            width="32px"
                            height="32px"
                        />
                        <span>
                            {
                                boardGame.minPlayers === boardGame.maxPlayers ?
                                    boardGame.minPlayer :
                                    `${boardGame.minPlayers}-${boardGame.maxPlayers}`
                            }
                        </span>
                    </div>
                    <div>
                        <TimeOutline
                            width="32px"
                            height="32px"
                        />
                        <span>
                            {
                                boardGame.minTime === boardGame.maxTime ?
                                    boardGame.minTime :
                                    `${boardGame.minTime}-${boardGame.maxTime}`
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardGameDetails