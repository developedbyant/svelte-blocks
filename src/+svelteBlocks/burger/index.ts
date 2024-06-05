import type { Events } from "../types";
import { default as Component } from "./component.svelte";
export default Component
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Alway show burger */
        alwayShow?:boolean
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
    }
    /** bindable value : indicate if bugger menu is open or not*/
    value?:boolean
} & Events<"button">