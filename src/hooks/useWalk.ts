import { useState } from "react";

interface IResponse{
    dir: number,
    walk(dir: string): void;
    step: number;
    position: Position
}

type Position = { x: number, y: number }

type Key = { [key: string]: number }

export default function useWalk(maxSteps: number): IResponse{
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
    const [ dir, setDir ] = useState<number>(0)
    const [step, setStep] = useState<number>(0)

    const directions: Key = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    }

    const stepSize = 16;

    const modifier: { [key: string]: Key }  = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize }
    }

    function walk(dir: string){

        setDir(prev => {
            if(directions[dir] === prev) move(dir);

            return directions[dir]
        })

        setStep(prev => prev < maxSteps -1 ? prev + 1 : 0)
    }

    function move(dir: string){
        setPosition(prev => ({
            x: prev.x + modifier[dir].x,            
            y: prev.y + modifier[dir].y,            
        }))
    }

    return { dir, step, walk, position }
}