import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { postSignIn } from "./provider/axios";


export default function Signin(){
    const navigate=useNavigate();
    const [form,setForm]=useState({
        email:"",
        password:"", 
    });
    function handleForm(e){
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value,});
    };
    function enter(){
        postSignIn(form).then((e)=>{
            localStorage.setItem("token",e.data.token);
            navigate("/user");
        }).catch((err)=>{
            alert(err.response.data.message);
        });
    };
    return(
        <DivSignIn>
            <DivTop><h1 onClick={()=>{navigate("/signin")}}>Entrar</h1> <h2 onClick={()=>{navigate("/Signup")}}>Cadastre-se</h2></DivTop>
            <DivLogo><H1Title>Shortly</H1Title> <img src="./images/logo-shortly.png"/></DivLogo>

            <DivContainerSignIn>
                <InputSignIn placeholder="E-mail" name="email" onChange={handleForm}/>
                <InputSignIn placeholder="Senha" name="password" type="password" onChange={handleForm}/>
                <ButtonSignIn onClick={()=>{enter()}}>Entrar</ButtonSignIn>
            </DivContainerSignIn>
        </DivSignIn>
    );
};

const center=`
    display: flex;
    justify-content: center;
    align-items: center;
`
const DivSignIn=styled.div`
    width:100%;
    font-family: 'Lexend Deca';
    box-sizing:border-box;
    ${center}
    flex-direction: column;
`
const DivTop=styled.div`
    width:100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display:flex;
    justify-content: flex-end;
    padding:40px 10%;
    box-sizing:border-box;  
    h1{
        color: #5D9040;
        cursor: pointer;
    }
    h2{
        color: #9C9C9C;
        margin-left: 40px;
        cursor: pointer;
    }
`
const H1Title=styled.h1`
    font-weight: 200;
    font-size: 64px;
    line-height: 80px;
    color: #000000;
`
const DivLogo=styled.div`
    width:100%;
    box-sizing:border-box;  
    ${center}
    margin-bottom: 60px;
    img{
        width: 100px;
        margin-left: 20px;
    }
`
const DivContainerSignIn=styled.div`
    ${center}
    flex-direction:column;
`
const InputSignIn=styled.input`    
    box-sizing: border-box;
    width: 769px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    margin-bottom:20px;
    padding: 0 20px;
    outline:none;
    ::placeholder{
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
    }
`
const ButtonSignIn=styled.button`
    width: 182px;
    height: 60px;
    background: #5D9040;
    border-radius: 12px;
    border: solid transparent;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    margin-top:40px;
    cursor: pointer;
`