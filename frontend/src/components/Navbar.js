import React from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import NoCrashOutlinedIcon from '@mui/icons-material/NoCrashOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useState } from "react";
import '../pages/pings.css'

export default function Navbar({ onPageChange }) {
    const [activeItem, setActiveItem] = useState("Violations");


    const menuItems = [
        { label: "Tracking", icon: <LocationOnOutlinedIcon style={{ margin: '5px' }} /> },
        { label: "Assigned Vehicles", icon: <NoCrashOutlinedIcon style={{ margin: '5px' }} /> },
        { label: "Violations", icon: <ErrorOutlineOutlinedIcon style={{ margin: '5px' }} /> },
        { label: "Locations", icon: <LocationOnOutlinedIcon style={{ margin: '5px' }} /> },
        { label: "Vehicles", icon: <LocalShippingOutlinedIcon style={{ margin: '5px' }} /> },
        { label: "Profile", icon: <Person2OutlinedIcon style={{ margin: '5px' }} /> },
    ];

    const handleClick = (item) => {
        setActiveItem(item.label);
    };

    return (
        <div
            style={{
                position: "absolute",
                top: '1vw',
                left: '1vw',
                width: "15vw",
                height: "100vh",
                backgroundColor: "rgb(2, 10, 54)",
                zIndex: 1000,
                borderRadius: '20px'

            }}
        >
            <h1
                style={{
                    fontSize: '3vh',
                    color: 'white',
                    margin: '1vw',
                    fontFamily: 'Orbitron',
                    flexShrink: 1,
                    minWidth: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'

                }}>
                OPENSHIPPER
            </h1>
            <div
                style={{
                    alignItems: 'flex-start',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '3vw',
                    marginLeft: '1vw'
                }}>
                {menuItems.map((item) => (
                    <div
                        key={item.label}
                        onClick={() => {
                            handleClick(item)
                            onPageChange(item.label)
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '2px',
                            cursor: 'pointer',
                            backgroundColor: activeItem === item.label ? 'rgba(173, 216, 230, 0.5)' : 'transparent',
                            borderRadius: '10px',
                            padding: '5px 10px 5px 1px',
                            transition: '0.3s ease',
                            width: '90%',
                            alignItems: 'center',

                        }}
                    >
                        {item.icon}
                        <a
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                flexShrink: 1,
                                minWidth: 0,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}>
                            {item.label}
                        </a>

                    </div>
                ))}
            </div>
        </div >
    )
}