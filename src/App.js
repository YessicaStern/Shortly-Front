import React from "react";
import GlobalStyle from "./App/style/style";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import RankingInit from "./App/RankingInit";
import Signup from "./App/Signup";
import Signin from "./App/Signin";
import User from "./App/User";

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
            
        </Routes>
        </BrowserRouter>

        </>
    );
};