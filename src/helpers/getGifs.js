

export const getGifs = async (category) => {

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=DYFD12Jfk5becaChNq55w0KA30AfrbAh&q=${category}&limit=10`;

    const respuesta = await fetch(endpoint);
    const {data} = await respuesta.json();
    
    const gifs = data.map( element => {
        return({
            id: element.id,
            title:element.title,
            url:element.images.downsized_medium.url
        })
    })

    return gifs;
}