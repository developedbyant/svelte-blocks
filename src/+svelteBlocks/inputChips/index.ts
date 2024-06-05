import { default as Component } from "./component.svelte";
export default Component
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Make component rounded (radius) */
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
    value:string[]
    /** Function to run when value change */
    onChange?:(data:{ newItemsList:string[] })=>any
    /** Function to run when remove item */
    onRemove?:(data:{ itemRemoved:string,newItemsList:string[] })=>any
}