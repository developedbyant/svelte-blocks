---
layout: Components
title: Header
description: A top-level navigation component that displays a title to a page.
---
<script lang="ts">
    import Header, { type T } from "sb/header";
</script>

# Header
A top-level navigation component that displays a title to a page.
<div class="flex col">
    <Header data="h1">H1 header</Header>
    <Header data="h2">H2 header</Header>
    <Header data="h3">H3 header</Header>
    <Header data="h4">H4 header</Header>
    <Header data="h5">H5 header</Header>
</div>

<space></space>

## Usage
To use component, import it and it's type from `sb/header` and add component to any svelte file.
```svelte
<script lang="ts">
    import Header, { type T } from "sb/header";
</script>

<Header data="h1">H1 header</Header>
<Header data="h2">H2 header</Header>
<Header data="h3">H3 header</Header>
<Header data="h4">H4 header</Header>
<Header data="h5">H5 header</Header>
```

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?:{
        /** Try to center it using margin auto */
        center?: boolean
        /** Change color */
        color?: string
    }
    /** Header tag */
    data: "h1" | "h2" | "h3" | "h4" | "h5"
    /** Component's child */
    children: Children;
} & Events<"h1"> & Attrs<"h1">;
```