<script lang="ts">   
    const { initData,options={},...props }:import("./index").T = $props();
    const dataAttrs:{[key:string]:any} = {
        href:options.href ? options.href : null,
        "data-center": options.center || null,
        style:`
            --MAX-SIZE:${options.maxSize || "80px"};
            --BG:${options.bg || "var(--sb-foreground)"};
            --COLOR:${options.color || "var(--sb-text-color)"};
            --BORDER:${options.border || "var(--sb-border-color)"}`
    }
</script>

<svelte:element class="avatar" this={options.href?"a":"div"} {...dataAttrs} {...props}>
    {#if typeof initData==="string"}
        <span class="letter">{initData}</span>
    {:else}
        <img src={initData.src} alt={initData.alt}>
    {/if}
</svelte:element>

<style>
    .avatar{
        max-width: var(--MAX-SIZE);
        height: var(--MAX-SIZE);
        width: var(--MAX-SIZE);
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid var(--BORDER);
        box-shadow: 1px 2px 3px var(--sb-shadow);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .avatar img{
        object-fit: cover;
        object-position: center;
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        width: 100%;
    }
    .letter{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: var(--BG);
        font-size: calc(var(--MAX-SIZE) / 2.5);
        font-weight: 800;
        color: var(--COLOR);
    }
    /** Center image using margin */
    [data-center]{ margin: auto; }
</style>