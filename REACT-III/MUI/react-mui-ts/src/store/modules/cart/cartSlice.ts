import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store } from "../..";
import { Cart } from "../../../configs/interfaces/cart";
import { Order } from "../../../configs/interfaces/order";

// 1 - o formato/tipo desse slice ✅
// 2 - qual o valor inicial ✅
const initialValue: Cart = {
  orders: [],
  amount: 0,
};

// 3 - slice => ações + gerenciamento/lógica + nome
const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    // todas as formas de gerenciamento/modificação do estado do cart
    addItem: (estadoAtual, action: PayloadAction<Order>) => {
      // é pra encontrar se o produto já foi adicionado no carrinho
      // -1 => não encontra nenhum index que corresponde
      // 0, 1, 2... => é uma posição de array válida
      const indexOrderFound = estadoAtual.orders.findIndex(
        (order) => order.product.id === action.payload.product.id,
      );

      // se o produto já foi adicionado no carrinho, então incrementa sua quantidade
      if (indexOrderFound !== -1) {
        estadoAtual.orders[indexOrderFound].quantity = estadoAtual.orders[
          indexOrderFound
        ].quantity += action.payload.quantity;

        // caso contrario, adiciona todo o produto com quantidade (pedido) no carrinho
      } else {
        estadoAtual.orders.unshift(action.payload);
      }

      const newAmount = estadoAtual.orders.reduce((acc, order) => {
        return acc + order.product.price * order.quantity;
      }, 0);

      estadoAtual.amount = newAmount;
    },

    removeItem: (estadoAtual, action: PayloadAction<Order>) => {
      const newListOrder = estadoAtual.orders.filter(
        (order) => order.product.id !== action.payload.product.id,
      );
      estadoAtual.orders = newListOrder;

      const newAmount = estadoAtual.orders.reduce((acc, order) => {
        return acc + order.product.price * order.quantity;
      }, 0);

      estadoAtual.amount = newAmount;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectCart = (store: Store) => store.cart;

export const cartReducer = cartSlice.reducer;
