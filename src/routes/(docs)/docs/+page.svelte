<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"SvelteBlocks",description:"Everything you need to know about svelte blocks.",
        url:"https://kitdocs.dev/docs",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });    /** Copy text to clipboard (Added by kitdocs) */
    async function copyText(e:MouseEvent){
        const copyButton = e.target as HTMLButtonElement
        const code = copyButton.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        copyButton.innerText = "Copied"
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>{ copyButton.innerText = "Copy" },1000)
    }
</script>

<h1 data-section data-md="header" id="what-is-svelteblocks">
    What is svelteBlocks
</h1>
<p data-md="p">SvelteBlocks is a collection of svelte components that are use to compose a website using blocks.<br>
Powered by <a data-md="a" href="https://melt-ui.com/">
    Melt-UI
</a> which is An open-source Svelte library for building high-quality, accessible design systems and web apps.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="installation">
    Installation
</h2>
<p data-md="p">There is no installation, since svelteBlocks is a list of 
collections of svelte components you can just copy and paste them into 
your website or run <code data-md="inline-code">npx svelte-blocks</code> to get started or to add any of the components.</p>
