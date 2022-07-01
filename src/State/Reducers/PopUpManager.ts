import { createSlice } from "@reduxjs/toolkit";

interface popupInit {
    popup: string;
}

const initialState: popupInit = {
    popup: "",
};

export const popupManager = createSlice({
    name: "popupManager",
    initialState,
    reducers: {
        popupSetup: (state, action) => {
            return { ...state, popup: action.payload };
        },
    },
});

export const { popupSetup } = popupManager.actions;

export default popupManager.reducer;
