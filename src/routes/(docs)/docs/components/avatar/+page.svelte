<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Avatar",description:"Visual representation of a user or entity, often displayed as an image, icon, or initials.",
        url:"https://kitdocs.dev/docs/components/avatar",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Avatar,{ type T } from "sb/avatar";
    const initData:T['initData'] = {
        src:"https://avatars.githubusercontent.com/u/1162160?v=4",
        alt:"Rich Harris"
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

<h1 data-section data-md="header" id="avatar">
    Avatar
</h1>
<p data-md="p">Visual representation of a user or entity, often displayed as an image, icon, or initials.</p>
<div data-md="space"></div>
<div class="flex">
    <Avatar {initData}/>
</div>


<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Avatar</span><span style="color:#D4D4D4">,&#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/avatar&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">const</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">initData</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;initData&#039;</span><span style="color:#D4D4D4">] = &#123;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">src:</span><span style="color:#CE9178">&quot;https://avatars.githubusercontent.com/u/1162160?v=4&quot;</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">alt:</span><span style="color:#CE9178">&quot;Rich Harris&quot;</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6"># Avatar</span></span>
<span class="line"><span style="color:#E6E6E6">Visual representation of a user or entity, often displayed as an image, icon, or initials.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">class</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;flex&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Avatar</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">&#123;initData}</span><span style="color:#808080">/&gt;</span></span>
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
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** When set to yes, we will use margin:auto */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">center</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">boolean</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** The max size the div can use */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">maxSize</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** If href was passed the button will turn into a anchor tag */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">href</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">bg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change border color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">border</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Component data: a string or an object with image and image alt */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">initData</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">|</span><span style="color:#E6E6E6"> &#123; </span><span style="color:#9CDCFE">src</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">, </span><span style="color:#9CDCFE">alt</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6"> }</span></span>
<span class="line"><span style="color:#E6E6E6">} </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Events</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;div&quot;</span><span style="color:#E6E6E6">&gt; </span><span style="color:#D4D4D4">&amp;</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Attrs</span><span style="color:#E6E6E6">&lt;</span><span style="color:#CE9178">&quot;div&quot;</span><span style="color:#E6E6E6">&gt;</span></span>
</code></pre>
</div>
