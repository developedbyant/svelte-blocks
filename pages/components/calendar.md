---
layout: Components
title: Calendar
description: A interactive date picker that displays a monthly view and allows selecting a date.
---
<script lang="ts">
    import Calendar, { type T } from "sb/calendar";
    /** Current value */
    let value:T['value'];
    /** Component options */
    const options:T['options'] = {
        bg:"purple", color:"green", border:"hotpink",
        onSelectedBg:"yellow", onSelectedColor:"blue"
    }
</script>

# Toast
A interactive date picker that displays a monthly view and allows selecting a date.
<div class="flex">
    <Calendar bind:value/>
</div>

## Usage
To use component, import it and it's type from `sb/calendar` and add component to any svelte file.
```svelte 
<script lang="ts">
    import Calendar, { type T } from "sb/calendar";
    let value:T['value'];
</script>

<Calendar bind:value/>
```

## Type
```ts
type T = {
    /** Customize or pass data to pass to the component  */
    options?:{
        /** Make container take full with */
        fullWidth?: boolean;
        /** Change container background */
        bg?: string
        /** Change container text color */
        color?: string
        /** Change header text color */
        headerColor?: string
        /** Change container border color */
        border?: string
        /** Change selected day background */
        onSelectedBg?: string
        /** Change selected day color */
        onSelectedColor?: string
    }
    /** Current value, it can be bind */
    value?:{
        day:number
        year:number
        month:number
    }
}
```

## Binding value
To bind the current value of the component, use the `value` prop.
```svelte
<script lang="ts">
    import Calendar, { type T } from "sb/calendar";
    /** Current value */
    <addS>
    let value:T['value'];
    <addE>
    /** Component options */
    const options:T['options'] = {
        bg:"purple", color:"green", border:"hotpink",
        onSelectedBg:"yellow", onSelectedColor:"blue"
    }
</script>

<addS>
    <Calendar bind:value {options}/>
<addE>
```

## Change style
You can Change the way the default button looks like, by passing props `options`.
```svelte
<script lang="ts">
    import Calendar, { type T } from "sb/calendar";
    /** Current value */
    let value:T['value'];
    /** Component options */
    const options:T['options'] = {
        bg:"purple", color:"green", border:"hotpink",
        onSelectedBg:"yellow", onSelectedColor:"blue"
    }
</script>

<Calendar bind:value {options}/>
```

<Calendar bind:value {options}/>