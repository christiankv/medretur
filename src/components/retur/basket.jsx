import { useState } from "react";
import sheet from "../../assets/svg/paper-sheet-svgrepo-com.svg"
// "../assets/svg/paper-sheet-svgrepo-com.svg"

export default function Basket(prop){

    const [overlay, setoverlay] = useState(false)
    const [basketdisplay, setbasketdisplay]= useState([])
    
    const value = basketdisplay.length
    console.log(value);
    if (basketdisplay.length< prop.basket.length){       
        let currentitem = prop.basket[basketdisplay.length]
        setbasketdisplay(prev=>[...prev, <p key={value*10}>{currentitem.type}({currentitem.igjen}%)</p>])
    }
    // console.log(basketdisplay);
    // console.log(basketdisplay.length);
    function Register() {
        switch (value){
            case 0:
                return (
                    <div className='retur--bottom'>
                        
                    </div>
                )
            case 1: case 2: case 3:
                return (
                    <div className='retur--bottom'>
                        <div className='r--list'>
                        {basketdisplay} 
                        </div>
                        <p>lever inn</p>
                    </div>
                )
            default: 
            return (
                <div className='retur--bottom'>
                <div className='r--listIcon'onClick={()=> setoverlay(true)}>
                  <img className='r--icon' src={sheet}  alt="Logo"/> 
                  <p className='r--nr'>x{value}</p>
                  <p className='r--listicon-more'>Klikk for mer</p>
                </div>
                <button className='leverInn'> Lever inn!</button>
            </div>
            )  


        }
        
    }
    function Overlay() {
        return(
            <div className='return--basket'>
                <p className='basket--close' onClick={()=> setoverlay(false)}>X</p>
                <div className='basket-items'>
                {basketdisplay}
                </div>
                <button className='leverInn'> Lever inn!</button>
            </div>
        )
    }



return(
    <>
    {overlay && <Overlay/>}
    <Register/>
    </>

)
}