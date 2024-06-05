<script lang="ts">
    import { slide } from "svelte/transition";
    import type { ToastData } from "./index";
    let { toast,rounded }:{ toast:ToastData,rounded?:boolean } = $props();
</script>

<div class="toast" class:rounded data-type={toast.type} transition:slide>
    {#if toast.type=="successful"}
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
    {:else if toast.type=="error"}
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
    {:else}
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
    {/if}
    <div class="info">
        <span class="title">{toast.title || toast.type}</span>
        <p class="msg">{toast.msg}</p>
    </div>
</div>

<style>
    .toast{
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 10px;
        padding: 10px 20px;
        background: var(--sb-foreground);
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        box-shadow: 1px 1px 0px var(--sb-border-color);
    }
    /* toast info */
    .info{
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    /* title */
    .title{
        font-size: calc(var(--sb-size) + 1px);
        font-weight: 600;
        color: var(--sb-text-colors,red);
        text-transform: capitalize;
    }
    /* toast message */
    .msg{
        font-size: calc(var(--sb-size) - 2px);
        font-weight: 400;
    }
    /* error */
    .toast[data-type="error"]{
        /* title color */
        .title{ color: #DB6D6D; }
        /* icon color */
        .icon{ fill: #DB6D6D; }
    } 
    /* successful */
    .toast[data-type="successful"]{
        /* title color */
        .title{ color: #079E6D; }
        /* icon color */
        .icon{ fill: #079E6D; }
    } 
    /* neutral */
    .toast[data-type="neutral"]{
        /* title color */
        .title{ color: #9c9c9c; }
        /* icon color */
        .icon{ fill: #9c9c9c; }
    } 
    /* icon */
    .icon{
        width: calc(var(--sb-size) + 10px);
        height: calc(var(--sb-size) + 10px);
    }
    /* make it rounded */
    .toast.rounded{ border-radius: 50px; }
</style>