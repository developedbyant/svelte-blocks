---
layout: Examples
title: Login
description: A login page using svelteBlocks.
---
<script lang="ts">
    import Label from "sb/label"
    import Input from "sb/input";
    import Button from "sb/button";
    import TextDivider from "sb/textDivider";
</script>

# Login page
Learn how to make a login page using svelte block, step by step.

<div class="page">
    <form class="content">
        <Label for="email">Email</Label>
        <Input options={{ fullWidth:true }} id="email" type="email" placeholder="Email..." required/>
        <Label for="password">Password</Label>
        <Input options={{ fullWidth:true }} id="password" type="password" placeholder="Password..." required/>
        <Button options={{ fullWidth:true }} type="submit">Login</Button>
    </form>
</div>

<style>
    .page{
        padding: calc(var(--sb-padding) + 10px);
        background: var(--sb-blur-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: var(--sb-radius);
    }
    .content{
        max-width: 400px;
        width: 100%;
        background: var(--sb-background);
        padding: calc(var(--sb-padding) + 10px);
        border-radius: var(--sb-radius);
        display: flex;
        flex-direction: column;
        gap: var(--sb-gap);
        border: 1.5px solid var(--sb-border-color);
        box-shadow: 1px 2px 3px var(--sb-shadow);
    }
</style>

## Code
Code for the example above.
```svelte 
<script lang="ts">
    import Label from "sb/label"
    import Input from "sb/input";
    import Button from "sb/button";
    import TextDivider from "sb/textDivider";
</script>

<div class="page">
    <form class="content">
        <Label for="email">Email</Label>
        <Input options={{ fullWidth:true }} id="email" type="email" placeholder="Email..." required/>
        <Label for="password">Password</Label>
        <Input options={{ fullWidth:true }} id="password" type="password" placeholder="Password..." required/>
        <Button options={{ fullWidth:true }} type="submit">Login</Button>
    </form>
</div>

<style>
    .page{
        padding: calc(var(--sb-padding) + 10px);
        background: var(--sb-blur-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: var(--sb-radius);
    }
    .content{
        max-width: 400px;
        width: 100%;
        background: var(--sb-background);
        padding: calc(var(--sb-padding) + 10px);
        border-radius: var(--sb-radius);
        display: flex;
        flex-direction: column;
        gap: var(--sb-gap);
        border: 1.5px solid var(--sb-border-color);
        box-shadow: 1px 2px 3px var(--sb-shadow);
    }
</style>
```