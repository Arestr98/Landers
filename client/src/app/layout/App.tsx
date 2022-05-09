import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Typography from '@mui/material/Typography';
import Header from "./Header";
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";





function App() {
  
 

  
  return (
    <>
      <Header />
      <Container>
        <Catalog/>
      </Container>
    </>

  );
}

export default App;
