<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Toggle",description:"Switch-like component that allows users to toggle a setting or option on or off.",
        url:"https://kitdocs.dev/docs/components/toggle",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Toggle,{ type T} from "sb/toggle";
    let isOpen:T['value'] = false
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

<h1 data-section data-md="header" id="toggle">
    Toggle
</h1>
<p data-md="p">Switch-like component that allows users to toggle a setting or option on or off.</p>
<div data-md="space"></div>
<div class="flex">
    <Toggle bind:value={isOpen}/>
</div>


<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Toggle</span><span style="color:#D4D4D4">,&#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4">} </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/toggle&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">let</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">isOpen</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;value&#039;</span><span style="color:#D4D4D4">] = </span><span style="color:#569CD6">false</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">class</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;flex&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Toggle</span><span style="color:#E6E6E6"> </span><span style="color:#C586C0">bind</span><span style="color:#E6E6E6">:</span><span style="color:#4EC9B0">value</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#9CDCFE">isOpen</span><span style="color:#569CD6">}</span><span style="color:#808080">/&gt;</span></span>
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
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Customize or pass data to pass to the component  */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">options</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Make element rounded */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">rounded</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** toggle size */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">size</span><span style="color:#D4D4D4">?:</span><span style="color:#CE9178">`</span><span style="color:#569CD6">$&#123;</span><span style="color:#4EC9B0">string</span><span style="color:#569CD6">}</span><span style="color:#CE9178">px`</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">|</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">`var(--</span><span style="color:#569CD6">$&#123;</span><span style="color:#4EC9B0">string</span><span style="color:#569CD6">}</span><span style="color:#CE9178">)`</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Current bindable value */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">} </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Events</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#E6E6E6">&gt; </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Omit</span><span style="color:#E6E6E6">&lt;</span><span style="color:#4EC9B0">Attrs</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#E6E6E6">&gt;,</span><span style="color:#CE9178">&quot;value&quot;</span><span style="color:#E6E6E6">&gt;</span></span>
</code></pre>
</div>
