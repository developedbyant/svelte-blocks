<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Tabs",description:"Component that organizes content into multiple panels, allowing users to navigate between them.",
        url:"https://kitdocs.dev/docs/components/tabs",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Tabs,{ type T } from "sb/tabs";
    const initData:T['initData'] = [
        { id:"tweets",title:"Tweets" },
        { id:"media",title:"Media" },
        { id:"bookmark",title:"Bookmark" },
    ]
    let currentValue:T['value'] = initData[0]
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

<h1 data-section data-md="header" id="tabs">
    Tabs
</h1>
<p data-md="p">Component that organizes content into multiple panels, allowing users to navigate between them.</p>
<div data-md="space"></div>
<div class="flex">
    <Tabs bind:value={currentValue} {initData}/>
</div>


<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Tabs</span><span style="color:#D4D4D4">,&#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/tabs&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">const</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">initData</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;initData&#039;</span><span style="color:#D4D4D4">] = [</span></span>
<span class="line"><span style="color:#D4D4D4">        &#123; </span><span style="color:#9CDCFE">id:</span><span style="color:#CE9178">&quot;tweets&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178">&quot;Tweets&quot;</span><span style="color:#D4D4D4"> },</span></span>
<span class="line"><span style="color:#D4D4D4">        &#123; </span><span style="color:#9CDCFE">id:</span><span style="color:#CE9178">&quot;media&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178">&quot;Media&quot;</span><span style="color:#D4D4D4"> },</span></span>
<span class="line"><span style="color:#D4D4D4">        &#123; </span><span style="color:#9CDCFE">id:</span><span style="color:#CE9178">&quot;bookmark&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178">&quot;Bookmark&quot;</span><span style="color:#D4D4D4"> },</span></span>
<span class="line"><span style="color:#D4D4D4">    ]</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">let</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">currentValue</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;value&#039;</span><span style="color:#D4D4D4">] = </span><span style="color:#9CDCFE">initData</span><span style="color:#D4D4D4">[</span><span style="color:#B5CEA8">0</span><span style="color:#D4D4D4">]</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">class</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;flex&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Tabs</span><span style="color:#E6E6E6"> </span><span style="color:#C586C0">bind</span><span style="color:#E6E6E6">:</span><span style="color:#4EC9B0">value</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#9CDCFE">currentValue</span><span style="color:#569CD6">}</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">&#123;initData}</span><span style="color:#808080">/&gt;</span></span>
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
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Make element full width */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">full</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Make element rounded */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">rounded</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">bg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change active background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">activeBg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Function to run when value change */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#DCDCAA">onChange</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">current</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6">&#123;</span><span style="color:#9CDCFE">id</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">,</span><span style="color:#9CDCFE">title</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">})</span><span style="color:#569CD6">=&gt;</span><span style="color:#4EC9B0">any</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Current bindable value */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6">&#123;</span><span style="color:#9CDCFE">id</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">,</span><span style="color:#9CDCFE">title</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">}</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Initial data for component */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">initData</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6">&#123;</span><span style="color:#9CDCFE">id</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">,</span><span style="color:#9CDCFE">title</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">}[]</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
</code></pre>
</div>
