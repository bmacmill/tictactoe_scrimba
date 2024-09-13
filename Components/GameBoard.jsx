import React from "react"
import Square from "./Square"
import calculateWinner from "../helpers"
import "../src/App.css"
import { nanoid } from 'nanoid'

export default function GameBoard() {

    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [playerXTurn, setPlayerXTurn] = React.useState(true)
    const winner = calculateWinner(squares)

    function handleClick(i) {

        const nextSquares = squares.slice()
        //early return if square is filled aka not null or a winner exists
        if (nextSquares[i] || calculateWinner(squares)) {
            return
        }
        if (playerXTurn) {
            nextSquares[i] = "X"

        } else {
            nextSquares[i] = "O"
        }

        /// no need to set on both if / else above
        setSquares(nextSquares)
        setPlayerXTurn(!playerXTurn)
    }


    let status
    if (winner) {
        status = `${winner} is the Winner!`
    } else {
        status = `Next player:  ${playerXTurn ? "X" : "O"}`
    }



    const squareElements = squares.map((el, i) => {
        return <Square key={nanoid()} value={squares[i]} onSquareClick={() => handleClick(i)} />
    })

    function playAgain() {
        setSquares(Array(9).fill(null))
        setPlayerXTurn(true)
    }

    return (
        <>
            <div className="Status_Style">{status}</div>

            <div className="Grid_Style">
                {squareElements}
            </div>

            <div className="Status_Style">
                {winner && <button onClick={playAgain}>Play Again</button>}
            </div>

        </>
    )
}


// im using functional components, they use arrow function...
//arrow functions a still alittle foreign to me...

///const Game = ()=>(
//     ...
// }

//export default Game