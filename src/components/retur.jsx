import React from 'react';
import { useState } from "react";
import sheet from "../assets/svg/paper-sheet-svgrepo-com.svg"
import Basket from './retur/basket';
import Form from './retur/form';


export default function Retur(){
    const titles= ["Hva skal du levere?", "Hvor mye er igjen?"]
    const types = ["pillebox","flasker", "pillebrett"]
    const choices = ["10", "25", "50", "75"]
    const [basket, setbasket] = useState([])
    return(
<div className="retur-main">

  <Form
   title = {titles}
   types = {types}
   rangechoces = {choices}
   setbasket={setbasket}
  />
<Basket 
basket = {basket}
/>
</div>
    )
}