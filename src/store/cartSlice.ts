import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart:(state, action: PayloadAction<CartItem>) => {
      const item = action.payload
      const existingItem = state.items.find((i) => i.id === item.id)
      if(existingItem){
        existingItem.quantity += item.quantity
      }else{
        state.items.push(item)
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    increaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload)
      if(item) item.quantity += 1
    },
    decreaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i.id === action.payload)
      if(item && item.quantity > 1) item.quantity -= 1
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer