import type { Events,Attrs } from "../types";
import { default as Component } from "./component.svelte";
export default Component
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Make input rounded (radius) */
        rounded?:boolean
        /** Make input take full with */
        fullWidth?:boolean
        /** Show error bg and color */
        error?:boolean
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
    value?:string
} & Events<"input"> & Attrs<"input">;