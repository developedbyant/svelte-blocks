<script lang="ts">
    import { slide } from "svelte/transition";
    import { toastsStore } from "./index";
    import Toast from "./Toast.svelte";
    const { options={} }:App.b['toasts'] = $props();
    const dataAttrs = {
        "data-position": options.position || "tr",
        "data-full": options.full || null
    }
</script>

{#if $toastsStore.length>0}
    <div class="toasts" {...dataAttrs} transition:slide>
        {#each $toastsStore as toast (toast.id)}
            <Toast {toast} rounded={options.rounded}/>
        {/each}
    </div>
{/if}

<style>
    .toasts{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: fixed;
        max-height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 100;
    }
    /* top right */
    [data-position="tr"]{
        top: 0px;
        right: 0px;
    }
    /* top left */
    [data-position="tl"]{
        top: 0px;
        left: 0px;
    }
    /* bottom right */
    [data-position="br"]{
        bottom: 0px;
        right: 0px;
    }
    /* bottom left */
    [data-position="bl"]{
        bottom: 0px;
        left: 0px;
    }
    /* make it full width */
    .toasts[data-full]{ width: 100%; }
</style>