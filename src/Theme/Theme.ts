import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        standardBox: {
            main: "#FAFDFF",
            contrastText: '#3E4254'
        },
        contentBox: {
            main: "#F3F1F6",
            contrastText: "#3E4254"
        }
        ,
        skillBox: {
            main: "#D8F5F6",
            contrastText: "#639AED"
        },
        interactiveColor: {
            main: "#6D92F0",
            contrastText: "#FFFFF"
        },
        defaultIcon: {
            main: "#666666"
        },
        mainBoldAccent: {
            main: "#3E4254"
        },
        background: {
            default: "#D1D4DE"
        },
    },
    typography: {
        fontFamily: [
            'Forum',
            'Averia Serif Libre'
        ].join(','),
    },

})

export default theme;
