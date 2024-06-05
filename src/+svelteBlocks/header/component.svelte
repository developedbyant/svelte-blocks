<script lang="ts">
    const { children,data,options={ },...props }:import("./index").T = $props()
    const dataAttrs = {
        "data-center":options.center || null,
        style:`--COLOR:${options.color || "var(--sb-header-color)"}`
    }
</script>

<div class="container" {...dataAttrs}>
    <svelte:element class="header" this={data} {...props}>
        {@render children()}
    </svelte:element>
</div>

<style>
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    /* center header */
    .container[data-center] > :first-child{ margin: auto;}
    h1,h2,h3{
        font-size: var(--sb-size + 10px);
        font-weight: 700;
        color: var(--COLOR);
    }
    h2{
        font-size: calc(var(--sb-size) + 8px);
        font-weight: 600;
    }
    h3{
        font-size: calc(var(--sb-size) + 6px);
        font-weight: 500;
    }
    h4{
        font-size: calc(var(--sb-size) + 4px);
        font-weight: 400;
    }
    h5{
        font-size: calc(var(--sb-size) + 1px);
        font-weight: 400;
    }
</style>