<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Typewriter",description:"Animated text component that simulates a typewriter effect, revealing text one character at a time.",
        url:"https://kitdocs.dev/docs/components/typewriter",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Typewriter,{ type T} from "sb/typewriter";
    const color:T['color'] = "var(--sb-main-color)"
    const words:T['words'] = [ "cook","run","code" ]
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

<h1 data-section data-md="header" id="typewriter">
    Typewriter
</h1>
<p data-md="p">Animated text component that simulates a typewriter effect, revealing text one character at a time.</p>
<div data-md="space"></div>
<div class="flex">
    <p>Hello there a like to <Typewriter {color} {words}>Cook</Typewriter></p>
</div>


<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Typewriter</span><span style="color:#D4D4D4">,&#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4">} </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/typewriter&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">const</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;color&#039;</span><span style="color:#D4D4D4">] = </span><span style="color:#CE9178">&quot;var(--sb-main-color)&quot;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">const</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">words</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;words&#039;</span><span style="color:#D4D4D4">] = [ </span><span style="color:#CE9178">&quot;cook&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#CE9178">&quot;run&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#CE9178">&quot;code&quot;</span><span style="color:#D4D4D4"> ]</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">class</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;flex&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Hello there a like to </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Typewriter</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">&#123;color}</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">&#123;words}</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Cook</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Typewriter</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
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
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** The initial text for component */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">children</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">Children</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** The code that the highlighted text will be */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** The words to type */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">words</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">string</span><span style="color:#E6E6E6">[]</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
</code></pre>
</div>
