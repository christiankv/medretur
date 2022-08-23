import React from 'react';
import Logo from "../assets/logos/Transparent_Logo.svg"

export default function Header(){
    return(
        <div className="header">
          <img src={Logo} width={"90px"} alt="Logo"/>
        </div>
    )
}