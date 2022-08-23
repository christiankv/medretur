import Igjen from "./igjen"
import Type from "./type"
import { useState } from "react";


export default function Form(prop) {
   const titles = prop.title
   const types = prop.types
   const rangechoces = prop.rangechoces
   const [form, setform] = useState({
    type: "",
    igjen: 0
})   






    return(
        
        <div className="retur--form">
            <Type
            titles = {titles}
            types = {types}
            setform = {setform}
            form = {form}
            />
            <Igjen 
            titles = {titles}
            setform = {setform}
            form = {form}
            rangechoces = {rangechoces}
            />
            
            <p
          className="btnAdd"
          onClick={() => 
            prop.setbasket(prev=>[...prev,form])
          }
        >
          Legg til
        </p>
            



      </div>
    ) 
}