import { useEffect, useState } from "react";
import { Avatar, Button, FormControl, FormGroup, FormControlLabel, FormLabel, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Radio, RadioGroup, TextField, Checkbox } from "@mui/material"
import { Product } from "../../app/models/product"
import ProductList from "./ProductList"
import agent from "../../app/api/agent";


const sortOptions = [
    { value: 'priceDesc', label: 'Precio mayor a menor' },
    { value: 'price', label: 'Precio menor a mayor' },
]



export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([])
    const [count, setCount] = useState(0);
    const [categorias, setCategorias] = useState([
        { id: '0', value: 'Antiadherentes', label: 'Antiadherentes', check: true },
        { id: '1', value: 'OllasPresion', label: 'Ollas a presion', check: true },
        { id: '2', value: 'Calderos', label: 'Calderos', check: true },
        { id: '3', value: 'Utensilios', label: 'Utensilios', check: true },
        { id: '4', value: 'Electrodomesticos', label: 'Electrodomesticos', check: true },]
    );
    let sort = ''
    let categ = ''
    let params = new URLSearchParams();
    params.append('Ordenar', '');
    params.append('Buscar', '');
    params.append('Categoria', '');

    let UiChange = false
    let sortChange = false
    let searchChange = false


    useEffect(() => {
        agent.Catalog.list(params).then(products => setProducts(products))
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
            if ((UiChange || sortChange || searchChange )) {
                agent.Catalog.list(params).then(products => setProducts(products))
                UiChange = false
                sortChange = false
                searchChange = false
            }
        }, 1000);


    });

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        params.set('Buscar', event.target.value)
        searchChange = true
    };

    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {

        sort = event.target.value
        params.set('Ordenar', sort)
        sortChange = true
    };

    

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        var index = parseInt(event.target.name)
        let array = []

        for (let row in categorias) {

            if (event.target.defaultValue == categorias[row].value) {
                categorias[row].check = event.target.checked
            }
            if (categorias[row].check) {
                array.push(categorias[row].value)
            }

        }
        categ = array.join(',')
        params.set('Categoria', categ)

        UiChange = true
    };



    return (
        <Grid container spacing={4}>

            <Grid item xs={3}>
                <Paper sx={{ mb: 2, bgcolor: '#e3e3e3' }}>
                    <TextField label='Buscar' variant="outlined" onChange={handleChangeText} fullWidth />
                </Paper>
                <Paper sx={{ mb: 2, p: 2, bgcolor: '#e3e3e3' }}>
                    <FormControl>
                        <RadioGroup>
                            {sortOptions.map(({ value, label }) => (
                                <FormControlLabel key={value} value={value} control={
                                    <Radio onChange={handleChangeRadio} />
                                } label={label} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Paper>
                <Paper sx={{ mb: 2, p: 2, bgcolor: '#e3e3e3' }}>
                    <FormGroup >
                        {categorias.map(({ id, value, label }) => (
                            <FormControlLabel key={id} value={value} control={
                                <Checkbox defaultChecked onChange={handleChangeCheckbox} name={id} />
                            } label={label} />
                        ))}
                    </FormGroup>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ProductList products={products} />
            </Grid>
        </Grid>
    )
}