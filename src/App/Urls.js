import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { deleteUrl, getOpen, getUrlId } from "./provider/axios";
import { useParams } from "react-router-dom";

export default function Urls(){
    const [urls,setUrls]=useState("");
    const [urlShort,setUrlShort]=useState("");
    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getUrlId(id).then((e)=>{
            setUrls(e.data[0].url);
            setUrlShort(e.data[0].shortUrl);
            console.log(e)
        }).catch((err)=>{
            alert("não encontrado");
            navigate("/");
        });
    },[]);

    function trash(){
        deleteUrl(id).then((e)=>{
            alert("Deletado com sucesso");
            navigate("/user");
        }).catch((err)=>{
            alert("não autorizado");
        });
    };
    // function route(){
    //     getOpen(urlShort).then((e)=>{
    //         console.log(e);
    //     }).catch((err)=>{
    //         console.log("erro",err);
    //     });
    // }
    
    const name=localStorage.getItem("name");
    return(
        <DivUser>
            <DivTop>
            </DivTop>
            <DivLogo><H1Title>Shortly</H1Title> 
            {/* <img src="./images/logo-shortly.png"/> */}
            </DivLogo>

            <DivContaineruser>

                    <div>
                        <DivLinks>
                            <h1>{urls}</h1>
                            <h1 onClick={()=>{route()}} >{urlShort}</h1>
                        </DivLinks>
                        <DivTrash onClick={()=>{trash()}}>
                                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.63929 0.89832C6.90446 0.34775 7.44955 0 8.04375 0H13.9563C14.5504 0 15.0955 0.34775 15.3607 0.89832L15.7143 1.625H20.4286C21.2978 1.625 22 2.3527 22 3.25C22 4.1473 21.2978 4.875 20.4286 4.875H1.57143C0.703705 4.875 0 4.1473 0 3.25C0 2.3527 0.703705 1.625 1.57143 1.625H6.28571L6.63929 0.89832ZM1.52723 6.5H20.4286V22.75C20.4286 24.5426 19.0192 26 17.2857 26H4.67009C2.97835 26 1.52723 24.5426 1.52723 22.75V6.5ZM5.4558 10.5625V21.9375C5.4558 22.3844 5.85357 22.75 6.24152 22.75C6.71786 22.75 7.02723 22.3844 7.02723 21.9375V10.5625C7.02723 10.1156 6.71786 9.75 6.24152 9.75C5.85357 9.75 5.4558 10.1156 5.4558 10.5625ZM10.1701 10.5625V21.9375C10.1701 22.3844 10.5679 22.75 10.9558 22.75C11.4321 22.75 11.7857 22.3844 11.7857 21.9375V10.5625C11.7857 10.1156 11.4321 9.75 10.9558 9.75C10.5679 9.75 10.1701 10.1156 10.1701 10.5625ZM14.9286 10.5625V21.9375C14.9286 22.3844 15.2821 22.75 15.7143 22.75C16.1464 22.75 16.5 22.3844 16.5 21.9375V10.5625C16.5 10.1156 16.1464 9.75 15.7143 9.75C15.2821 9.75 14.9286 10.1156 14.9286 10.5625Z" fill="#EA4F4F"/>
                                </svg>
                        </DivTrash>    
                     </div>

            </DivContaineruser>
        </DivUser>
    );
};

const center=`
    display: flex;
    justify-content: center;
    align-items: center;
`
const DivUser=styled.div`
    width:100%;
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
const DivContaineruser=styled.div`
    flex-direction:column;
    width:80%;
    height:100%;
    margin-bottom:60px;
    div{
        display:flex;
        margin-bottom:20px;
    }
    h3{
        color: #9C9C9C;
        font-weight: 400;
        font-size: 25px;
        text-align: center;
    }
`
const DivH2=styled.div`
    display:flex;
`
const InputLink=styled.input`
    box-sizing: border-box;     
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    outline: none;
    padding: 0 20px;
    ::placeholder{
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
    }
`
const FormLink=styled.div`
    width:100%;
    margin-bottom:50px;
    display:flex;
`;
const ButtonLink=styled.button`
    width: 182px;
    height: 60px;
    background: #5D9040;
    border-radius: 12px;
    border:1px solid transparent;
    margin-left:70px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    cursor: pointer;

`
const DivLinks=styled.div`
    width: 100%;
    height: 60px;
    background: #80CC74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding 0 20px;
    h1{
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
    }
`;
const DivTrash=styled.div`
    width: 130px;
    height: 60px;
    ${center}
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    cursor:pointer;
    img{
        width: 25px;
    }
`;
