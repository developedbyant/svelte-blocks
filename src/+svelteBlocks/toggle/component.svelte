<script lang="ts">
    let { value=$bindable(false),options={},...props }:import('./index').T = $props();
    let dataAttis = $derived({
        "data-rounded": options.rounded===undefined ? true : options.rounded,
        "data-active": value || null,
        style:`--SIZE:${options.size || "40px" }`,
    })
    /** Handle click */
    const onclick = (e:any)=> {
        value = !value
        if(props.onclick){ props.onclick(e) }
    }
</script>

<button  {...dataAttis} {...props} {onclick}>
    <div class="circle"></div>
</button>

<style>
    button{
        all: unset;
        cursor: pointer;
        width: var(--SIZE);
        min-height: calc(var(--SIZE) / 2);
        height: calc(var(--SIZE) / 2);
        background: var(--sb-foreground);
        border: 1px solid var(--sb-border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 500px;
        position: relative;
        transition: all ease-in-out 0.2s;
    }
    /* on mouse hover and focus */
    button:hover,button:focus{ opacity: 80%; }
    .circle{
        width: calc(var(--SIZE) / 3);
        height: calc(var(--SIZE) / 3);
        background: var(--sb-main-color);
        border-radius: 50%;
        transition: all ease-in-out 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(calc(-100% + calc(var(--SIZE) / 15)));
    }
    /* when active */
    button[data-active]{
        background: var(--sb-button-bg);
    }
    /* translate circle to the right */
    button[data-active] .circle{
        background: var(--sb-button-color);
        transform: translateX(calc(100% - calc(var(--SIZE) / 15)));
    }
    /* Don't make toggle rounded */
    button[data-rounded=false]{
        border-radius: var(--sb-radius);
    }
</style>