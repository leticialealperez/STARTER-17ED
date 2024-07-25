import { Order } from "./order";

export interface Cart {
  orders: Order[];
  amount: number;
}
