import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]) // Definimos este, para usarlo en la petición
    
    const { content, loading } = useFetchGifs( category ); // Mi Hook

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Loading</p> }
            <div className='card-grid'>
                {
                    content.map(img => {
                        return (
                            <div key={img.id} className='card'>
                                <img src={img.url} alt={img.title} />
                                <p>{img.title}</p>
                            </div>
                        )
                    })
                }
            </div> 
            
        </>
    )
}
