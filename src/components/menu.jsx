import React from 'react';
import { useState } from "react"
import Profil from "./profil"
import OmOss from "./omoss"
import Retur from "./retur"

export default function Menu(){
const [currentcontent, setcurrentcontent] = useState("profil")

    function content() {
        switch (currentcontent){
            case "profil":
               return <Profil/>
            case "omOss":
                return <OmOss/>
            case "retur":
                return<Retur/>
            default:
                return <Profil/>

        }

    }



    return(
        <div className="container">
            {content()}
            <div className="menu" onClick={(e)=>{
                // console.log(e.target.id)
                setcurrentcontent(e.target.id)
            }} >
                <p className="btn" id="profil">Profil</p>
                <p className="btn" id="retur">Retur</p>
                <p className="btn" id="omOss">Om oss</p>
            </div>
        </div>
        )
}