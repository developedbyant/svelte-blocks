import { default as Accordion } from "./component.svelte";
export default Accordion
export type T = {
    /** Customize or pass data to pass to the component  */
    options?:{
        /** Change container background */
        bg?: string
        /** Change container text color */
        color?: string
        /** Change header text color */
        headerColor?: string
        /** Change container border color */
        border?: string
    }
    /** value/data for component */
    value:{
        /** Item id, unique */
        id:string
        /** Item title */
        title:string
        /** Item text */
        text:string
    }[]
}