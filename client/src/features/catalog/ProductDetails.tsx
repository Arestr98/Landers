import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

export default function ProductDetails(){
    const {id} = useParams<{id: string}>()
    const[product,setProduct] = useState<Product | null>(null)
    const[loading,setLoading] = useState(true)

    useEffect(() => {
        agent.Catalog.details(parseInt(id))
        .then(response => setProduct(response))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))
    },[id])

    if(loading) return <h3>Loading...</h3>
    if(!product) return <h3>No se encontro producto</h3>

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src ={product.urlImagen} alt={product.nombre} style = {{width:'100%'}}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3">{product.nombre}</Typography>
                <Divider sx={{mb:2}}/>
                <Typography variant="h4" color='secondary'>${(product.precio / 1000).toFixed(3)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>{product.nombre}</TableCell>
                            </TableRow>    
                            <TableRow>
                                <TableCell>Descripcion</TableCell>
                                <TableCell>{product.descripcion}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Categoria</TableCell>
                                <TableCell>{product.categoria}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Stock</TableCell>
                                <TableCell>{product.stock}</TableCell>
                            </TableRow>  
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            

        </Grid>
    )
       
}