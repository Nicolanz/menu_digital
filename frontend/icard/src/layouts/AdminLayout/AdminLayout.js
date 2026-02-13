import React from 'react'

export function AdminLayout(props) {

    console.log("Admin children layout props:");
    console.log(props.children);

    return (
        <div>
            <p>Admin Layout</p>
            {props.children}
        </div>
    )
}
