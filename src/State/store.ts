import { configureStore } from "@reduxjs/toolkit";
import DataManager from "./Reducers/DataManager";
import PopUpManager from "./Reducers/PopUpManager";
import ValidationForm from "./Reducers/ValidationForm";
export const store = configureStore({
  reducer: {
    data: DataManager,
    popup: PopUpManager,
    validForm:ValidationForm
  },
});


export type RootState = ReturnType<typeof store.getState>
