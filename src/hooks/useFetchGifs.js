import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const useFethGifs = (category) => {

    let [gifs, setGifs] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    //solo se llama una vez en el tiempo de vida de este componente
    //asi otro componente llame a este componente, solo se ejecutara una sola vez
    //que fue cuando se creo
    useEffect(() => {
        getGifs(category)
            .then((datos) => {
                setGifs(datos)
                setIsLoading(false)
            })
            .catch(err => console.log(err));
    }, [])





    return {
        gifs,
        isLoading
    }

}

