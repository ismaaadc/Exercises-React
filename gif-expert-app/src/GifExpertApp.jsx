import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch'])
    
    // const handleadd = () => {
    //     setCategories([...categories, "HunterXHunter"]) //Añadimos un nuevo valor a categories
    // }

    /*
     * ¿Por que el foreach no funciona?
     * Por que el foreach es un bucle, map es una matriz
     */

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Componente con el input para añadir una categoría  */}
            <AddCategory setCategories={setCategories} /> {/*  Este nos sirve para añadir al array de categorias */}
            <hr/>
            <ol>
                { 
                    categories.map(categorie => {
                        return <GifGrid key={categorie} category={categorie} />
                    })
                }
            </ol>
        </>
    )
}