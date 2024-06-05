import { default as Component } from "./component.svelte";
export default Component
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Make element full width */
        full?:boolean
        /** Make element rounded */
        rounded?:boolean
        /** Change background */
        bg?: string
        /** Change active background */
        activeBg?: string
        /** Change color */
        color?: string
    }
    /** Function to run when value change */
    onChange?:(current:{id:string,title:string})=>any
    /** Current bindable value */
    value?:{id:string,title:string}
    /** Initial data for component */
    initData:{id:string,title:string}[]
}