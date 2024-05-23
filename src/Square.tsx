import React, { Children } from "react";
import { useDrag, useDrop } from "react-dnd";
interface SquareProps {
    x: number;
    y: number;
    children: React.ReactNode;
    movePiece: (id:number, x:number, y:number) => void;
}
const Square: React.FC<SquareProps> = ({ x, y, children, movePiece }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "PIECE",
        drop: (item: { id: number }) => movePiece(item.id, x, y),
        collect: (monitor: { isOver: () => any; }) => ({
            isOver: !!monitor.isOver(),
        }),
    }))
    return (
        <div
          ref={drop}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: (x + y) % 2 === 1 ? 'black' : 'white',
          }}
        >
          {children}
          {isOver && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: 'yellow',
              }}
            />
          )}
        </div>
      );
}
export default Square;