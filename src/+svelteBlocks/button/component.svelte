<script lang="ts">   
    const { children,options={},...props }:import("./index").T = $props();
    let dataAttrs = $derived({
        "data-full-width": options.fullWidth || null,
        "data-loading": options.loading || null,
        "data-rounded": options.rounded || null,
        disabled:options.loading,
        href:options.href || null,
        style:`
            --BG:${options.bg || "var(--sb-button-bg)"};
            --COLOR:${options.color || "var(--sb-button-color)"};
            --BORDER:${options.border || "transparent"}`
    })
</script>

<svelte:element class="btn" class:withBorder={options.border} class:iconMode={options.iconMode} this={options.href?"a":"button"} {...dataAttrs} {...props}>
    {#if options.loading}
        <div class="spinner"></div>
    {/if}
    {#if options.icon && !options.loading}
        <div class="icon">            
            <svelte:component class="icon" width="100%" height="100%" this={options.icon} />
        </div>
    {/if}
    {@render children()}
</svelte:element>

<style>
    .btn{
        all: unset;
        cursor: pointer;
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 3px;
        padding: var(--sb-padding) calc(var(--sb-padding) * 1.5);
        font-size: var(--sb-size);
        font-weight: 400;
        border-radius: 6px;
        color: var(--COLOR);
        background: var(--BG);
    }
    /* if border was set */
    .btn.withBorder{ box-shadow: 0 0 0 1.5px var(--BORDER);}
    /* icon */
    .icon{
        width: calc(var(--sb-size) + 2px);
        height: calc(var(--sb-size) + 2px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /* on mouse hover */
    .btn:hover,.btn:disabled{ opacity: 80%; }
    /* button spinner */
    .spinner{
        width: var(--sb-size);
        height: var(--sb-size);
        border-radius: 50%;
        border: 2px solid;
        border-top: 2px solid transparent;
        animation: spin 1s linear infinite;
    }
    /* when loading or disable */
    .btn:disabled{ opacity: 80%; }
    .btn[data-loading="true"]{ cursor: not-allowed; }
    /* make rounded */
    .btn[data-rounded="true"]{ border-radius: 50px; }
    /* make full width */
    .btn[data-full-width="true"]{
        width: -webkit-fill-available;
        justify-content: center;
    }
    /* run on icon mode */
    .btn.iconMode{
        padding: var(--sb-padding-y);
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
</style>