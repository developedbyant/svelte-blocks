<script lang="ts">
    let { value=$bindable(""),options={},...props }:import('./index').T = $props();
    console.log(options)
    /** Data attributes for container that can be use to change style and more */
    const dataAttrs = {
        "data-rounded":options.rounded || null,
        "data-full-width":options.fullWidth || null,
        "data-error":options.error || null,
        style:`
            --BG:${options.bg || "var(--sb-foreground)"};
            --COLOR:${options.color || "var(--sb-text-color)"};
            --FOCUS-COLOR:${options.focusColor || "var(--sb-text-focus-color)"};
            --BORDER:${options.border || "var(--sb-border-color)"}`
    }
</script>

<div class="container" {...dataAttrs}>
    <textarea bind:value {...props}></textarea>
</div>

<style>
    .container{
        display: flex;
        align-items: center;
        border: 1.5px solid var(--BORDER,red);
        border-radius: 6px;
        background: var(--BG,red);
        width: fit-content;
    }
    /* when focus */
    .container:focus-within{
        border: 1.9px solid var(--FOCUS-COLOR,red);
        box-shadow: 0 0 0 1px var(--FOCUS-COLOR,red);
    }
    .container textarea{
        all: unset;
        resize: vertical;
        width: 100%;
        padding: var(--sb-padding) calc(var(--sb-padding) * 1.5);
        font-size: var(--sb-size);
        color: var(--COLOR);
        font-weight: 600;
    }
    .container textarea::placeholder{
        color: var(--FOCUS-COLOR)
    }
    /* make rounded */
    .container[data-rounded]{ border-radius: 50px;}
    /* make full width */
    .container[data-full-width]{ width: 100%; }
    /* when error */
    .container[data-error]{ box-shadow: 0 0 0 2px var(--sb-error-bg); }
    .container[data-error] textarea{ color: var(--sb-error-bg); }
</style>