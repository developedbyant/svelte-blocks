import type { Attrs, Events } from "../types";
import { default as Component } from "./component.svelte";
export default Component
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Show error color */
        error?:boolean
        /** Make element full width */
        fullWidth?:boolean
        /** Make element rounded */
        rounded?:boolean
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
        /** Change focus color */
        focusColor?: string
        /** Change border color */
        border?: string
    }
    /** Current bindable value */
    value:string
} & Events<"textarea"> & Attrs<"textarea">