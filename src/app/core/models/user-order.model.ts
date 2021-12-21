import { OrderModel } from "./order.model";

export interface UserOrderModel {
    id: string,
    name: string,
    email: string,
    orders: Array<OrderModel>
}