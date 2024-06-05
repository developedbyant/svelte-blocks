---
layout: Components
title: TextDivider
description: Horizontal separator element used to divide and organize content into distinct sections.
---
<script lang="ts">
    import TextDivider from "sb/textDivider";
</script>

# Label
Horizontal separator element used to divide and organize content into distinct sections.

<div class="flex col">
    <p>Hello</p>
    <TextDivider>OR</TextDivider>
    <p>Hola</p>
</div>

```svelte
<script lang="ts">
    import TextDivider from "sb/textDivider";
</script>

<div class="flex col">
    <p>Hello</p>
    <TextDivider>OR</TextDivider>
    <p>Hola</p>
</div>
```

## Type
```ts
export type T = {
    children: Children;
} & Events<"div"> & Attrs<"div">
```