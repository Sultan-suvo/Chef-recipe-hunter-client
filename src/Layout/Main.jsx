/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navabr/Navbar';
import Footer from '../Components/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;