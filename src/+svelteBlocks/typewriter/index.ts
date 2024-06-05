import type { Children } from "../types";
import { default as Component } from "./component.svelte";
export default Component
export type T = {
    /** The initial text for component */
    children:Children
    /** The code that the highlighted text will be */
    color:string
    /** The words to type */
    words:string[]
}