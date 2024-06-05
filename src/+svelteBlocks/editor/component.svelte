<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import type EditorJSType from "@editorjs/editorjs";
    let { value=$bindable() }:import('./index').T = $props()
    let editorJs:EditorJSType
    let editorJsReady:boolean = $state(false)
    const toolsElements:HTMLScriptElement[] = []
    const tools = [
        '@editorjs/header', '@editorjs/quote', '@editorjs/warning', 
        '@editorjs/delimiter', '@editorjs/checklist',
        '@editorjs/simple-image', '@editorjs/list',
        '@editorjs/embed', '@editorjs/table', '@editorjs/code',
        '@editorjs/raw', '@editorjs/marker', '@editorjs/inline-code',
        '@editorjs/underline'
    ]

    /** Add element scripts and packages needed */
    async function addTools(){
        const editorJsSrc = `https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest`
        const editorJsScriptElement = document.createElement("script")
        editorJsScriptElement.src = editorJsSrc
        toolsElements.push(editorJsScriptElement)
        document.head.appendChild(editorJsScriptElement)
        
        for(const tool of tools){
            const src = `https://cdn.jsdelivr.net/npm/${tool}@latest`
            const scriptElement = document.createElement("script")
            scriptElement.src = src
            toolsElements.push(scriptElement)
            document.head.appendChild(scriptElement)
        }
        editorJs = new (await import("@editorjs/editorjs")).default({
            autofocus: true,
            onReady() { editorJsReady = true },
            onChange: async()=>{ value = await editorJs.saver.save() },
            // @ts-ignore
            tools: { SimpleImage,Embed,Header,Warning,Quote,Delimiter,List,Checklist,Table,CodeTool,InlineCode,RawTool,Marker,Underline },
        })
    }

    /** Remove element scripts and clean up */
    function rmTools(){
        for(const toolElement of toolsElements){
            toolElement.remove()
        } console.clear()
    }

    onMount(addTools)
    onDestroy(rmTools)
</script>

<div id="editorjs"></div>

<style>
    #editorjs {
        flex: 1;
        min-height: 60dvh;
    }
    :global(.ce-toolbar__actions){
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 10%);
        padding: 3px 6px;
        transform: translateX(67px) translateY(-30px);
    }
    :global(.cdx-block,.ce-block__content, .ce-toolbar__content){
        max-width: 100% !important;
    }
    @media(max-width:700px){
        :global(.ce-toolbar__actions){
            transform: translateY(-75px);
        }
    }
</style>