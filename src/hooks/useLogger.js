import { useEffect } from "react";

export function useLogger(text, value) {
    useEffect(() => {
        console.log(text, value)
    }, [value])
}