---
layout: Components
title: Toggle
description: Switch-like component that allows users to toggle a setting or option on or off.
---
<script lang="ts">
    import Toggle,{ type T} from "sb/toggle";
    let isOpen:T['value'] = false
</script>

# Toggle
Switch-like component that allows users to toggle a setting or option on or off.

<div class="flex">
    <Toggle bind:value={isOpen}/>
</div>

```svelte
<script lang="ts">
    import Toggle,{ type T} from "sb/toggle";
    let isOpen:T['value'] = false
</script>

<div class="flex">
    <Toggle bind:value={isOpen}/>
</div>
```

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Make element rounded */
        rounded?:boolean
        /** toggle size */
        size?:`${string}px` | `var(--${string})`
    }
    /** Current bindable value */
    value?:boolean
} & Events<"button"> & Omit<Attrs<"button">,"value">
```