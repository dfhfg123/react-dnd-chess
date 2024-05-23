import React, { useState } from "react";
import Square from "./Square";
import Piece from "./Piece";
interface PieceState{
    id: number;
    type: string;
    x: number;
    y: number;
}
const initialBoardState: PieceState[] = [
    { id: 1, type: '♖', x: 0, y: 0 },
    { id: 2, type: '♘', x: 1, y: 0 },
    { id: 3, type: '♗', x: 2, y: 0 },
    { id: 4, type: '♕', x: 3, y: 0 },
    { id: 5, type: '♔', x: 4, y: 0 },
    { id: 6, type: '♗', x: 5, y: 0 },
    { id: 7, type: '♘', x: 6, y: 0 },
    { id: 8, type: '♖', x: 7, y: 0 },
]
const Board: React.FC = () => {
    const [pieces, setPieces] = useState<PieceState[]>(initialBoardState);
    const movePiece = (id: number, x: number, y: number) => {
        setPieces((prevPieces) =>
          prevPieces.map((piece) =>
            piece.id === id ? { ...piece, x, y } : piece
          )
        );
      };
    const renderSquare = (x: number, y: number) => {
        const piece = pieces.find((p) => p.x === x && p.y === y);
        return (
            <Square key={`${x},${y}`} x={x} y={y} movePiece={movePiece}>
                {piece && <Piece id={piece.id} type={piece.type} />}
            </Square>
        )
    }
    const boardSquares = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            boardSquares.push(renderSquare(i, j));
            console.log(boardSquares);
            
        }
    }
    return (
        <div
            style={{
                display: "grid",
                
                gridTemplateColumns: "repeat(8, 50px)",

                gridTemplateRows: "repeat(8, 50px)",
                width: "400px",
                height: "200px",
                border:"2px solid black",
        }}
        >
            {boardSquares}
        </div>
    )
}
export default Board;