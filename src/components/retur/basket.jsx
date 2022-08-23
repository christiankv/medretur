import { useState } from "react";


export default function Basket(prop){
    const [basketdisplay, setbasketdisplay]= useState([])
    
    if (basketdisplay.length< prop.basket.length){
        
        let currentitem = prop.basket[basketdisplay.length]

        setbasketdisplay(prev=>[...prev, <p>{currentitem.type}({currentitem.igjen}%)</p>])
    }



return(
    <>
    {basketdisplay}
    </>
)
}