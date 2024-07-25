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
import { Product } from "../../configs/interfaces/product";
import { currencyFormatter } from "../../configs/utils/currency-formatter";

interface ListItemCartProps {
  product: Product;
  showDivider?: boolean;
}

export function ListItemCart({ product, showDivider }: ListItemCartProps) {
  const [showAllDescription, setShowAllDescription] = useState(false);

  return (
    <Fragment>
      <ListItem
        alignItems='flex-start'
        secondaryAction={
          <IconButton edge='end' aria-label='delete' color='error'>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt={product.name} src={product.imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          secondary={
            <Fragment>
              <Typography variant='caption' color='GrayText'>
                {showAllDescription
                  ? product.description
                  : product.description.slice(0, 100).concat("... ")}{" "}
                <Link href='#' onClick={() => setShowAllDescription(!showAllDescription)}>
                  {showAllDescription ? "Ver menos" : "Ver mais"}
                </Link>
              </Typography>
              <Typography variant='subtitle2'>
                Preço: {currencyFormatter.format(product.price)}
              </Typography>
              <Typography variant='subtitle2'>Qtd: 1</Typography>
            </Fragment>
          }
        />
      </ListItem>
      {showDivider && <Divider variant='inset' />}
    </Fragment>
  );
}
