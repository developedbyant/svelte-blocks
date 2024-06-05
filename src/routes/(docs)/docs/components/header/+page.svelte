<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Header",description:"A top-level navigation component that displays a title to a page.",
        url:"https://kitdocs.dev/docs/components/header",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Header, { type T } from "sb/header";
    /** Copy text to clipboard (Added by kitdocs) */
    async function copyText(e:MouseEvent){
        const copyButton = e.target as HTMLButtonElement
        const code = copyButton.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        copyButton.innerText = "Copied"
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>{ copyButton.innerText = "Copy" },1000)
    }
</script>

<h1 data-section data-md="header" id="header">
    Header
</h1>
<p data-md="p">A top-level navigation component that displays a title to a page.</p>
<div class="flex col">
    <Header data="h1">H1 header</Header>
    <Header data="h2">H2 header</Header>
    <Header data="h3">H3 header</Header>
    <Header data="h4">H4 header</Header>
    <Header data="h5">H5 header</Header>
</div>


<space></space>
<div data-md="space"></div>
<h2 data-section data-md="header" id="usage">
    Usage
</h2>
<p data-md="p">To use component, import it and it's type from <code data-md="inline-code">sb/header</code> and add component to any svelte file.</p>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Header</span><span style="color:#D4D4D4">, &#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/header&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Header</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">data</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;h1&quot;</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">H1 header</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Header</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Header</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">data</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;h2&quot;</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">H2 header</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Header</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Header</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">data</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;h3&quot;</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">H3 header</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Header</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Header</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">data</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;h4&quot;</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">H4 header</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Header</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Header</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">data</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;h5&quot;</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">H5 header</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Header</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="type">
    Type
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#C586C0">export</span><span style="color:#E6E6E6"> </span><span style="color:#569CD6">type</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">T</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">=</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Customize or pass data to pass to the component  */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">options</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Try to center it using margin auto */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">center</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Header tag */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">data</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">&quot;h1&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">|</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">&quot;h2&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">|</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">&quot;h3&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">|</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">&quot;h4&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">|</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">&quot;h5&quot;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Component&#039;s child */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">children</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Children</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">} </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Events</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;h1&quot;</span><span style="color:#E6E6E6">&gt; </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Attrs</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;h1&quot;</span><span style="color:#E6E6E6">&gt;;</span></span>
</code></pre>
</div>
