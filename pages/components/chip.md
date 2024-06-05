---
layout: Components
title: Chip
description: Compact, stylized label/tag, often used to filter, categorize, or display information.
---
<script lang="ts">
    import Chip, { type T } from "sb/chip";
    const onclick = ()=> alert("Chip was clicked");
</script>

# Chip
Compact, stylized label/tag, often used to filter, categorize, or display information.

<div class="flex">
    <Chip>Chip</Chip>
</div>

```svelte 
<script lang="ts">
    import Chip, { type T } from "sb/chip";
    const onclick = ()=> alert("Chip was clicked");
</script>

<Chip>Chip</Chip>
```

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Make button rounded (radius) */
        rounded?: boolean;
        /** If href was passed the button will turn into a anchor tag */
        href?:string
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
        /** Change or add border color */
        border?: string
    }
    /** Component children */
    children: Children;
} & Events<"button"> & Attrs<"button">;
```