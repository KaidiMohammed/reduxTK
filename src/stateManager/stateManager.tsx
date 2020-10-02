import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";

import balanceSlice from "./balanceSlice";
import React from "react";

const store = configureStore({
  reducer: {
    balance: balanceSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

const ReduxProvider: React.FC = ({ children }) => {
  const { dispatch } = store;

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
