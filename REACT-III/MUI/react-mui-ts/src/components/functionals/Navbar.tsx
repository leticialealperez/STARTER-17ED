import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position='static'>
      <Toolbar component='nav'>
        <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
          <HomeIcon onClick={() => navigate("/")} />
        </IconButton>

        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Ecommerce
        </Typography>

        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={() => navigate("/cart")}
        >
          <Badge badgeContent={"0"} color='error' sx={{ "& .MuiBadge-badge": { right: -6 } }}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
