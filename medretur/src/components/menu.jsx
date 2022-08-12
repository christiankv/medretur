import { useState } from "react"
import Profil from "./profil"
import About from "./about"
import Retur from "./retur"

export default function Menu(){
const [currentcontent, setcurrentcontent] = useState("profil")

    function content() {
        switch (currentcontent){
            case "profil":
               return <Profil/>
            case "about":
                return <About/>
            case "retur":
                return<Retur/>

        }

    }



    return(
        <div className="main">
            {content()}
            <div className="menu" onClick={(e)=>{
                console.log(e.target.id)
                setcurrentcontent(e.target.id)
            }} >
                <p className="btn" id="profil">profil</p>
                <p className="btn" id="retur">retur</p>
                <p className="btn" id="about">om oss</p>
            </div>
        </div>
        )
}