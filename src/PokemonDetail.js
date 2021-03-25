import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import './Details.css';

const PokemonDetail = ({ match }) => {

    const [poke, setPoke] = useState({});

    useEffect(() => {
        async function fetchData() {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`).then(response => {
                setPoke(response.data);
            })
        }
        fetchData();
    }, [])

    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1000"
    }

    // LOADING
    if (poke.sprites === undefined) {
        return (
            <div style={style}><MoonLoader size={100} color="yellow" loading /></div>
        );
    }

    return (
        <div className="pokemonDetails" >
            <div className="container">
                <div className="details">

                    {console.log(poke)}
                    <div className="sprites">
                        {/* SPRITE  */}
                        {/* main */}
                        <div className="mainSprite">
                            <img src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`} alt="Pokemon" />
                        </div>
                        {/* male */}
                        <div className="smallSprites">
                            {poke.sprites.front_default && <img src={poke.sprites.front_default} alt="Pokemon" />}
                            {poke.sprites.back_default && <img src={poke.sprites.back_default} alt="Pokemon" />}
                            {poke.sprites.front_shiny && <img src={poke.sprites.front_shiny} alt="Pokemon" />}
                            {poke.sprites.back_shiny && <img src={poke.sprites.back_shiny} alt="Pokemon" />}

                            {/* female */}
                            {poke.sprites.front_female && <img src={poke.sprites.front_female} alt="Pokemon" />}
                        </div>
                    </div>
                    <div className="pokeName">
                        <h1>{poke.name}</h1>
                        <p>#{poke.id}</p>
                    </div>

                    {/* TYPY */}
                    <div className="info">
                        <div className="types">
                            {poke.types.map((e, key) => {
                                return (<p className={e.type.name} key={key}>{e.type.name}</p>);
                            })}
                        </div>
                        <div className="ability">
                            cos tu taj sobie bedzie
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PokemonDetail;