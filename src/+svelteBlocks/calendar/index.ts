import { default as Calendar } from "./component.svelte";
export default Calendar
export type T = {
    /** Customize or pass data to pass to the component  */
    options?:{
        /** Make container take full with */
        fullWidth?: boolean;
        /** Change container background */
        bg?: string
        /** Change container text color */
        color?: string
        /** Change header text color */
        headerColor?: string
        /** Change container border color */
        border?: string
        /** Change selected day background */
        onSelectedBg?: string
        /** Change selected day color */
        onSelectedColor?: string
    }
    /** Current bindable value */
    value?:{
        day:number
        year:number
        month:number
    }
}