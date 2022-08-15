import Logo from "../logo/Transparent_Logo.svg"

export default function Header(){
    return(
        <div className="header">
          <img src={Logo} width={"90px"}/>  
        </div>
    )
}