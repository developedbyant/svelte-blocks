<script lang="ts">
    let { children,options={},...props }:import('./index').T = $props();
    /** Data attributes for container that can be use to change style and more */
    let dataAttrs = {
        "data-rounded": options.rounded || null,
        href:options.href || null,
        style:`
            --BG:${options.bg || "var(--sb-button-bg)"};
            --COLOR:${options.color || "var(--sb-button-color)"};
            --BORDER:${options.border || "transparent"}`
    } 
</script>

<svelte:element class="btn" this={options.href?"a":"button"} {...dataAttrs} {...props}>
    {@render children()}
</svelte:element>

<style>
    .btn{
        all: unset;
        cursor: pointer;
        padding: calc(var(--sb-padding) - 7px) calc(calc(var(--sb-padding) - 7px) * 1.5);
        font-size: 12px;
        font-weight: 600;
        border-radius: 6px;
        font-weight: 500;
        transition: all ease-in-out 0.2s;
        width: fit-content;
        color: var(--COLOR);
        background: var(--BG);
        border: 2px solid var(--BORDER);
    }
    /* on hover */
    .btn:hover{ opacity: 80%; }
    /* make chip rounded */
    .btn[data-rounded=true]{ border-radius: 50px; }
</style>