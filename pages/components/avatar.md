---
layout: Components
title: Avatar
description: Visual representation of a user or entity, often displayed as an image, icon, or initials.
---
<script lang="ts">
    import Avatar,{ type T } from "sb/avatar";
    const initData:T['initData'] = {
        src:"https://avatars.githubusercontent.com/u/1162160?v=4",
        alt:"Rich Harris"
    }
</script>

# Avatar
Visual representation of a user or entity, often displayed as an image, icon, or initials.

<div class="flex">
    <Avatar {initData}/>
</div>

```svelte
<script lang="ts">
    import Avatar,{ type T } from "sb/avatar";
    const initData:T['initData'] = {
        src:"https://avatars.githubusercontent.com/u/1162160?v=4",
        alt:"Rich Harris"
    }
</script>

# Avatar
Visual representation of a user or entity, often displayed as an image, icon, or initials.

<div class="flex">
    <Avatar {initData}/>
</div>
```

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** When set to yes, we will use margin:auto */
        center?: boolean
        /** The max size the div can use */
        maxSize?: string
        /** If href was passed the button will turn into a anchor tag */
        href?: string
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
        /** Change border color */
        border?: string
    }
    /** Component data: a string or an object with image and image alt */
    initData: string | { src: string, alt: string }
} & Events<"div"> & Attrs<"div">
```