---
layout: Components
title: Burger
description: Iconic button that toggles the visibility of a navigation menu or sidebar, often used in responsive designs.
---
<script lang="ts">
    import Burger,{ type T } from "sb/burger";
    let isOpen:T['value'] = false
</script>

# Burger
Iconic button that toggles the visibility of a navigation menu or sidebar, often used in responsive designs.

<div class="flex">
    <Burger bind:value={isOpen} options={{ alwayShow:true }}/>
</div>

```svelte
<script lang="ts">
    import Burger,{ type T } from "sb/burger";
    let isOpen:T['value'] = false
</script>

<div class="flex">
    <Burger bind:value={isOpen} options={{ alwayShow:true }}/>
</div>
```

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Alway show burger */
        alwayShow?:boolean
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
    }
    /** bindable value : indicate if bugger menu is open or not*/
    value?:boolean
} & Events<"button">
```