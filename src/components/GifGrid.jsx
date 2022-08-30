
import { useFethGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifFrid = ({ category }) => {

    const {gifs,isLoading} = useFethGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    gifs.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}