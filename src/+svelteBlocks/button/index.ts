import { default as Button } from "./component.svelte";
import type { Events, Attrs,Children } from "../types";

export default Button

/** Button component type [ON]*/
export type T = {
    /** Component options */
    options?:{
        /** Icon for button */
        icon?: any;
        /** If href was passed the button will turn into a anchor tag */
        href?:string
        /** Set loading spinner, also it disable button */
        loading?: boolean;
        /** Make button rounded (radius) */
        rounded?: boolean;
        /** Make button take full with */
        fullWidth?: boolean;
        /** Run icon mode */
        iconMode?: boolean;
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
        /** Change or add border color */
        border?: string
    }
    /** Component children */
    children: Children;
} & Events<"button"> & Attrs<"button">;