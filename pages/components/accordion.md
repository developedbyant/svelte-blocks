---
layout: Components
title: Accordion
description: A collapsible content container that toggles visibility of its content when clicked.
---
<script lang="ts">
    import Accordion, { type T } from "sb/accordion";
    const options:T['options'] = {
        bg:"purple", color:"red",
        border:"hotpink", headerColor:"yellow"
    }
    let value:T['value'] = [
        { id:"1",title:"About us",text:"All you need to know about us."},
        { id:"2",title:"About you",text:"All you need to know about us."},
        { id:"3",title:"More",text:"All you need to know about us."},
    ]
</script>

# Accordion
A collapsible content container that toggles visibility of its content when clicked.

<Accordion {value}/>

```svelte
<script lang="ts">
    import Accordion, { type T } from "sb/accordion";
    let value:T['value'] = [
        { id:"1",title:"About us",text:"All you need to know about us."},
        { id:"2",title:"About you",text:"All you need to know about us."},
        { id:"3",title:"More",text:"All you need to know about us."},
    ]
</script>
<Accordion {value}/>
```


## Component type
```ts
export type T = {
    /** Customize or pass data to pass to the component  */
    options?:{
        /** Change container background */
        bg?: string
        /** Change container text color */
        color?: string
        /** Change header text color */
        headerColor?: string
        /** Change container border color */
        border?: string
    }
    /** value/data for component */
    value:{
        /** Item id, unique */
        id:string
        /** Item title */
        title:string
        /** Item text */
        text:string
    }[]
}
```