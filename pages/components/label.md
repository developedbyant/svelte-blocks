---
layout: Components
title: Label
description: Text element that provides a description or title for a form control or interface element.
---
<script lang="ts">
    import Label from "sb/label";
</script>

# Label
Text element that provides a description or title for a form control or interface element.

<div class="flex">
    <Label for="email">Email</Label>
</div>

```svelte
<script lang="ts">
    import Label from "sb/label";
</script>

<Label>Email</Label>
```

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?:{
        /** Change color */
        color?: string
    }
    /** Component's child */
    children: Children
} & Attrs<"label">;
```