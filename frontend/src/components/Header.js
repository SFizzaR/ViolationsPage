import React from "react";
import Avatar from '@mui/material/Avatar';

export default function Header({ CurrentPage }) {
    console.log("CurrentPage prop:", CurrentPage);
    return (
        <header
            style={{
                width: '100%',
                background: '#0000FF',
                height: "4vh",
                justifyContent: 'center',
                padding: '5vh',
                display: 'flex',
                flexDirection: 'row'

            }}
        >
            <div
                style={{
                    justifyContent: 'start',
                    width: '100%'
                }}>
                <p
                    style={{
                        color: 'white',
                        marginLeft: '15vw'
                    }}>
                    {CurrentPage}
                </p>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'end',
                    width: '100%',
                    color: 'white',
                    alignItems: 'center'
                }}>
                <i
                    className="fa-regular fa-bell"
                    style={{
                        margin: '15px'
                    }}
                />
                <Avatar />
            </div>
        </header>
    )
}