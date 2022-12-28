export const getGifs = async(category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=bSp3Q0YNqKoVQldFvBKSmx0WB1Pdlb57`
    
    const response = await fetch(url);

    const { data } = await response.json();
    const gifs = data.map(({id, title, images} = img) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url
        }
    })
    
    return gifs
    
}

