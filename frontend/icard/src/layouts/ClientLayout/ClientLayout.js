import React from 'react'

export function ClientLayout(props) {

    console.log("Client children layout props:");
    console.log(props.children);

    return (
        <div>
            <p>Client Layout</p>
            {props.children}
        </div>
    )
}
