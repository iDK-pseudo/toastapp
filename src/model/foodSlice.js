import { createSlice } from '@reduxjs/toolkit'
import initialData from "./data.js"

const initialItemCount = {};

initialData.forEach((item)=>{
  initialItemCount[item.id] = 0
});

export const foodSlice = createSlice({
  name: 'foodSlice',
  initialState: {
    allItems: initialData,
    currentOrders: [],
    previousOrders: [],
    itemVsCount:initialItemCount,
    prevItemVsCount: {}
  },
  reducers: {
    addItem: (state, action) => {
      state.currentOrders.push(action.payload);
    },
    removeItem: (state, action) => {
      const idx = state.currentOrders.indexOf(action.payload);
      state.currentOrders.splice(idx, 1);
    },
    incrementItemCount: (state, action) => {
      state.itemVsCount[action.payload]=state.itemVsCount[action.payload]+1;
    },
    decrementItemCount: (state, action) => {
      if(state.itemVsCount[action.payload]>0){
        state.itemVsCount[action.payload]=state.itemVsCount[action.payload]-1;
      }
    },
    placeOrder: (state) => {
      if(state.currentOrders.length > 0){
        state.previousOrders = [...state.previousOrders, ...state.currentOrders];
        state.currentOrders = [];
        
        for(var key of Object.keys(state.itemVsCount)){
          state.prevItemVsCount[key] = state.itemVsCount[key];
          state.itemVsCount[key] = 0;
        }
      }
    }
  }
})

export const { 
  addItem, 
  removeItem,
  incrementItemCount,
  decrementItemCount,
  placeOrder
} = foodSlice.actions

export default foodSlice.reducer