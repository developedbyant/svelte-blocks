<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Toast",description:"A temporary notification message that appears briefly to provide feedback or information.",
        url:"https://kitdocs.dev/docs/components/toast",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Toast, { createToast ,type T } from "sb/toasts";
    import Button from "sb/button";
    const onclick = ()=>{
        createToast({ type:"successful",msg:"Welcome back tony" })
    }
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

<h1 data-section data-md="header" id="toast">
    Toast
</h1>
<p data-md="p">A temporary notification message that appears briefly to provide feedback or information.</p>
<div data-md="space"></div>
<Toast options={{ position:"br" }}/>
<Button {onclick}>Add toast</Button>
<div data-md="space"></div>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Toast</span><span style="color:#D4D4D4">, &#123; </span><span style="color:#9CDCFE">createToast</span><span style="color:#D4D4D4"> ,</span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/toasts&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#6A9955">// create/add new toast</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">const</span><span style="color:#D4D4D4"> </span><span style="color:#DCDCAA">onclick</span><span style="color:#D4D4D4"> = ()</span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4">&#123;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#DCDCAA">createToast</span><span style="color:#D4D4D4">(&#123; </span><span style="color:#9CDCFE">type:</span><span style="color:#CE9178">&quot;successful&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">msg:</span><span style="color:#CE9178">&quot;Welcome back tony&quot;</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Toast</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">options</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">&#123; </span><span style="color:#9CDCFE">position:</span><span style="color:#CE9178">&quot;br&quot;</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080">/&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">&#123;onclick}</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Add toast</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="component-type">
    Component type
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#569CD6">type</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">T</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">=</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">type</span><span style="color:#D4D4D4">:</span><span style="color:#CE9178">&quot;error&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">|</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">&quot;successful&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">|</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">&quot;neutral&quot;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">msg</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">id</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">number</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** When to remove the toast */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">removeIn</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">number</span><span style="color:#D4D4D4">|</span><span style="color:#CE9178">&quot;never&quot;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">title</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Use to add close class before removing toast */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">closedClass</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
</code></pre>
</div>
