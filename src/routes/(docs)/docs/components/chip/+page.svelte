<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Chip",description:"Compact, stylized label/tag, often used to filter, categorize, or display information.",
        url:"https://kitdocs.dev/docs/components/chip",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Chip, { type T } from "sb/chip";
    const onclick = ()=> alert("Chip was clicked");
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

<h1 data-section data-md="header" id="chip">
    Chip
</h1>
<p data-md="p">Compact, stylized label/tag, often used to filter, categorize, or display information.</p>
<div data-md="space"></div>
<div class="flex">
    <Chip>Chip</Chip>
</div>


<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Chip</span><span style="color:#D4D4D4">, &#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/chip&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">const</span><span style="color:#D4D4D4"> </span><span style="color:#DCDCAA">onclick</span><span style="color:#D4D4D4"> = ()</span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> </span><span style="color:#DCDCAA">alert</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;Chip was clicked&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Chip</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Chip</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Chip</span><span style="color:#808080">&gt;</span></span>
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
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">options</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Make button rounded (radius) */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">rounded</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">boolean</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** If href was passed the button will turn into a anchor tag */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">href</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">bg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change or add border color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">border</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Component children */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">children</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Children</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">} </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Events</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#E6E6E6">&gt; </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Attrs</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#E6E6E6">&gt;;</span></span>
</code></pre>
</div>
