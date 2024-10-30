import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductStoreType } from 'types';

interface CartTypes {
  cartItems: ProductStoreType[]
}

const initialState = { 
  cartItems: [] 
} as CartTypes;

const indexSameProduct = (state: CartTypes, action: ProductStoreType) => {
  const sameProduct = (product: ProductStoreType) => (
    product.productId === action.productId && 
    product.hireDate === action.hireDate &&
    product.startTime === action.startTime &&
    product.endTime === action.endTime
  );

  return state.cartItems.findIndex(sameProduct);
};

type AddProductType = {
  product: ProductStoreType,
  count: number,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<AddProductType>) => {
      const index = indexSameProduct(state, action.payload.product);
      if (index !== -1) {
        state.cartItems[index].count += action.payload.count;
      } else {
        state.cartItems.push({ ...action.payload.product, count: action.payload.count });
      }
    },
    removeProduct(state, action: PayloadAction<ProductStoreType>) {
      const index = indexSameProduct(state, action.payload);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    setCount(state, action: PayloadAction<AddProductType>) {
      const indexItem = indexSameProduct(state, action.payload.product);
      if (indexItem !== -1) {
        state.cartItems[indexItem].count = action.payload.count;
      }
    },
  },
});


export const { addProduct, removeProduct, setCount } = cartSlice.actions
export default cartSlice.reducer