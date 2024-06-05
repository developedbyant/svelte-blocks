export type Snippet = import('svelte').Snippet;
export type Children = Snippet;
/** Element attributes */
export type Attrs<TagName extends keyof HTMLElementTagNameMap> = Omit<import('svelte/elements').SvelteHTMLElements[TagName], `on${string}` | `bind:${string}`>
/** Element events */
export type Events<TagName extends keyof HTMLElementTagNameMap> = {
	[K in keyof HTMLElementTagNameMap[TagName]as K extends `on${string}` ? K : never]?: (e: any) => any;
};