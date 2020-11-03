import { useEffect } from "react";

type Props = (this: Window, ev: KeyboardEvent) => any

export default function useKeyPress(fn: Props): void{
    useEffect(() => {
        window.addEventListener('keydown', fn)

        return () => window.removeEventListener('keydown', fn)

    }, [fn])
}