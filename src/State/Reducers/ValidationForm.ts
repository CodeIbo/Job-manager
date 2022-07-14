import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface oneJobValid {
    tittle: boolean;
    skillArray: boolean;
    link: boolean
}

interface validObject {
    type: string,
    content: any
}

interface initialState {
    add: oneJobValid
    edit: oneJobValid
}

const initialState: initialState = {
    add: {
        tittle: false,
        skillArray: false,
        link: false,
    },
    edit: {
        tittle: true,
        skillArray: true,
        link: true,
    }
}

export const validationForm = createSlice({
    name: "validationForm",
    initialState,
    reducers: {
        validTittle: (state, action: PayloadAction<validObject>) => {
            if (action.payload.type === "add") {
                if (action.payload.content.length === 0) {
                    return {
                        ...state, add: {
                            ...state.add, tittle: false
                        }
                    }
                }
                else {
                    return {
                        ...state, add: {
                            ...state.add, tittle: true
                        }
                    }
                }
            } else {
                if (action.payload.content.length === 0) {
                    return {
                        ...state, edit: {
                            ...state.edit, tittle: false
                        }
                    }
                }
                else {
                    return {
                        ...state, edit: {
                            ...state.edit, tittle: true
                        }
                    }
                }
            }
        },
        validArray: (state, action: PayloadAction<validObject>) => {
            let valid = action.payload.content.some((item: string) => item.trim().length === 0)
            if (action.payload.type === "add") {
                if (valid || action.payload.content.length === 0) {
                    return {
                        ...state, add: {
                            ...state.add, skillArray: false
                        }
                    }
                }
                else {
                    return {
                        ...state, add: {
                            ...state.add, skillArray: true
                        }
                    }
                }
            } else {
                if (valid) {
                    return {
                        ...state, edit: {
                            ...state.edit, skillArray: false
                        }
                    }
                }
                else {
                    return {
                        ...state, edit: {
                            ...state.edit, skillArray: true
                        }
                    }
                }
            }
        },
        validLink: (state, action: PayloadAction<validObject>) => {
            if (action.payload.type === "add") {
                if (action.payload.content.length === 0) {
                    return {
                        ...state, add: {
                            ...state.add, link: false
                        }
                    }
                }
                else {
                    return {
                        ...state, add: {
                            ...state.add, link: true
                        }
                    }
                }
            } else {
                if (action.payload.content.length === 0) {
                    return {
                        ...state, edit: {
                            ...state.edit, link: false
                        }
                    }
                }
                else {
                    return {
                        ...state, edit: {
                            ...state.edit, link: true
                        }
                    }
                }
            }
        },
        reset: () => {
            return initialState
        }

    }
});
export const {
    validTittle,
    validArray,
    validLink,
    reset
} = validationForm.actions;
export default validationForm.reducer;