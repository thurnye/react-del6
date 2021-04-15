import React from 'react'
import Button from '../buttons/attackBtn'
export default function SingleFighter(props) {
    return (
        <div>
            <div className="score">
                <h4>Cuteness Meter: {props.score}</h4>
            </div>
            <img src={`${props.img}`} alt='img' />
            <Button attack={props.attack} id={props.id}/>
        </div>
    )
}
