import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { deleteUrl, getUser, postUrl } from "./provider/axios";


export default function User(){
    const [userMe,setUserMe]=useState([]);
    const [urls,setUrls]=useState([]);
    const [atualization,setAtualization]=useState(false);
    const [value,setValue]=useState("");
    const [form,setForm]=useState({
        url: ""
    });
    const navigate=useNavigate();
    let zeroLinks;
    
    useEffect(()=>{
        getUser().then((e)=>{
            setUrls(e.data.shortenedUrls);
            localStorage.setItem("name",e.data.name);
        }).catch((err)=>{
            navigate("/signin")});
    },[atualization]);
    if(!urls){
        zeroLinks=<h3>nenhum link encurtado</h3>
    }
    function handleForm(e){
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value,});
        setValue(e.target.value);
    };
    function trash(e){
        // navigate(`/users/${e}`);
        //conferir rota de delete
        deleteUrl(e).then((e)=>{
            setAtualization(!atualization);
            console.log(e);
            // navigate("/user");
        }).catch((err)=>{
            alert(err)
        });
    };
    function short(){
        postUrl(form).then((e)=>{
            setAtualization(!atualization);
            setValue("");
        }).catch((err)=>{
            alert("the field must not be empty and must be a URL");
        });
    };
    const name=localStorage.getItem("name");
    return(
        <DivUser>
            <DivTop>
                <h1 onClick={()=>{navigate("/signin")}}>Seja bem vindo {name}</h1> 
                <DivH2>
                    <h2 onClick={()=>{navigate("/user")}}>Home</h2>
                    <h2 onClick={()=>{navigate("/ranking")}}>Ranking</h2>
                    <h2 onClick={()=>{localStorage.removeItem("token");localStorage.removeItem("name");navigate("/")}}>Sair</h2>
                </DivH2>
            </DivTop>
            <DivLogo><H1Title>Shortly</H1Title> <img src="./images/logo-shortly.png"/></DivLogo>

            <DivContaineruser>
                <FormLink>
                    <InputLink placeholder="Links que cabem no bolso" type="text" name="url" onChange={handleForm}  value={value} />
                    <ButtonLink onClick={()=>{short()}}>Encurtar link</ButtonLink>
                </FormLink>
                {zeroLinks}
                {urls.map((e,i)=>(
                    <div key={i}>
                        <DivLinks>
                            <h1>{e.url}</h1>
                            <h1>{e.shortUrl}</h1> 
                            <h1>Quantidade de visitantes: {e.visitCount}</h1>
                        </DivLinks>
                        <DivTrash onClick={()=>{trash(e.id)}}><img src="./images/trash.svg"/></DivTrash>    
                     </div>))}

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
