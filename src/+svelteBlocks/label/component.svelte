<script lang="ts">
    const { children,options={},...props }:import('./index').T = $props();
    /** Data attributes for container that can be use to change style and more */
    const dataAttrs = { style:`--COLOR:${options.color || "var(--sb-text-color)"}` }
</script>

<label for="" {...dataAttrs} {...props}>
    {@render children()}
</label>

<style>
    label{
        font-size: var(--sb-size + 3px);
        font-weight: 400;
        color: var(--COLOR);
    }
</style>