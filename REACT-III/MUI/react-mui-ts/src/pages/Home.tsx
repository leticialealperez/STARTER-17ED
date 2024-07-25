import { Box, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CardProduct } from "../components/functionals/Card";
import { products } from "../configs/data/products.data";
import { Product } from "../configs/interfaces/product";

export function Home() {
  const [listProducts, setListProducts] = useState<Product[]>(products);

  function handleSearch(ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!ev.target.value) {
      setListProducts(products);
      return;
    }

    setListProducts((current) =>
      current.filter((p) => p.name.toUpperCase().includes(ev.target.value.toUpperCase())),
    );
  }

  return (
    <Container component='main' maxWidth='lg' sx={{ minHeight: "80vh" }}>
      <Stack spacing={5}>
        <Box component='section'>
          <Typography variant='h1' textAlign='center' marginBottom={2}>
            Shopping
          </Typography>

          <TextField type='text' label='Busque por nome' fullWidth onChange={handleSearch} />
        </Box>

        <Box component='section'>
          <Grid container spacing={3}>
            {listProducts.map((product) => (
              <Grid key={product.id} item xs={12} md={6} lg={4}>
                <CardProduct product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
