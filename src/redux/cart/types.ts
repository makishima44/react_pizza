export type CartItemType = {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
  price: number;
  size: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
