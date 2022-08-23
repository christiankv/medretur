import React from 'react';
import "../src/App.css";
import Menu from "./components/menu";
import Header from "./components/header";
/* import { useState } from "react"; */

function App() {

/*   const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const register = async () => {
 pZPZPZP
  };

  const login = async () =>{

  };

  const logout = async () =>{

  }; */

  return (
    <div className="app">
      <Header/>
      <Menu/>
    </div>
  );
}

export default App;