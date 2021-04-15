import React from 'react'

export default function attackBtn(props) {
    return (
        <div>
            {/* {props.id} */}
            <button onClick={() => props.attack(props.id)}> Attack</button>
        </div>
    )
}
