---
layout: Components
title: Modal
description: Dialog box that appears on top of the main content, used for alerts, confirmations, or additional information.
---
<script lang="ts">
    import Modal from "sb/modal";
    let open = false;
</script>

# Label
Dialog box that appears on top of the main content, used for alerts, confirmations, or additional information.

<Modal bind:open>
    <div class="flex">
        <button onclick={()=>open=!open}>
            {open?"Close":"Open"} modal
        </button>
    </div>
</Modal>
<div class="flex">
    <button onclick={()=>open=!open}>
        {open?"Close":"Open"} modal
    </button>
</div>

```svelte
<script lang="ts">
    import Modal from "sb/modal";
    let open = false;
</script>

<Modal bind:open>
    <div class="flex">
        <button onclick={()=>open=!open}>
            {open?"Close":"Open"} modal
        </button>
    </div>
</Modal>
<div class="flex">
    <button onclick={()=>open=!open}>
        {open?"Close":"Open"} modal
    </button>
</div>
```

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Max width for model's content */
        maxWidth?:`${string}px`
        /** Max height for model's content */
        maxHeight?:`${string}px`
        /** Make model's content take full height */
        full?:boolean
        /** Change background */
        bg?: string
        /** Change or add border color */
        border?: string
    }
    children:Children
    /** indicate if model if open or not, it can be bind */
    open?:boolean
}
```