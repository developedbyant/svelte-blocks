<script lang="ts">
    //[IMPORTS]=[Chip]
    import Chip from "../chip";
    let { options={},value=$bindable([]),onChange,onRemove }:import('./index').T = $props();
    let inputValue = $state("");
    let dataAttrs = $derived({
        'data-error':(value.length>0 && value.includes(inputValue.trim())) || null,
        "data-rounded": options.rounded || null,
        style:`
            --BG:${options.bg || "var(--sb-foreground)"};
            --COLOR:${options.color || "var(--sb-text-color)"};
            --FOCUS-COLOR:${options.focusColor || "var(--sb-text-focus-color)"};
            --BORDER:${options.border || "var(--sb-border-color)"}`
    })

    /** Change input changes */
    function handleKeyChanges(e:KeyboardEvent){
        if(e.key!=="Enter") return // stop function
        const cleanInputValue = inputValue.trim()
        // if input value already in value, stop func
        if(value.includes(cleanInputValue) || cleanInputValue==="") return
        // add to value
        value.push(cleanInputValue)
        value = [...value]
            // run on remove function
            if(onChange) onChange({ newItemsList:value })
        // reset input value and set error to false
        inputValue = ""
    }
    
    /** Handle chip removal */
    const removeChip = (text:string)=>{
        const newChips = value.filter(data=>data!==text)
        value = [...newChips]
        // run on remove function
        if(onRemove) onRemove({ itemRemoved:text,newItemsList:newChips })
    }
</script>

<div class="container" {...dataAttrs}>
    <input type="text" placeholder="Input value..." bind:value={inputValue} onkeyup={handleKeyChanges}>
    <div class="chips">
        {#each value as text (text)}
            <Chip onclick={()=>removeChip(text)}>
                {text}
            </Chip>
        {/each}
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        border: 1.5px solid var(--BORDER);
        border-radius: 6px;
        background: var(--BG);
        width: -webkit-fill-available;
        transition: border ease-in-out 0.2s;
    }
    /* when focus */
    .container:focus-within{
        border: 1.5px solid var(--FOCUS-COLOR);
        box-shadow: 0 0 0 1px var(--FOCUS-COLOR);
    }
    .container input{
        all: unset;
        padding: 8px 16px;
        padding: var(--sb-padding) calc(var(--sb-padding) * 1.5);
        font-size: var(--sb-size);
        font-weight: 400;
        width: -webkit-fill-available;
        color: var(--COLOR);
    }
    .container input::placeholder{
        color: var(--FOCUS-COLOR)
    }
    /* when error */
    .container[data-error]{ border: 1.5px solid var(--sb-error-bg,red); }
    .container[data-error] input{ color: var(--sb-error-bg,red); }

    .chips{
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding: 10px 16px;
    }
    /* when there is not chips */
    .chips:empty{ display: none; }
</style>