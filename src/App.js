import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route  path='/dialogs'  render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route  path='/profile' render={()=><Profile posts={props.posts}/>}/>
                    <Route  path='/news' render={()=><News/>}/>
                    <Route  path='/music' render={()=><Music/>}/>
                    <Route  path='/settings' render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
