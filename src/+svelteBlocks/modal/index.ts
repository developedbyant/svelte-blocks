import type { Children } from "../types";
import { default as Component } from "./component.svelte";
export default Component
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Max width for model's content */
        maxWidth?:`${string}px`
        /** Max height for model's content */
        maxHeight?:`${string}px`
        /** Make model's content take full height */
        full?:boolean
        /** Change background */
        bg?: string
        /** Change or add border color */
        border?: string
    }
    children:Children
    /** indicate if model if open or not, it can be bind */
    open?:boolean
}