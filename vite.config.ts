import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import kitDocsPlugin, { type Options as kitDocsPluginOptions } from "kitdocs/plugin";
const kitDocsOptions:kitDocsPluginOptions = {
    appName:"KitDocs",
    domainUrl:"https://kitdocs.dev",
    defaultImage:"https://kitdocs.dev/images/backdrop.png",
    devMode:true
}
export default defineConfig({
    plugins: [
        sveltekit(),
        kitDocsPlugin("docs",kitDocsOptions)
    ]
});