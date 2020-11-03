import React from 'react'
import useKeyPress from '../../hooks/useKeyPress'
import useWalk from '../../hooks/useWalk'

import Actor from '../actor'


interface IProps{
    skin: string
}

const Player = ({ skin }: IProps) => {

    const { dir, step, walk, position } = useWalk(3)

    const data = {
        h: 32,
        w: 32
    }

    useKeyPress((ev) => {

        walk(ev.key.replace('Arrow', '').toLowerCase())

        ev.preventDefault()
    })

    return(
        <Actor 
            data={data}
            sprite={`/sprites/skins/${skin}.png`}
            step={step}
            dir={dir}
            position={position}
        />
    )
}

export default Player