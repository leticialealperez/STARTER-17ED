import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectCart } from "../../store/modules/cart/cartSlice";

export function Navbar() {
  const navigate = useNavigate();

  const cart = useAppSelector(selectCart);

  // useMemo - memoiza(mantem em cache) o resultado/retorno de uma função
  const qtdTotalProducts = useMemo(() => {
    const total = cart.orders.reduce((acc, order) => acc + order.quantity, 0);

    return total;
  }, [cart.orders]);

  return (
    <AppBar position='static'>
      <Toolbar component='nav'>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={() => navigate("/")}
        >
          <HomeIcon />
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
          <Badge
            badgeContent={`${qtdTotalProducts}`}
            color='error'
            sx={{ "& .MuiBadge-badge": { right: -6 } }}
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
