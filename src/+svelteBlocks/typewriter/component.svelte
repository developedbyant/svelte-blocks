<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    const { children,words,color }:import('./index').T = $props()
    let element:HTMLSpanElement
    let run:boolean = true

    async function setCurserOpacity(element:HTMLSpanElement){
        while(run){
            element.style.opacity = element.style.opacity==="0" ? "1" : "0"
            await new Promise(r=>setTimeout(r,500))
        }
    }

    async function typewriter() {
        element.innerText = ""
        const textSpan:HTMLSpanElement = document.createElement("span")
        textSpan.innerText = words[0]
        textSpan.classList.add("text")
        const cursorSpan:HTMLSpanElement = document.createElement("cursor")
        cursorSpan.classList.add("cursor")
        cursorSpan.innerText = "|"
        element.appendChild(textSpan)
        element.appendChild(cursorSpan)
        element.style.transition = "all ease 3ms"
        element.style.color = "var(--COLOR)"
        // set opacity to 100% and 0% every 500ms
        setCurserOpacity(cursorSpan)
        while(run){
            for(const word of words){
                // reset inner text
                textSpan.innerText = ""
                // add each letter in word
                for(const letter of word){
                    textSpan.innerText = textSpan.innerText+letter
                    await new Promise(r=>setTimeout(r,300))
                }
                await new Promise(r=>setTimeout(r,1000))
            }
        }
    }
    // start typewriter function
    onMount(typewriter)
    // stop loop when component is destroyed
    onDestroy(()=>{ run = false })
</script>

<span id="typewriter" style={`--COLOR:${color}`} bind:this={element}>
    {@render children()}
</span>