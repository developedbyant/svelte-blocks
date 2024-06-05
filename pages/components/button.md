---
layout: Components
title: Button
description: A clickable element that triggers an action when pressed.
---
<script lang="ts">
    import Button, { type T } from "sb/button";
    const onclick = ()=> alert("Button was clicked");
</script>

# Toast
A clickable element that triggers an action when pressed.

<div class="flex">
    <Button>Button</Button>
</div>

```svelte 
<script lang="ts">
    import Button, { type T } from "sb/button";
</script>

<Button>Button</Button>
```

## Type
```ts
type T = {
    /** Customize or pass data to pass to the component  */
    options?:{
        /** Add icon */
        icon?: any;
        /** If href was passed the button will turn into a anchor tag */
        href?:string
        /** Set loading spinner, also disable button */
        loading?: boolean;
        /** Make button rounded (radius) */
        rounded?: boolean;
        /** Make button take full with */
        full?: boolean;
        /** Run icon mode */
        iconMode?: boolean;
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
        /** Change or add border color */
        border?: string
    }
    /** Component children */
    children: Children;
}
```

## Style
You can Change the way the default button looks like, by passing props `options`.
- bg: button's background
- color: button's color
- border: button's border color

## Outline
```svelte
<Button options={{
    bg:"transparent",color:"var(--sb-main-color)",
    border:"var(--sb-main-color)"}}>
    Button
</Button>
```
<Button options={{
    bg:"transparent",color:"var(--sb-main-color)",
    border:"var(--sb-main-color)"}}>
    Button
</Button>

## Loading
```svelte
<Button options={{ loading:true }}>Loading</Button>
```
<Button options={{ loading:true }}>Loading</Button>

## Full width
```svelte
<Button options={{ full:true }}>Full</Button>
```
<Button options={{ full:true }}>Full</Button>

## Rounded
```svelte
<Button options={{ rounded:true }}>Rounded</Button>
```
<Button options={{ rounded:true }}>Rounded</Button>

## Anchor tag
```svelte
<Button options={{ href:"/docs" }}>Docs</Button>

```
<Button options={{ href:"/docs" }}>Docs</Button>

## Events
This component takes any event that can be passed to html button element, example `onclick` and more.
```svelte
<script>
    const onclick = ()=> alert("Button was clicked");
</script>

<Button {onclick}>Event</Button>
```
<Button {onclick}>Event</Button>