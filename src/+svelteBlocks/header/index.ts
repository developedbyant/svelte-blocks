import { default as Header } from "./component.svelte";
import type { Events, Attrs,Children } from "../types";

export default Header

/** Header component type [ON]*/
export type T = {
    /** Customize or pass data to pass to the component  */
    options?:{
        /** Try to center it using margin auto */
        center?: boolean
        /** Change color */
        color?: string
    }
    /** Header tag */
    data: "h1" | "h2" | "h3" | "h4" | "h5"
    /** Component's child */
    children: Children;
} & Events<"h1"> & Attrs<"h1">;