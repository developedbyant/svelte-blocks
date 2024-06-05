<script lang="ts">
    const { value,options={} }:import("./index").T = $props()
    import { createAccordion } from "@melt-ui/svelte";
    import { slide } from "svelte/transition";
    /** Data attributes for container that can be use to change style */
    let dataAttrs = {
        style:`
            --BG:${options.bg || "var(--sb-foreground)"};
            --COLOR:${options.color || "var(--sb-text-color)"};
            --HEADER-COLOR:${options.headerColor || "var(--sb-header-color)"};
            --BORDER:${options.border || "var(--sb-border-color)"};`
    }
    // accordion builder
    const { elements: { root, content, item, trigger }, helpers: { isSelected } } = createAccordion();
</script>

<div class="container" use:root {...$root} {...dataAttrs}>
    {#each value as { id, title, text }}
        <div class="item" {...$item(id)} use:item>
            <h2 class="header">
                <button {...$trigger(id)} use:trigger>
                    {title}
                    <svg class="icon" class:open={$isSelected(id)} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </h2>
            {#if $isSelected(id)}
                <div class="content" {...$content(id)} use:content transition:slide>
                    <p class="text">{text}</p>
                </div>
            {/if}
        </div>
    {/each}
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        gap: 5px;
        background: var(--BG);
        color: var(--COLOR);
        border-radius: var(--sb-radius);
        box-shadow: 1px 2px 3px var(--sb-shadow);
        border: 2px solid var(--BORDER);
        overflow: hidden;
    }
    .item:not(:last-child) {
        box-shadow: 0px 2px 0 var(--sb-border-color);
    }
    /* header */
    .header{
        text-transform: capitalize;
        display: flex;
        align-items: center;
        flex-grow: 1;
        font-size: 17px;
        font-weight: 600;
        padding: 15px 20px;
        color: var(--HEADER-COLOR);
        /* button in header */
        button{
            all: unset;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &:focus-visible,&:hover{
                cursor: pointer;
            }
        }
    }
    .icon{
        width: 30px;
        height: 30px;
        transition: transform ease-in-out 0.2s;
    }
    .icon.open{ transform: rotate(180deg);  }
    /* content */
    .content{
        padding: 15px 20px;
        background: color-mix(in srgb, var(--sb-background) 30%, transparent);
        box-shadow: 0px -2px 0 var(--sb-border-color);
    }
    .text{
        font-size: 14px;
        font-weight: 300;
    }
</style>