import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OneJob {
    id: number;
    companySite: string;
    customDescription: string;
    skills: string[] | [];
    status: string;
    link: string;
}

interface formBoolean {
    skillArray: boolean
}

interface initialState {
    localdata: OneJob[] | [];
    filtreddata: OneJob[] | [];
    filterInput: string;
    radioValue: string;
    editID: number;
    editRow: OneJob;
    postPerPage: number,
    currentPage: number,
    currentPost: OneJob[],
    pageNumber: number,
    validationForm: formBoolean
}

const initialState: initialState = {
    localdata: JSON.parse(localStorage.getItem("data")),
    filtreddata: [],
    filterInput: "",
    radioValue: "",
    editID: NaN,
    //edition 
    editRow: {
        id: NaN,
        status: "",
        companySite: "",
        skills: [],
        link: "",
        customDescription: "",
    },
    //pagination logic
    postPerPage: 3,
    currentPage: 1,
    currentPost: [],
    pageNumber: NaN,
    //validation
    validationForm: {
        skillArray: false,
    }
};

export const dataManager = createSlice({
    name: "dataManager",
    initialState,
    reducers: {
        validationLocalData: (state) => {
            if (state.localdata.length === 0) {
                localStorage.setItem("data", JSON.stringify([]));
                return { ...state, localdata: [] };
            }
        },
        clonnedSearchData: (state) => {
            return { ...state, filtreddata: state.localdata };
        },
        inputFilterManager: (state, action: PayloadAction<string>) => {
            return { ...state, filterInput: action.payload.toLowerCase() };
        },
        PaginationLogic: (state) => {
            const indexOfLastPost = state.currentPage * state.postPerPage;
            const indexOfFirstPost = indexOfLastPost - state.postPerPage;
            const currentPost = state.filtreddata.slice(
                indexOfFirstPost,
                indexOfLastPost
            );
            const pageNumber = Math.ceil(
                state.filtreddata.length / state.postPerPage
            );

            return { ...state, currentPost: currentPost, pageNumber: pageNumber };
        },
        PaginationSwitch: (state, action: PayloadAction<number>) => {
            return { ...state, currentPage: action.payload };
        },
        PaginationNumber: (state, action: PayloadAction<number>) => {
            return { ...state, postPerPage: action.payload }
        },
        PaginationNumberPerPage: (state, action: PayloadAction<number>) => {
            return { ...state, postPerPage: action.payload }
        },
        searchData: (state) => {
            const filtred = state.localdata.filter((object: any) =>
                state.radioValue === "skills"
                    ? object.skills.some((value: string) => {
                        return value.toLowerCase().includes(state.filterInput);
                    })
                    : object[state.radioValue]
                        .toLowerCase()
                        .includes(state.filterInput)
            );
            return { ...state, filtreddata: filtred, currentPage: 1 };
        },
        radioSetup: (state, action: PayloadAction<string>) => {
            return { ...state, radioValue: action.payload };
        },
        editSetupID: (state, action: PayloadAction<number>) => {
            return { ...state, editID: action.payload };
        },
        editChanges: (state, action: PayloadAction<OneJob>) => {
            return { ...state, editRow: action.payload };
        },
        editLogic: (state,action:PayloadAction<OneJob>) => {
            const updateStorage = state.localdata.map((object: OneJob) => {
                return object.id === state.editID ? (object = action.payload) : object;
            });
            return {
                ...state,
                localdata: updateStorage,
            };
        },
        updateLocalStorage: (state) => {
            return localStorage.setItem("data", JSON.stringify(state.localdata));
        },
        deleteLogic: (state, action: PayloadAction<number>) => {
            const lc = state.localdata.filter(
                (object: OneJob) => object.id !== action.payload
            );
            return { ...state, localdata: lc };
        },
        addLogic: (state, action: PayloadAction<OneJob>) => {
            // @ts-ignore-start
            state.localdata.unshift(action.payload);
            // @ts-ignore-end
        },
    },
});
export const {
    validationLocalData,
    clonnedSearchData,
    PaginationLogic,
    PaginationSwitch,
    PaginationNumber,
    PaginationNumberPerPage,
    searchData,
    inputFilterManager,
    radioSetup,
    editSetupID,
    editLogic,
    editChanges,
    updateLocalStorage,
    deleteLogic,
    addLogic,
} = dataManager.actions;
export default dataManager.reducer;
