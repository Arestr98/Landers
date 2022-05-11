
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { LoadingButton } from '@mui/lab';
import { Link } from "react-router-dom";

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {

    return (
        <Card sx={{ bgcolor: '#eaeaea' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {product.nombre.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.nombre}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: 'primary.main' }
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain' }}
                image={product.urlImagen}
                title={product.nombre}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    ${(product.precio / 1000).toFixed(3)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                     {product.categoria}
                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton
                    size="small">
                    Eliminar
                </LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">Ver</Button>
            </CardActions>
        </Card>
    )
}