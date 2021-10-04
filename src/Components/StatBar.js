import React from 'react'
import "./StatBar.css"


function StatBar({bar_width, color1, color2, label, height}) {

    const outerStyles = {
        width: "60%",
        height: `${height}`,
        backgroundColor: "whitesmoke",
        boxShadow: "inset 0px 0px 4px -2px rgba(0, 0, 0, 0.3)",
        borderRadius: "20px"
    }

    const innerStyles = {
        background: `linear-gradient(to right, ${color1} 0%, ${color2} 100%)`,
        width: `${bar_width}%`,
        height: "100%",
        borderRadius: "inherit",
        textAlign: "right"
    }

    const containerStyles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0.4em 1em",
        alignItems: "center",
        padding: "0 0.8em"
    }

    const labelStyles = {
        fontSize: 12,
    }

    return (
        <div style={containerStyles}>
            <label style={labelStyles}>{label}</label>
            <div style={outerStyles}>
                <div style={innerStyles}/>
            </div>    
        </div>
    )}


export default StatBar