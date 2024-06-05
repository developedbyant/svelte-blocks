import { default as Avatar } from "./component.svelte";
import type { Events, Attrs } from "../types";

export default Avatar
/** Avatar component type [ON]*/
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** When set to yes, we will use margin:auto */
        center?: boolean
        /** The max size the div can use */
        maxSize?: string
        /** If href was passed the button will turn into a anchor tag */
        href?: string
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
        /** Change border color */
        border?: string
    }
    /** Component data: a string or an object with image and image alt */
    initData: string | { src: string, alt: string }
} & Events<"div"> & Attrs<"div">