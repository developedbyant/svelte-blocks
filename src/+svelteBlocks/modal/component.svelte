<script lang="ts">
    import { scale,fade } from "svelte/transition";
    let { children,open=$bindable(false),options={ } }:import('./index').T = $props();
    /** Data attributes for container that can be use to change style and more */
    const dataAttis = {
        'data-full':options.full || null,
        style:`
            --MAX-WIDTH:${options.maxWidth || '400px'};
            --MAX-HEIGHT:${options.maxHeight || 'auto'};
            --BG:${options.bg || "var(--sb-foreground)"};
            --BORDER:${options.border || "var(--sb-border-color)"}`
    }
    /** handle clicks */
    function onclick(e:MouseEvent){
        const target = e.target as HTMLDivElement
        const closeModel = target.classList.contains('container')
        // close model
        if(closeModel) open = false
    }
</script>

{#if open}
    <div class="container" role="none" transition:fade {onclick} {...dataAttis}>
        <div class="content" transition:scale>
            {@render children()}
        </div>
    </div>
{/if}

<style>
    .container{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0; left: 0;
        background: var(--sb-blur-bg);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    .content{
        max-width: var(--MAX-WIDTH);
        max-height: var(--MAX-HEIGHT);
        width: 100%;
        height: fit-content;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: var(--BG);
        padding: var(--sb-padding-x);
        color: var(--sb-text-color);
        border-radius: var(--sb-radius);
        border: 2px solid var(--BORDER);
        box-shadow: 1px 2px 3px var(--sb-shadow);
    }
</style>