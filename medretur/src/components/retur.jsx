import { useEffect } from "react";
import { useState } from "react";

export default function Retur(){
    const titles= ["Hva skal du levere?", "hvor mye er igjen?"]
    const choices = ["choice1", "choice2", "choice3", "choice4"]
    const [rchoices, setRchoices] = useState([])
    const [ran, setran]= useState(true)
    console.log(ran);
    // function Returchoices() {
        

    // }
    if (ran){
            setran(false)
            choices.forEach(element => {
            setRchoices(prev => (
                [...prev, <p className="retur--choice">{element}</p>]))
 
    })}


    return(
        <div className="retur main">
            <h2>retur</h2>
            <div className="retur--form">
                <h3>{titles[0]}</h3>
                <div className="retur-type">
                <div className="box"><p>pillebox</p> </div>
                <div className="box"><p>flasker</p></div>
                <div className="box"><p>pillebrett</p></div>
                </div>
                <div className="retur--choices" >{rchoices}</div>
                <h3>{titles[1]}</h3>
                <input type="range" max={100} min={0} onChange={(event) =>{console.log(event.target.value)}} ></input>

            </div>
            
        </div>
    )
}