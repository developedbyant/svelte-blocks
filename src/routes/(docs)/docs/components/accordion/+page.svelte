<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Accordion",description:"A collapsible content container that toggles visibility of its content when clicked.",
        url:"https://kitdocs.dev/docs/components/accordion",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Accordion, { type T } from "sb/accordion";
    const options:T['options'] = {
        bg:"purple", color:"red",
        border:"hotpink", headerColor:"yellow"
    }
    let value:T['value'] = [
        { id:"1",title:"About us",text:"All you need to know about us."},
        { id:"2",title:"About you",text:"All you need to know about us."},
        { id:"3",title:"More",text:"All you need to know about us."},
    ]
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

<h1 data-section data-md="header" id="accordion">
    Accordion
</h1>
<p data-md="p">A collapsible content container that toggles visibility of its content when clicked.</p>
<div data-md="space"></div>
<Accordion {value}/>
<div data-md="space"></div>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Accordion</span><span style="color:#D4D4D4">, &#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/accordion&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">let</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;value&#039;</span><span style="color:#D4D4D4">] = [</span></span>
<span class="line"><span style="color:#D4D4D4">        &#123; </span><span style="color:#9CDCFE">id:</span><span style="color:#CE9178">&quot;1&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178">&quot;About us&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">text:</span><span style="color:#CE9178">&quot;All you need to know about us.&quot;</span><span style="color:#D4D4D4">},</span></span>
<span class="line"><span style="color:#D4D4D4">        &#123; </span><span style="color:#9CDCFE">id:</span><span style="color:#CE9178">&quot;2&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178">&quot;About you&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">text:</span><span style="color:#CE9178">&quot;All you need to know about us.&quot;</span><span style="color:#D4D4D4">},</span></span>
<span class="line"><span style="color:#D4D4D4">        &#123; </span><span style="color:#9CDCFE">id:</span><span style="color:#CE9178">&quot;3&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">title:</span><span style="color:#CE9178">&quot;More&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">text:</span><span style="color:#CE9178">&quot;All you need to know about us.&quot;</span><span style="color:#D4D4D4">},</span></span>
<span class="line"><span style="color:#D4D4D4">    ]</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Accordion</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">&#123;value}</span><span style="color:#808080">/&gt;</span></span>
</code></pre>
</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="component-type">
    Component type
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#C586C0">export</span><span style="color:#E6E6E6"> </span><span style="color:#569CD6">type</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">T</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">=</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Customize or pass data to pass to the component  */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">options</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change container background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">bg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change container text color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change header text color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">headerColor</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change container border color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">border</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** value/data for component */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Item id, unique */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">id</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Item title */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">title</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Item text */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">text</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }[]</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
</code></pre>
</div>
