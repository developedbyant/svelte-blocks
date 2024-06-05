<script lang="ts">
    import "../../app.css";
    import appJsonData from "../../app.json"
    import { Layout,appJsonDataStore,appStore } from "kitdocs";
    const { data,children } = $props()
    // set theme and appJson (src/app.json)
    appStore.update(store=>{ store.theme=data.theme ; return store })
    appJsonDataStore.set(appJsonData)
</script>
{#snippet Logo()}
    <a href="/" class="logo" aria-label="Navigate to home page">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks">
            <rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/>
        </svg>
    </a>
{/snippet}
<Layout NavLogo={Logo} FooterLogo={Logo}>
    {@render children()}
</Layout>
<style>
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        background: var(--sb-main-color);
        stroke: white;
        border-radius: 5px;
        padding: 5px;
    }
</style>