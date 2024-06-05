<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Button",description:"A clickable element that triggers an action when pressed.",
        url:"https://kitdocs.dev/docs/components/button",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Button, { type T } from "sb/button";
    const onclick = ()=> alert("Button was clicked");
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
<p data-md="p">A clickable element that triggers an action when pressed.</p>
<div data-md="space"></div>
<div class="flex">
    <Button>Button</Button>
</div>


<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Button</span><span style="color:#D4D4D4">, &#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/button&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Button</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Button</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Button</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="type">
    Type
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#569CD6">type</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">T</span><span style="color:#E6E6E6"> </span><span style="color:#D4D4D4">=</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Customize or pass data to pass to the component  */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">options</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Add icon */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">icon</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">any</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** If href was passed the button will turn into a anchor tag */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">href</span><span style="color:#D4D4D4">?:</span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Set loading spinner, also disable button */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">loading</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">boolean</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Make button rounded (radius) */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">rounded</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">boolean</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Make button take full with */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">full</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">boolean</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Run icon mode */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">iconMode</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">boolean</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">bg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change or add border color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">border</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Component children */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">children</span><span style="color:#D4D4D4">:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">Children</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
</code></pre>
</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="style">
    Style
</h2>
<p data-md="p">You can Change the way the default button looks like, by passing props <code data-md="inline-code">options</code>.</p>
<ul data-md="list">
    <li>bg: button's background</li>
    <li>color: button's color</li>
    <li>border: button's border color</li>
</ul>
<div data-md="space"></div>
<h2 data-section data-md="header" id="outline">
    Outline
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">options</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">&#123;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#9CDCFE">bg:</span><span style="color:#CE9178">&quot;transparent&quot;</span><span style="color:#D4D4D4">,</span><span style="color:#9CDCFE">color:</span><span style="color:#CE9178">&quot;var(--sb-main-color)&quot;</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#9CDCFE">border:</span><span style="color:#CE9178">&quot;var(--sb-main-color)&quot;</span><span style="color:#D4D4D4">}</span><span style="color:#569CD6">}</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    Button</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Button</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<Button options={{
    bg:"transparent",color:"var(--sb-main-color)",
    border:"var(--sb-main-color)"}}>
    Button
</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="loading">
    Loading
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">options</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">&#123; </span><span style="color:#9CDCFE">loading:</span><span style="color:#569CD6">true</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Loading</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Button</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<Button options={{ loading:true }}>Loading</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="full-width">
    Full width
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">options</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">&#123; </span><span style="color:#9CDCFE">full:</span><span style="color:#569CD6">true</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Full</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Button</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<Button options={{ full:true }}>Full</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="rounded">
    Rounded
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">options</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">&#123; </span><span style="color:#9CDCFE">rounded:</span><span style="color:#569CD6">true</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Rounded</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Button</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<Button options={{ rounded:true }}>Rounded</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="anchor-tag">
    Anchor tag
</h2>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">options</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">&#123; </span><span style="color:#9CDCFE">href:</span><span style="color:#CE9178">&quot;/docs&quot;</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Docs</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Button</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
</code></pre>
</div>
<Button options={{ href:"/docs" }}>Docs</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="events">
    Events
</h2>
<p data-md="p">This component takes any event that can be passed to html button element, example <code data-md="inline-code">onclick</code> and more.</p>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">const</span><span style="color:#D4D4D4"> </span><span style="color:#DCDCAA">onclick</span><span style="color:#D4D4D4"> = ()</span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> </span><span style="color:#DCDCAA">alert</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;Button was clicked&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">&#123;onclick}</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Event</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Button</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<Button {onclick}>Event</Button>
