---
layout: Components
title: InputChips
description: Input field that allows users to enter and manage multiple tags or keywords as chips.
---
<script lang="ts">
    import InputChips, { type T } from "sb/inputChips";
    let value:T['value'] = [ "svelte","react" ];
</script>

# Input chips
Input field that allows users to enter and manage multiple tags or keywords as chips.

<div class="flex">
    <InputChips bind:value/>
</div>

```svelte
<script lang="ts">
    import InputChips, { type T } from "sb/inputChips";
    let value:T['value'] = [ "svelte","react" ];
</script>

<InputChips bind:value/>
```

## Type
```ts
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
```