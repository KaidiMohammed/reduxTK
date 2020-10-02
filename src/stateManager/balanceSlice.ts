import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    balance: 0,
  },
  reducers: {
    setBalance: (state: any, action: any): any => ({
      ...state,
      balance: action.payload.balance,
    }),
  },
});

export const { setBalance } = balanceSlice.actions;
export default balanceSlice;
