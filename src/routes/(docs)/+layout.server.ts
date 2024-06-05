// +layout.server.ts
import type { LayoutServerLoad } from './$types.js';
import type { DocTheme } from "kitdocs"
export const load:LayoutServerLoad = async(event)=>{
    const theme = (event.cookies.get("theme") || "light") as DocTheme
    return { theme }
} 