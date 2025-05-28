import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import LoginForm from "./papges/LoginForm";
import Join from "./papges/Join";
import SearchMap from "./papges/SearchMap";
import Aside from "./components/Aside";
import SoftwareList from "./components/SoftwareList";
import Testest from "./papges/Testest";
import SwalExample from "./papges/SwalExample";
import SoftwareView from "./components/SoftwareView";
import SoftwareView_1 from "./components/SoftwareView_1";
import ChangeExample from "./papges/ChangeExample";
import ClickExample from "./papges/ClickExample";
import OnClickExample from "./papges/OnClickExample";
import Register from "./papges/Register";

import './css/new.css';
import './css/samsung.css';
import './css/join.css'
import './css/map.css'
import './css/aside.css'

function App(){
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/LoginForm" element={<LoginForm />} />
                <Route path="/Join" element={<Join />} />
                <Route path="/SearchMap" element={<SearchMap />} />
                <Route path="/Testest" element={<Testest />} />
                <Route path="/SoftwareList" element={<SoftwareList />} />
                <Route path="/SwalExample" element={<SwalExample />} />
                <Route path="/SoftwareView/:swtcode" element={<SoftwareView />} />
                <Route path="/SoftwareView_1" element={<SoftwareView_1 />} />
                <Route path="/ClickExample" element={<ClickExample />} />
                <Route path="/ChangeExample" element={<ChangeExample />} />
                <Route path="/OnClickExample" element={<OnClickExample />} />
                <Route path="/Register" element={<Register />} />
                


            </Routes>
            <Aside/>
            <Footer name="YURIM"/>
        </Router>
    );
}

export default App;