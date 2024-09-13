import React from "react"
import "../src/App.css"

export default function Square({ value, onSquareClick }) {
    // console.log(value)


    //const [value, setValue] = React.useState(null)
    //const [playerXTurn, setPlayerXTurn] = React.useState(false)




    return (

        <button className="Square" onClick={onSquareClick}>{value}</button>


    )
}