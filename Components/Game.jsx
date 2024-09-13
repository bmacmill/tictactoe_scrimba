import React from "react"
import GameBoard from "./GameBoard"
import { nanoid } from "nanoid";
//Adding time travel 

export default function Game() {
    const [history, setHistory] = React.useState([Array(9).fill(null)])
    //const [playerXTurn, setPlayerXTurn] = React.useState(true)
    const [currentMove, setCurrentMove] = React.useState(0)
    const playerXTurn = currentMove % 2 === 0
    const currentSquares = history[currentMove]

    function handlePlay(nextSquares) {
        ///console.log("....")
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        //setPlayerXTurn(!playerXTurn)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
        //setPlayerXTurn(nextMove % 2 === 0)
    }

    const moves = history.map((el, idx) => {
        let description
        if (idx > 0) {
            description = `Go to move ${idx}`
        } else {
            description = "Go to game start"
        }
        return (
            <li key={nanoid()}>
                <button onClick={() => jumpTo(idx)}>{description}</button>
            </li>
        )
    })
    function renderMoves() {

    }
    return (
        <div className="game">
            <div className="game-board">
                <GameBoard squares={currentSquares} onPlay={handlePlay} setHistory={setHistory} playerXTurn={playerXTurn} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}