<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"InputChips",description:"Input field that allows users to enter and manage multiple tags or keywords as chips.",
        url:"https://kitdocs.dev/docs/components/inputChips",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import InputChips, { type T } from "sb/inputChips";
    let value:T['value'] = [ "svelte","react" ];
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

<h1 data-section data-md="header" id="input-chips">
    Input chips
</h1>
<p data-md="p">Input field that allows users to enter and manage multiple tags or keywords as chips.</p>
<div data-md="space"></div>
<div class="flex">
    <InputChips bind:value/>
</div>


<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">InputChips</span><span style="color:#D4D4D4">, &#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/inputChips&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">let</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;value&#039;</span><span style="color:#D4D4D4">] = [ </span><span style="color:#CE9178">&quot;svelte&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#CE9178">&quot;react&quot;</span><span style="color:#D4D4D4"> ];</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">InputChips</span><span style="color:#E6E6E6"> </span><span style="color:#C586C0">bind</span><span style="color:#E6E6E6">:</span><span style="color:#9CDCFE">value</span><span style="color:#808080">/&gt;</span></span>
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
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Make component rounded (radius) */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">rounded</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">bg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change focus color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">focusColor</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change border color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">border</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Current bindable value */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">[]</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Function to run when value change */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#DCDCAA">onChange</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">data</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6">&#123; </span><span style="color:#9CDCFE">newItemsList</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">[] })</span><span style="color:#569CD6">=&gt;</span><span style="color:#4EC9B0">any</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Function to run when remove item */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#DCDCAA">onRemove</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">data</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6">&#123; </span><span style="color:#9CDCFE">itemRemoved</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">,</span><span style="color:#9CDCFE">newItemsList</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">[] })</span><span style="color:#569CD6">=&gt;</span><span style="color:#4EC9B0">any</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
</code></pre>
</div>
