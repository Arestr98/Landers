import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Typography from '@mui/material/Typography';
import Header from "./Header";
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"





function App() {




  return (
    <>
    <ToastContainer position="bottom-right" hideProgressBar theme='colored'/>
      <Header />
      <CssBaseline />
      <Container>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog} />
        <Route path='/catalog/:id' component={ProductDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Container>
    </>

  );
}

export default App;
