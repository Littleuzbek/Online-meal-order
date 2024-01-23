import { createSlice } from "@reduxjs/toolkit";

const actionSlice = createSlice({
  name: "actions",
  initialState: {
    itemStore: [],
    totalPrice: 0,
    takenOrder: [],
    totalOrderPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.itemStore.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        state.totalPrice += Number(newItem.price);
      } else {
        state.itemStore.push({
          id: newItem.id,
          price: Number(newItem.price),
          quantity: 1,
          name: newItem.name,
        });
        state.totalPrice += Number(newItem.price);
      }
    },
    removeItem(state, action) {
      const id = action.payload;

      const existingItem = state.itemStore.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemStore = state.itemStore.filter((item) => item.id !== id);
        state.totalPrice -= existingItem.price;
      } else {
        existingItem.quantity--;
        state.totalPrice -= existingItem.price;
      }
    },
    addToTakenOrder(state) {
      const newOrder = state.itemStore;
      
      state.totalOrderPrice += state.totalPrice;
      state.takenOrder = [...state.takenOrder, ...newOrder];

      state.itemStore = [];
      state.totalPrice = 0;
    },
  },
});

export const actions = actionSlice.actions;

export default actionSlice;
