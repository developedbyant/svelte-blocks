---
layout: Components
title: Input
description: Basic form input field for user data entry, with optional label and validation.
---
<script lang="ts">
    import Input, { type T } from "sb/input";
</script>

# Input
Basic form input field for user data entry, with optional label and validation.

<div class="flex">
    <Input placeholder="Enter email..." type="text"/>
</div>

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Make input rounded (radius) */
        rounded?:boolean
        /** Make input take full with */
        fullWidth?:boolean
        /** Show error bg and color */
        error?:boolean
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
        /** Change focus color */
        focusColor?: string
        /** Change border color */
        border?: string
    }
    /** bind input value */
    value?:string
} & Events<"input"> & Attrs<"input">;
```