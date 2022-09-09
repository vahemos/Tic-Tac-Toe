import React from "react"
import { useState } from "react"
import "./CSS/Game.css"
import Board from "./Board"
import { calculateWinner } from "../functionWinner"

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(board)

  const handleclick = (index) => {
    const boardCopy = [...board]

    if (winner || boardCopy[index]) {
      return
    }
    boardCopy[index] = xIsNext ? "X" : "O"
    setBoard(boardCopy)
    setXisNext(!xIsNext)
  }

  const newGame = () => {
    return (
      <button
        className="start_btn"
        onClick={() => {
          setBoard(Array(9).fill(null))
          setXisNext(true)
        }}
      >
        New Game
      </button>
    )
  }

  return (
    <div className="game">
      {newGame()}
      <Board squares={board} click={handleclick} />
      <p className="info">
        {winner ? "Հաղթեց " + winner + "-ը": "Խաղում է " + (xIsNext ? "X-ը" : "O-ը")}
      </p>
    </div>
  )
}

export default Game
