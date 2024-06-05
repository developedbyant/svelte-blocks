<script lang="ts">
    let { value=$bindable({id:"",title:""}),initData=$bindable([]),options={},onChange }:import('./index').T = $props();
    // set current value to the first index from value
    value = initData[0]
    /** Data attributes for container that can be use to change style and more */
    const dataAttrs = {
        "data-full":options.full,
        "data-rounded":options.rounded,
        style:`
            --BG:${options.bg || "var(--sb-foreground)"};
            --ACTIVE-BG:${options.activeBg || "var(--sb-background)"};
            --COLOR:${options.color || "var(--sb-text-color)"};`
    }
    /** Update value tab */
    function handleClick(tab:App.b['tabs']['data'][0]){
        if(value===tab) return
        // create change event and update value value
        if(onChange) onChange(tab) // dispatch change event
        value = tab
    }
</script>

<div class="tabs" {...dataAttrs}>
    {#each initData as tab (tab.id)}
    {@const active = tab.id===value.id}
        <button class="tab" class:active onclick={()=>handleClick(tab)}>
            { tab.title }
        </button>
    {/each}
</div>

<style>
    .tabs{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px;
        background: var(--BG);
        border-radius: 10px;
        width: fit-content;
        box-shadow: 0 0 2px 2px var(--sb-shadow);
    }
    .tab{
        all: unset;
        cursor: pointer;
        padding: calc(var(--sb-padding) - 5px) calc(calc(var(--sb-padding) - 5px) * 1.5);
        border-radius: var(--sb-radius);
        font-size: 14px;
        font-weight: 500;
        color: var(--COLOR);
    }
    .tab.active{
        background: var(--ACTIVE-BG);
        box-shadow: 0 0 2px 1px var(--sb-border-color);
    }
    /* make full width */
    [data-full="true"]{
        width: 100%;
    }
    [data-full="true"] button{
        text-align: center;
        flex-grow: 1;
    }
    /* make element rounded */
    [data-rounded="true"] { border-radius: 50px; }
    [data-rounded="true"] button{ border-radius: 50px; }
</style>