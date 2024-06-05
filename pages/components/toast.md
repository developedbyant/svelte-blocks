---
layout: Components
title: Toast
description: A temporary notification message that appears briefly to provide feedback or information.
---
<script lang="ts">
    import Toast, { createToast ,type T } from "sb/toasts";
    import Button from "sb/button";
    const onclick = ()=>{
        createToast({ type:"successful",msg:"Welcome back tony" })
    }
</script>

# Toast
A temporary notification message that appears briefly to provide feedback or information.

<Toast options={{ position:"br" }}/>
<Button {onclick}>Add toast</Button>

```svelte 
<script lang="ts">
    import Toast, { createToast ,type T } from "sb/toasts";
    // create/add new toast
    const onclick = ()=>{
        createToast({ type:"successful",msg:"Welcome back tony" })
    }
</script>

<Toast options={{ position:"br" }}/>
<button {onclick}>Add toast</button>
```

## Component type
```ts
type T = {
    type:"error" | "successful" | "neutral"
    msg:string
    id:number
    /** When to remove the toast */
    removeIn?:number|"never"
    title?:string
    /** Use to add close class before removing toast */
    closedClass?:boolean
}
```