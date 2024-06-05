---
layout: Components
title: Typewriter
description: Animated text component that simulates a typewriter effect, revealing text one character at a time.
---
<script lang="ts">
    import Typewriter,{ type T} from "sb/typewriter";
    const color:T['color'] = "var(--sb-main-color)"
    const words:T['words'] = [ "cook","run","code" ]
</script>

# Typewriter
Animated text component that simulates a typewriter effect, revealing text one character at a time.

<div class="flex">
    <p>Hello there a like to <Typewriter {color} {words}>Cook</Typewriter></p>
</div>

```svelte
<script lang="ts">
    import Typewriter,{ type T} from "sb/typewriter";
    const color:T['color'] = "var(--sb-main-color)"
    const words:T['words'] = [ "cook","run","code" ]
</script>

<div class="flex">
    <p>Hello there a like to <Typewriter {color} {words}>Cook</Typewriter></p>
</div>
```

## Type
```ts
export type T = {
    /** The initial text for component */
    children:Children
    /** The code that the highlighted text will be */
    color:string
    /** The words to type */
    words:string[]
}
```