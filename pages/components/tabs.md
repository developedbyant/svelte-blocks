---
layout: Components
title: Tabs
description: Component that organizes content into multiple panels, allowing users to navigate between them.
---
<script lang="ts">
    import Tabs,{ type T } from "sb/tabs";
    const initData:T['initData'] = [
        { id:"tweets",title:"Tweets" },
        { id:"media",title:"Media" },
        { id:"bookmark",title:"Bookmark" },
    ]
    let currentValue:T['value'] = initData[0]
</script>

# Tabs
Component that organizes content into multiple panels, allowing users to navigate between them.

<div class="flex">
    <Tabs bind:value={currentValue} {initData}/>
</div>

```svelte
<script lang="ts">
    import Tabs,{ type T } from "sb/tabs";
    const initData:T['initData'] = [
        { id:"tweets",title:"Tweets" },
        { id:"media",title:"Media" },
        { id:"bookmark",title:"Bookmark" },
    ]
    let currentValue:T['value'] = initData[0]
</script>

<div class="flex">
    <Tabs bind:value={currentValue} {initData}/>
</div>
```

## Type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?: {
        /** Make element full width */
        full?:boolean
        /** Make element rounded */
        rounded?:boolean
        /** Change background */
        bg?: string
        /** Change active background */
        activeBg?: string
        /** Change color */
        color?: string
    }
    /** Function to run when value change */
    onChange?:(current:{id:string,title:string})=>any
    /** Current bindable value */
    value?:{id:string,title:string}
    /** Initial data for component */
    initData:{id:string,title:string}[]
}
```