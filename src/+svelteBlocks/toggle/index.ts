import type { Attrs, Events } from "../types";
import { default as Component } from "./component.svelte";
export default Component
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Make element rounded */
        rounded?:boolean
        /** toggle size */
        size?:`${string}px` | `var(--${string})`
    }
    /** Current bindable value */
    value?:boolean
} & Events<"button"> & Omit<Attrs<"button">,"value">