import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';
import Pager from './Pager';
import Card from './Card';

const CardContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    const [urlApi, setUrlApi] = useState('https://pokeapi.co/api/v2/pokemon?limit=100');
    const [urlApiNext, setUrlApiNext] = useState();
    const [urlApiPrev, setUrlApiPrev] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        let cancel;

        axios.get(urlApi, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(data => {
            setUrlApiNext(data.data.next);
            setUrlApiPrev(data.data.previous);
            setPokemon(data.data.results.map(p => [p.name, p.url.split('/')]));
            setLoading(false);
        });

        return () => cancel();
    }, [urlApi]);

    function nextPage() {
        setUrlApi(urlApiNext);
    }

    function prevPage() {
        setUrlApi(urlApiPrev);
    }

    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1000"
    }

    return (
        <div className="card-container">
            {(loading) && <div style={style}><MoonLoader size={100} color="yellow" loading /></div>}
            {pokemon.map((p, i) => (
                <Card title={p[0]} key={p} id={p[1]} />
            )
            )}
            <Pager nextPage={urlApiNext ? nextPage : false} prevPage={urlApiPrev ? prevPage : false} />
        </div>
    )
}

export default CardContainer;




