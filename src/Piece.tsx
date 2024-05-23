import React from "react";
import { useDrag } from "react-dnd";
interface PieceProps {
    id: number,
    type: string,
    // color: 'black' | 'white'; // 指定棋子的颜色
}
const Piece: React.FC<PieceProps> = ({ id, type }) => {
    //把一个组件变成一个可拖动的源
    const [{ isDragging }, drag] = useDrag({
        type: "PIECE",//拖动源的类型
        item: { id, type },//拖动时需要传的数据
        collect: (monitor) => ({
            //检查是否正在拖动
            isDragging: !!monitor.isDragging(),
        })
    })
    return (
        <div
            ref={drag} //将drag绑定到div上，让这个组件成为可拖动的源
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: "bold",
                cursor: "move",
            }}
        >
            {type}
        </div>
    )
}
export default Piece;