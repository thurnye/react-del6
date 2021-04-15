import React from 'react'
import Player from './SingleFighter'

export default function fighter(props) {
    return (
        <div>
            
            <div className="fighters">
            {
                props.fighters.map((el) => {
                   return <div className="fighters">
                        <Player 
                        className="fighterImg" 
                        id={el.id} 
                        img={el.image}
                        score= {el.score}
                        attack={props.attack} 
                        />
                        
                    </div>
                })
            }
            </div>
            
        </div>
    )
}
