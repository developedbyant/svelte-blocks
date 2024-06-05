import type { Children,Attrs } from "../types";
import { default as Component } from "./component.svelte";
export default Component
export type T = {
    /** Customize or pass data to pass to the component  */
    options?:{
        /** Change color */
        color?: string
    }
    /** Component's child */
    children: Children
} & Attrs<"label">;