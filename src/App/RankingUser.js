import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { getRanking } from "./provider/axios";


export default function RankingUser(){
    const [ranking,setRanking]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        getRanking().then((e)=>{
            setRanking(e.data)
        }).catch((err)=>{console.log(err)});
    },[]);
    const name=localStorage.getItem("name");
    return(
        <DivRanking>
            <DivTop>
                <h1 onClick={()=>{navigate("/signin")}}>Seja bem vindo {name}</h1> 
                <DivH2>
                    <h2 onClick={()=>{navigate("/user")}}>Home</h2>
                    <h2 onClick={()=>{navigate("/ranking")}}>Ranking</h2>
                    <h2 onClick={()=>{localStorage.removeItem("token");localStorage.removeItem("name");navigate("/")}}>Sair</h2>
                </DivH2>
            </DivTop>

            <DivLogo><H1Title>Shortly</H1Title> <img src="./images/logo-shortly.png"/></DivLogo>
            <DivLogoRanking><img src="./images/ranking.svg"/> <h1>Ranking</h1></DivLogoRanking>

            <DivContentsRanking>
                {ranking.map((e,i)=>(
                    <div key={i}><h1>{i+1} . {e.name} - </h1><h2>{e.linksCount} links - {e.visitCount} visualizações </h2></div>
                ))}
            </DivContentsRanking>
        </DivRanking>
    );
};

const center=`
    display: flex;
    justify-content: center;
    align-items: center;
`
const DivRanking=styled.div`
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
    justify-content: space-between;
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
const DivH2=styled.div`
    display:flex;
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
const DivLogoRanking=styled.div`
    box-sizing:border-box;  
    ${center}
    margin-bottom: 60px;
    h1{
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #000000;
        margin-left: 15px;
    }
`

const DivContentsRanking=styled.div`
    width: 80%;
    height: 100%;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    display:flex;
    flex-direction: column;
    font-size: 22px;
    line-height: 28px;
    padding: 35px;
    color: #000000;
    div{
        display:flex;
    }
    h1{
        font-weight: 500;
        margin: 5px 0;
    }
    h2{
        font-weight: 400;
        margin: 5px 0;
    }
`