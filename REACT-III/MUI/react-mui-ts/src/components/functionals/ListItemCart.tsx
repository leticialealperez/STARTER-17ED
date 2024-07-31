import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Divider,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Order } from "../../configs/interfaces/order";
import { currencyFormatter } from "../../configs/utils/currency-formatter";
import { useAppDispatch } from "../../store/hooks";
import { removeItem } from "../../store/modules/cart/cartSlice";

interface ListItemCartProps {
  order: Order;
  showDivider?: boolean;
}

export function ListItemCart({ order, showDivider }: ListItemCartProps) {
  const [showAllDescription, setShowAllDescription] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <ListItem
        alignItems='flex-start'
        secondaryAction={
          <IconButton
            edge='end'
            aria-label='delete'
            color='error'
            onClick={() => dispatch(removeItem(order))}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt={order.product.name} src={order.product.imageUrl} />
        </ListItemAvatar>

        <ListItemText
          primary={order.product.name}
          secondary={
            <Fragment>
              <Typography variant='caption' color='GrayText'>
                {showAllDescription
                  ? order.product.description
                  : order.product.description.slice(0, 100).concat("... ")}{" "}
                <Link href='#' onClick={() => setShowAllDescription(!showAllDescription)}>
                  {showAllDescription ? "Ver menos" : "Ver mais"}
                </Link>
              </Typography>

              <Typography variant='subtitle2'>
                Preço: {currencyFormatter.format(order.product.price)}
              </Typography>

              <Typography variant='subtitle2'>Qtd: {order.quantity}</Typography>
            </Fragment>
          }
        />
      </ListItem>
      {showDivider && <Divider variant='inset' />}
    </Fragment>
  );
}
