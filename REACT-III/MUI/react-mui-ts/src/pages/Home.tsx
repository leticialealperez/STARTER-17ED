import FavoriteIcon from "@mui/icons-material/Favorite";
import DeslikeIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import img from "../assets/imagem.jpg";

export function Home() {
  return (
    <Stack spacing={2}>
      <AppBar position='static'>
        <Toolbar component='nav'>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <Badge badgeContent={4} color='secondary'>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container component='main' maxWidth='lg'>
        <Stack spacing={4}>
          <Box component='section'>
            <Typography variant='h1' textAlign='center'>
              Produtos
            </Typography>

            <TextField type='text' label='Busque por nome' fullWidth />
          </Box>

          <Box component='section'>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardMedia component='img' alt='green iguana' height='140' image={img} />

                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Lizard
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <IconButton size='small' color='primary'>
                      <ShareIcon />
                    </IconButton>
                    <IconButton size='small' color='error'>
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardMedia component='img' alt='green iguana' height='140' image={img} />

                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Lizard
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <IconButton size='small' color='primary'>
                      <ShareIcon />
                    </IconButton>
                    <IconButton size='small' color='error'>
                      <DeslikeIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardMedia component='img' alt='green iguana' height='140' image={img} />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Lizard
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardMedia component='img' alt='green iguana' height='140' image={img} />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Lizard
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardMedia component='img' alt='green iguana' height='140' image={img} />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Lizard
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                      ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>

      <Container component='footer'>
        <Typography variant='body2' color={"GrayText"} textAlign='center' marginTop={5}>
          Copyright &copy;&nbsp;
          <Link>Meu site</Link>&nbsp;
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Stack>
  );
}
