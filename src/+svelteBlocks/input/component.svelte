<script lang="ts">
    let { value,options={},...props }:import('./index').T = $props();
    /** Data attributes for container that can be use to change style and more */
    const dataAttrs = {
        "data-error": options.error || null,
        "data-full-width": options.fullWidth || null,
        "data-rounded": options.rounded || null,
        style:`
            --BG:${options.bg || "var(--sb-foreground)"};
            --COLOR:${options.color || "var(--sb-text-color)"};
            --FOCUS-COLOR:${options.focusColor || "var(--sb-text-focus-color)"};
            --BORDER:${options.border || "var(--sb-border-color)"}`
    }
</script>

<div class="container" {...dataAttrs}>
    <input type="text" bind:value {...props}>
</div>

<style>
    .container{
        display: flex;
        align-items: center;
        border: 1.9px solid var(--BORDER);
        border-radius: 6px;
        background: var(--BG);
        width: fit-content;
        transition: border ease-in-out 0.2s;
        box-shadow: 1px 2px 2px var(--sb-shadow);
    }
    /* when focus */
    .container:focus-within{
        border: 1.9px solid var(--sb-focus-color,red);
        box-shadow: 0 0 0 1px var(--sb-focus-color,red);
    }
    .container input{
        all: unset;
        padding: var(--sb-padding) calc(var(--sb-padding) * 1.5);
        font-size: var(--sb-size);
        font-weight: 400;
        width: -webkit-fill-available;
        color: var(--COLOR);
    }
    .container input::placeholder{ color: var(--FOCUS-COLOR) }
    /* make rounded */
    .container[data-rounded]{ border-radius: 50px; }
    /* make full width */
    .container[data-full-width]{ width: auto; }
    /* when error */
    .container[data-error]{ box-shadow: 0 0 0 1px var(--sb-error-bg); }
    .container[data-error] input{ color: var(--sb-error-bg); }
</style>