import React from 'react'

import Sprite from '../sprite'

interface IProps{
    sprite: string;
    data: Data;
    step?: number;
    dir?: number;
    position?: Position
}

type Data = {
    h: number;
    w: number;
}

type Position = { x: number, y: number }

const Actor = ({ sprite, data, step, dir, position }: IProps) => {

    const { h, w } = data;

    return(
        <Sprite 
            image={sprite}
            position={{
                x: Number(position?.x),
                y: Number(position?.y)
            }}
            data={{
                x: Number(step) * w,
                y: Number(dir) * h,
                h,
                w
            }}
            />
    )
}

Actor.defaultProps = {
    step: 0,
    dir: 0,
    position: {
        x: 0,
        y: 0,
    }
}

export default Actor