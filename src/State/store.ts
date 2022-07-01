import { configureStore } from "@reduxjs/toolkit";
import DataManager from "./Reducers/DataManager";
import PopUpManager from "./Reducers/PopUpManager";

export const store = configureStore({
  reducer: {
    data: DataManager,
    popup: PopUpManager,
  },
});


export type RootState = ReturnType<typeof store.getState>
