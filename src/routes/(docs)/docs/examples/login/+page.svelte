<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Login",description:"A login page using svelteBlocks.",
        url:"https://kitdocs.dev/docs/examples/login",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Label from "sb/label"
    import Input from "sb/input";
    import Button from "sb/button";
    import TextDivider from "sb/textDivider";
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

<h1 data-section data-md="header" id="login-page">
    Login page
</h1>
<p data-md="p">Learn how to make a login page using svelte block, step by step.</p>
<div data-md="space"></div>
<div class="page">
    <form class="content">
        <Label for="email">Email</Label>
        <Input options={{ fullWidth:true }} id="email" type="email" placeholder="Email..." required/>
        <Label for="password">Password</Label>
        <Input options={{ fullWidth:true }} id="password" type="password" placeholder="Password..." required/>
        <Button options={{ fullWidth:true }} type="submit">Login</Button>
    </form>
</div>


<h2 data-section data-md="header" id="code">
    Code
</h2>
<p data-md="p">Code for the example above.</p>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Label</span><span style="color:#D4D4D4"> </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/label&quot;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Input</span><span style="color:#D4D4D4"> </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/input&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Button</span><span style="color:#D4D4D4"> </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/button&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">TextDivider</span><span style="color:#D4D4D4"> </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/textDivider&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">class</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;page&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#569CD6">form</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">class</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;content&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Label</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">for</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;email&quot;</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Email</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Label</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Input</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">options</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">&#123; </span><span style="color:#9CDCFE">fullWidth:</span><span style="color:#569CD6">true</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">id</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;email&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">type</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;email&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">placeholder</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;Email...&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">required</span><span style="color:#808080">/&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Label</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">for</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;password&quot;</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Password</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Label</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Input</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">options</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">&#123; </span><span style="color:#9CDCFE">fullWidth:</span><span style="color:#569CD6">true</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">id</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;password&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">type</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;password&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">placeholder</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;Password...&quot;</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">required</span><span style="color:#808080">/&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Button</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">options</span><span style="color:#E6E6E6">=</span><span style="color:#569CD6">&#123;</span><span style="color:#D4D4D4">&#123; </span><span style="color:#9CDCFE">fullWidth:</span><span style="color:#569CD6">true</span><span style="color:#D4D4D4"> }</span><span style="color:#569CD6">}</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">type</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;submit&quot;</span><span style="color:#808080">&gt;</span><span style="color:#E6E6E6">Login</span><span style="color:#808080">&lt;/</span><span style="color:#4EC9B0">Button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">form</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">style</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#D7BA7D">.page</span><span style="color:#D4D4D4">&#123;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">padding</span><span style="color:#D4D4D4">: </span><span style="color:#DCDCAA">calc</span><span style="color:#D4D4D4">(</span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--sb-padding</span><span style="color:#D4D4D4">) + </span><span style="color:#B5CEA8">10px</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">background</span><span style="color:#D4D4D4">: </span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--sb-blur-bg</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">display</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">flex</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">align-items</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">center</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">justify-content</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">center</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">width</span><span style="color:#D4D4D4">: </span><span style="color:#B5CEA8">100%</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">border-radius</span><span style="color:#D4D4D4">: </span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--sb-radius</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#D7BA7D">.content</span><span style="color:#D4D4D4">&#123;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">max-width</span><span style="color:#D4D4D4">: </span><span style="color:#B5CEA8">400px</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">width</span><span style="color:#D4D4D4">: </span><span style="color:#B5CEA8">100%</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">background</span><span style="color:#D4D4D4">: </span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--sb-background</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">padding</span><span style="color:#D4D4D4">: </span><span style="color:#DCDCAA">calc</span><span style="color:#D4D4D4">(</span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--sb-padding</span><span style="color:#D4D4D4">) + </span><span style="color:#B5CEA8">10px</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">border-radius</span><span style="color:#D4D4D4">: </span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--sb-radius</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">display</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">flex</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">flex-direction</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">column</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">gap</span><span style="color:#D4D4D4">: </span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--sb-gap</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">border</span><span style="color:#D4D4D4">: </span><span style="color:#B5CEA8">1.5px</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">solid</span><span style="color:#D4D4D4"> </span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--sb-border-color</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">box-shadow</span><span style="color:#D4D4D4">: </span><span style="color:#B5CEA8">1px</span><span style="color:#D4D4D4"> </span><span style="color:#B5CEA8">2px</span><span style="color:#D4D4D4"> </span><span style="color:#B5CEA8">3px</span><span style="color:#D4D4D4"> </span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--sb-shadow</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">style</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>

<style>
    .page{
        padding: calc(var(--sb-padding) + 10px);
        background: var(--sb-blur-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: var(--sb-radius);
    }
    .content{
        max-width: 400px;
        width: 100%;
        background: var(--sb-background);
        padding: calc(var(--sb-padding) + 10px);
        border-radius: var(--sb-radius);
        display: flex;
        flex-direction: column;
        gap: var(--sb-gap);
        border: 1.5px solid var(--sb-border-color);
        box-shadow: 1px 2px 3px var(--sb-shadow);
    }
</style>