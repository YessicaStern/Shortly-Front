import React from "react";
import GlobalStyle from "./App/style/style";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import RankingInit from "./App/RankingInit";
import Signup from "./App/Signup";
import Signin from "./App/Signin";
import User from "./App/User";
import RankingUser from "./App/RankingUser";
import Urls from "./App/Urls";


export default function App(){

    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<RankingInit/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/ranking" element={<RankingUser/>}/>
            <Route path="/urls/:id" element={<Urls/>}/>   
        </Routes>
        </BrowserRouter>

        </>
    );
};


//rota de ranking
// layout rota unica e delete unico sem token, conferir rota delete
// rota  /urls/open/:shortUrl

// refazer o banco de dados
// testar tudo novamente
// fazer o deploy
// preparar o env
// fazer o dump