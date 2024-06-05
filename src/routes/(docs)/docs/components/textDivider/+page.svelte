<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"TextDivider",description:"Horizontal separator element used to divide and organize content into distinct sections.",
        url:"https://kitdocs.dev/docs/components/textDivider",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import TextDivider from "sb/textDivider";
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

<h1 data-section data-md="header" id="label">
    Label
</h1>
<p data-md="p">Horizontal separator element used to divide and organize content into distinct sections.</p>
<div data-md="space"></div>
<div class="flex col">
    <p>Hello</p>
    <TextDivider>OR</TextDivider>
    <p>Hola</p>
</div>


<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">TextDivider</span><span style="color:#D4D4D4"> </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/textDivider&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">class</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;flex col&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Hello</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">TextDivider</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">OR</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">TextDivider</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Hola</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="type">
    Type
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#C586C0">export</span><span style="color:#E6E6E6"> </span><span style="color:#569CD6">type</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">T</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">=</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">children</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Children</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">} </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Events</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;div&quot;</span><span style="color:#E6E6E6">&gt; </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Attrs</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;div&quot;</span><span style="color:#E6E6E6">&gt;</span></span>
</code></pre>
</div>
