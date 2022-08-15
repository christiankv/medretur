import { useEffect } from "react";
import { useState } from "react";

export default function Retur(){
    const titles= ["Hva skal du levere?", "hvor mye er igjen?"]
    const choices = ["choice1", "choice2", "choice3", "choice4"]
    const [rchoices, setRchoices] = useState([])
    const [ran, setran]= useState(true)
    console.log(ran);
    // function Returchoices() {
    const [form, setform] = useState({
        type: "",
        alternativ: "",
        igjen: 0
    })   

    // }
    if (ran){
            setran(false)
            choices.forEach(element => {
                const radio =  <input className="radio" id={element} type="radio" value={element} name="choice"/> 
                const button = <label className="retur--choice" htmlFor={element}>{element}</label>
                
                // <p >{element}</p>

            setRchoices(prev => (
                [...prev, radio, button ]))
 
    })}

    function boxchoice(e){
        const value = e
        console.log(value);
    }
    function radiobox(e){
        const value = e.target.value
        console.log(value);
    }

    function igjen(e) {
        console.log(e.target.value)
    }


    return(
        <div className="retur main">
            <h2>retur</h2>
            <div className="retur--form">
                <h3>{titles[0]}</h3>
                <div className="retur-type">
                <div 
                id= "pillebox" 
                className="box" 
                onClick={()=> boxchoice("pillebox")}>
                    <p>pillebox</p> 
                </div>
                <div 
                id= "flasker" 
                className="box" 
                onClick={()=> boxchoice("flasker")}>
                    <p>flasker</p> 
                    </div>
                <div 
                id="pillebrett" 
                className="box" 
                onClick={()=> boxchoice("pillebrett")}>
                <p>pillebrett</p>
                </div>
                </div>
                <div className="retur--choices" onChange={(e)=> {radiobox(e)}} >{rchoices}</div>
                <h3>{titles[1]}</h3>
                <input type="range" max={100} min={0} onChange={(e) =>{igjen(e)}} ></input>
            
            <p className="btn">send</p>
            </div>
            
        </div>
    )
}