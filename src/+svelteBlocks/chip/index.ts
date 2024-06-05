import { default as Component } from "./component.svelte";
import type { Events,Children,Attrs } from "../types";
export default Component
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Make button rounded (radius) */
        rounded?: boolean;
        /** If href was passed the button will turn into a anchor tag */
        href?:string
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