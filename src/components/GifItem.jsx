

export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src = {url} alt = "imagen no encontrada"/>
            <p>{title}</p>
        </div>
    )
}
