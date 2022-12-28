import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    //Cuando se utilize useFetch, invocará el useState con estos valores predeterminados
    const [cont, setCont] = useState({
        content: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category)
        .then( imgs => {
            setTimeout(() => {
                console.log(imgs)
                setCont({
                    content: imgs,
                    loading: false
                });
            }, 3000);

        }).catch(err => {
            console.log(err)
        })

    }, [category])

    return cont // {content: [], loading:true}
}