import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components"

import { Main, Detail, Wish, Watch, About } from "./page";


export class Root extends Component {
    render() {
        const GlobalStyle = createGlobalStyle`
            body{
                background-color: #fafafa;
                margin:0;
                padding:0;
            }
        `
        return (
            <div>
                <Route exact path='/' component={Main} />
                <Route path='/detail/:id' component={Detail} />
                <Route path='/wish' component={Wish} />
                <Route path='/watch' component={Watch} />
                <Route path='/about' component={About} />

                <GlobalStyle />
            </div>
        )
    }
}

export default Root
