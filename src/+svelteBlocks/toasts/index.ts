import { default as Toasts } from "./Toasts.svelte";
import { writable, type Writable } from "svelte/store";
export default Toasts

/** Toast store */
export const toastsStore:Writable<ToastData[]> = writable([])

/** Create/Add new toast */
export function createToast(data:CreateToastData){
    // Use title is it was provided, if not use type as title
    const title = data.title ? data.title : data.type
    const toastID = Date.now()
    // update current toasts
    toastsStore.update(oldData=>{
        oldData = [{...data,id:toastID,title},...oldData]
        return oldData
    })
    // auto remove after 4 seconds, if user did not provided removeIn param
    const removeIn = (data.removeIn && typeof data.removeIn === "number") ? data.removeIn : (data.removeIn && data.removeIn === "never") ? data.removeIn : 4000
    // Only run if toast was not set to never remove
    if(removeIn!=="never"){
        setTimeout(async()=>{
            // Delete toast after 500 milliseconds
            await new Promise(r=>setTimeout(r,500))
            toastsStore.update(data=>data.filter(d=>d.id!==toastID))
        },removeIn)
    }
}

/** Toast object data */
export type ToastData = {
    /** The type of toast */
    type:"error" | "successful" | "neutral"
    /** Message to display */
    msg:string
    /** Toast id, it's generated automatically by createToast function */
    id:number
    /** When to remove the toast */
    removeIn?:number|"never"
    /** Title for toast */
    title?:string
}
export type T = ToastData

/** Data needed to create new toast */
export type CreateToastData = Omit<ToastData,"id"|"closedClass">