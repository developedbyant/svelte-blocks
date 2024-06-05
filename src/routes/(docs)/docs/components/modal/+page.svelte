<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Modal",description:"Dialog box that appears on top of the main content, used for alerts, confirmations, or additional information.",
        url:"https://kitdocs.dev/docs/components/modal",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Modal from "sb/modal";
    let open = false;
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
<p data-md="p">Dialog box that appears on top of the main content, used for alerts, confirmations, or additional information.</p>
<div data-md="space"></div>
<Modal bind:open>
    <div class="flex">
        <button onclick={()=>open=!open}>
            {open?"Close":"Open"} modal
        </button>
    </div>
</Modal>
<div class="flex">
    <button onclick={()=>open=!open}>
        {open?"Close":"Open"} modal
    </button>
</div>


<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Modal</span><span style="color:#D4D4D4"> </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/modal&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">let</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">open</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">false</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Modal</span><span style="color:#E6E6E6"> </span><span style="color:#C586C0">bind</span><span style="color:#E6E6E6">:</span><span style="color:#9CDCFE">open</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">class</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;flex&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#808080">&lt;</span><span style="color:#569CD6">button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">onclick</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">()</span><span style="color:#569CD6">=&gt;</span><span style="color:#9CDCFE">open</span><span style="color:#D4D4D4">=!</span><span style="color:#9CDCFE">open</span><span style="color:#569CD6">}</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">            </span><span style="color:#569CD6">&#123;</span><span style="color:#9CDCFE">open</span><span style="color:#D4D4D4">?</span><span style="color:#CE9178">&quot;Close&quot;</span><span style="color:#D4D4D4">:</span><span style="color:#CE9178">&quot;Open&quot;</span><span style="color:#569CD6">}</span><span style="color:#E6E6E6"> modal</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Modal</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">class</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;flex&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#569CD6">button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">onclick</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">()</span><span style="color:#569CD6">=&gt;</span><span style="color:#9CDCFE">open</span><span style="color:#D4D4D4">=!</span><span style="color:#9CDCFE">open</span><span style="color:#569CD6">}</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#569CD6">&#123;</span><span style="color:#9CDCFE">open</span><span style="color:#D4D4D4">?</span><span style="color:#CE9178">&quot;Close&quot;</span><span style="color:#D4D4D4">:</span><span style="color:#CE9178">&quot;Open&quot;</span><span style="color:#569CD6">}</span><span style="color:#E6E6E6"> modal</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
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
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Max width for model&#039;s content */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">maxWidth</span><span style="color:#D4D4D4">?:</span><span style="color:#CE9178">`</span><span style="color:#569CD6">$&#123;</span><span style="color:#4EC9B0">string</span><span style="color:#569CD6">}</span><span style="color:#CE9178">px`</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Max height for model&#039;s content */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">maxHeight</span><span style="color:#D4D4D4">?:</span><span style="color:#CE9178">`</span><span style="color:#569CD6">$&#123;</span><span style="color:#4EC9B0">string</span><span style="color:#569CD6">}</span><span style="color:#CE9178">px`</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Make model&#039;s content take full height */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">full</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">bg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change or add border color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">border</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">children</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">Children</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** indicate if model if open or not, it can be bind */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">open</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
</code></pre>
</div>
