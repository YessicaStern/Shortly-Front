import axios from "axios";

const token=localStorage.getItem("token");
const config={headers:{Authorization:`Bearer ${token}`}};

const url="http://127.0.0.1:4000"

function getRanking(){
    return axios.get(`${url}/ranking`);

};
function postSignUp(e){
    return axios.post(`${url}/signup`,e);
};
function postSignIn(e){
    return axios.post(`${url}/signin`,e);
}
function postShorten(e){
    return axios.post(`${url}/urls/shorten`);
}
function getUser(){
    return axios.get(`${url}/users/me`,config);
}
function deleteUrl(e){
    return axios.delete(`${url}/urls/${e}`,config);
}

export{getRanking,postSignUp,postSignIn,getUser,deleteUrl};