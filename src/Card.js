import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="content">
            <div className="card">
                <div className="avatar">
                    <div className="circle"></div>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.id[props.id.length - 2]}.png`} alt="" />
                </div>
                <div className="info">
                    <h1>{props.title}</h1>
                    <h3>id #{props.id[props.id.length - 2]}</h3>
                    <Link to={`/pokemon/${props.id[props.id.length - 2]}`}><button>Więcej info</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Card;