---
layout: Components
title: Editor
description: A block-based, customizable, and extensible rich text editor component.
---
<script lang="ts">
    import Editor, { type T } from "sb/editor";
    let value:T['value']
</script>

# Editor
A block-based, customizable, and extensible rich text editor component.

<div class="flex">
    <Editor bind:value/>
</div>

```svelte 
<script lang="ts">
    import Editor, { type T } from "sb/editor";
    let value:T['value']
</script>

<Editor bind:value/>
```

## Type
```ts
export type T = {
    /** Current bindable value */
    value:any
} 
```