import * as createPalette from "@mui/material/styles/createPalette";

declare module '@mui/material/styles' {
    interface Palette {
        standardBox: Palette['primary'];
        contentBox: Palette['primary'];
        skillBox: Palette['primary'];
        interactiveColor: Palette['primary'];
        defaultIcon: Palette['primary'];
        mainBoldAccent: Palette['primary'];
        activeJob: Palette['primary'];
        pendingJob: Palette['primary'];
        rejectedJob: Palette['primary'];
        sentJob: Palette["primary"];
    }
    interface PaletteOptions {
        standardBox?: PaletteOptions['primary'];
        contentBox?: PaletteOptions['primary'];
        skillBox?: PaletteOptions['primary'];
        interactiveColor?: PaletteOptions['primary'];
        defaultIcon?: PaletteOptions['primary'];
        mainBoldAccent?: PaletteOptions['primary'];
        activeJob?: PaletteOptions['primary'];
        pendingJob?: PaletteOptions['primary'];
        rejectedJob?: PaletteOptions['primary'];
        sentJob?: PaletteOptions['primary'];
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
    interface PaginationPropsColorOverrides {
        mainBoldAccent;
    }
    interface TableCellPropsColorOverrides {
        contentBox;
    }
    interface DefaultPaletteOptions extends PaletteOptions {
        primary?: SimplePaletteColorOptions;
    }
    interface RadioPropsColorOverrides {
        sentJob;
        rejectedJob;
        activeJob;
        pendingJob;
    }
    interface ButtonPropsColorOverrides {
        interactiveColor;
    }
}
