import React from 'react'


interface IProps{
    image: string;
    data: Data;
    position: Position
}
type Data = {
    y: number;
    x: number;
    h: number;
    w: number;
}

type Position = {
    x: number,
    y: number
}

const Sprite = ({image, data, position}: IProps) => {

    const { x, y, h, w } = data

    return <div 
        style={{
            position: 'absolute',
            top: `${position.y}px`,
            left: `${position.x}px`,
            display: "inline-block",
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `-${x}px -${y}px`
        }}
    />
}

export default Sprite