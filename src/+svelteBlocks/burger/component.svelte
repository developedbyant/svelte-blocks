<script lang="ts">
    let { value=$bindable(false),options={ },...props }:import('./index').T = $props();
    const dataAttrs = {
        style:`--BG:${options.bg || "var(--sb-text-color)"};${options.alwayShow?'display:flex':''}`
    }
    /** Handle burger clicks */
    const onclick = (e:any)=> {
        value =! value
        if(props.onclick){ props.onclick(e) }
    }
</script>

<button class="burger" class:open={value} {onclick} {...dataAttrs}>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
</button>

<style>
    .burger{
        all: unset;
        min-width: 35px;
        width: 35px;
        height: 25px;
        cursor: pointer;
        display: none;
        justify-content: space-between;
        flex-direction: column;
        overflow: hidden;
    }
    .one,.two,.three{
        width: 100%;
        height: 4px;
        border-radius: 20px;
        background: var(--BG);
        transition: transform 0.2s ease-in-out;
    }

    .burger.open .two{
        transform: translateX(100%);
    }
    .burger.open .one{
        transform: rotate(40deg) translate(6px, 9px);
    }
    .burger.open .three{
        transform: rotate(-40deg) translate(6px, -9px);
    }
    /* when to show burger */
    @media(max-width: 700px) {
        .burger {
            display: flex;
        }
    }
</style>