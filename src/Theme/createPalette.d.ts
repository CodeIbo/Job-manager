import * as createPalette from "@mui/material/styles/createPalette";

declare module '@mui/material/styles' {
    interface Palette {
        standardBox: Palette['primary'];
        contentBox: PaletteOptions['primary'];
        skillBox: PaletteOptions['primary'];
        interactiveColor: PaletteOptions['primary'];
        defaultIcon: PaletteOptions['primary'];
        mainBoldAccent: PaletteOptions['primary'];
    }
    interface PaletteOptions {
        standardBox?: PaletteOptions['primary'];
        contentBox?: PaletteOptions['primary'];
        skillBox?: PaletteOptions['primary'];
        interactiveColor?: PaletteOptions['primary'];
        defaultIcon?: PaletteOptions['primary'];
        mainBoldAccent: PaletteOptions['primary'];
    }
    interface PaletteColor {
        light?: string;
        main: string;
        dark?: string;
        contrastText?: string;
    }
}
declare module "@mui/material" {
    interface AppBarPropsColorOverrides {
        standardBox;
    }
    interface SvgIconPropsColorOverrides {
        defaultIcon;
        interactiveColor;
        mainBoldAccent;
    }


}
