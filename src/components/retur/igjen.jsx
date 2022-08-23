import { useState } from "react";
export default function Igjen(prop){
    const [rchoices, setRchoices] = useState([])
    const [ran, setran]= useState(true)



    if (ran){ 
        setran(false)
        prop.rangechoces.forEach((element, index) => {
            const value = parseInt(element) 
            const button = <p className="retur--choice" key={index} onClick={() => prop.setform(prev=>({
                ...prev,
                igjen: value
            })) }>{value}% </p>


        setRchoices(prev => (
            [...prev, button ]))

})}



    function igjensmall(a) {
        const value = 1
        if (a === "+" & prop.form.igjen<100){
            prop.setform(prev => ({
                ...prev,
                igjen: prev.igjen + value
            }))  
        }else if(a==="-"& prop.form.igjen>0){
            prop.setform(prev => ({
                ...prev,
                igjen: prev.igjen - value
            }))   
        }
    }

    return(
        <>
        <h3>{prop.titles[1]}</h3>
        <div className="retur--range--container">
        <div
                    className="retur--choices"
                >
                    {rchoices}
                </div>
            <p>{prop.form.igjen}%</p>
            <div className="retur--range">
                <p className="retur--rangebtn" onClick={(e) => igjensmall("-")}>
                -
                </p>
                <input
                type="range"
                min={0}
                max={100}
                value={prop.form.igjen}
                onChange={(e) => 
                prop.setform(prev => ({
                ...prev,
                igjen: e.target.value
                }))} 
                className="sliderRange"
                ></input>
                <p className="retur--rangebtn" onClick={(e) => igjensmall("+")}>
                +
                </p>
                </div>
            </div>

        </>
    )
}

