---
layout: Components
title: TextArea
description: Multi-line text input field for entering and editing large amounts of text.
---
<script lang="ts">
    import TextArea,{ type T} from "sb/textArea";
    let value:T['value'] = ""
</script>

# TextArea
Multi-line text input field for entering and editing large amounts of text.

<div class="flex">
    <TextArea bind:value placeholder="Text...." options={{ fullWidth:true }}/>
</div>

```svelte
<script lang="ts">
    import TextArea,{ type T} from "sb/textArea";
    let value:T['value'] = ""
</script>

<div class="flex">
    <TextArea bind:value placeholder="Text...." options={{ fullWidth:true }}/>
</div>
```

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Show error color */
        error?:boolean
        /** Make element full width */
        fullWidth?:boolean
        /** Make element rounded */
        rounded?:boolean
        /** Change background */
        bg?: string
        /** Change color */
        color?: string
        /** Change focus color */
        focusColor?: string
        /** Change border color */
        border?: string
    }
    /** Current bindable value */
    value:string
} & Events<"textarea"> & Attrs<"textarea">
```