<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Styling",description:"Everything you need to know about svelte blocks.",
        url:"https://kitdocs.dev/docs/styling",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });    /** Copy text to clipboard (Added by kitdocs) */
    async function copyText(e:MouseEvent){
        const copyButton = e.target as HTMLButtonElement
        const code = copyButton.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        copyButton.innerText = "Copied"
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>{ copyButton.innerText = "Copy" },1000)
    }
</script>

<h1 data-section data-md="header" id="styling">
    Styling
</h1>
<p data-md="p">We use <code data-md="inline-code">sb</code> styling variables, so</p>
<div data-md="space"></div>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#C586C0">@import</span><span style="color:#E6E6E6"> </span><span style="color:#DCDCAA">url</span><span style="color:#E6E6E6">(</span><span style="color:#CE9178">&#039;https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap&#039;</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#569CD6">*</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">margin</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">padding</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">box-sizing</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">border-box</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-family</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">&#039;Inter&#039;</span><span style="color:#E6E6E6">, </span><span style="color:#CE9178">sans-serif</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"><span style="color:#D7BA7D">.app</span><span style="color:#E6E6E6">&#123; </span><span style="color:#9CDCFE">scroll-behavior</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">smooth</span><span style="color:#E6E6E6">; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D">:root</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* added by user */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-nav-height</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">60px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-max-width</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">1400px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* size */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-gap</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">15px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-radius</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* to get y padding 10×1.5 = 15px */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-padding</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* app */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-background</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#FBFBFB</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-foreground</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#F4F4F5</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-blur-bg</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">rgba</span><span style="color:#E6E6E6">(</span><span style="color:#B5CEA8">255</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">255</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">255</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">50%</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-header-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#434343</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-text-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#717084</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-border-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#eeeeee</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-icon-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#838383</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-icon-color-2</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#adadad</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-shadow</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">rgba</span><span style="color:#E6E6E6">(</span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">5%</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-main-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#57C4DC</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-second-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#2f90a5</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-third-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#9c67f5</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-error-bg</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#f18176</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-error-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#fff</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-ok-bg</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#5ecc86</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-ok-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#fff</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-focus-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#c1c1c1</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* button */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-button-bg</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#57C4DC</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-button-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#fff</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D">.dark</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* app */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-background</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">linear-gradient</span><span style="color:#E6E6E6">(</span><span style="color:#B5CEA8">112.1deg</span><span style="color:#E6E6E6">, </span><span style="color:#DCDCAA">rgb</span><span style="color:#E6E6E6">(</span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">) </span><span style="color:#B5CEA8">11.4%</span><span style="color:#E6E6E6">, </span><span style="color:#DCDCAA">rgb</span><span style="color:#E6E6E6">(</span><span style="color:#B5CEA8">9</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">19</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">21</span><span style="color:#E6E6E6">) </span><span style="color:#B5CEA8">70.2%</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-foreground</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#27272A</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-blur-bg</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">rgba</span><span style="color:#E6E6E6">(</span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">50%</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-header-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#e9e9e9</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-text-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#a4a6a9</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-text-focus-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#6b728079</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-border-color</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">rgb</span><span style="color:#E6E6E6">(</span><span style="color:#B5CEA8">46</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">48</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">53</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-second-border-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#3a72a31c</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-icon-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#aeaeae</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-shadow</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">rgba</span><span style="color:#E6E6E6">(</span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">, </span><span style="color:#B5CEA8">5%</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">--sb-focus-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#434445</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7BA7D">.flex</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">display</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">flex</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">align-items</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">center</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">justify-content</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">center</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">gap</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">background</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-background</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">padding</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">calc</span><span style="color:#E6E6E6">(</span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-padding</span><span style="color:#E6E6E6">) </span><span style="color:#D4D4D4">+</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">border-radius</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-radius</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">box-shadow</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">1px</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">2px</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">3px</span><span style="color:#E6E6E6"> </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-shadow</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">border</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">2px</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">solid</span><span style="color:#E6E6E6"> </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-border-color</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"><span style="color:#D7BA7D">.col</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">flex-direction</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">column</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* headers */</span></span>
<span class="line"><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;header&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">color</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-header-color</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">margin-bottom</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"><span style="color:#D7BA7D">h1</span><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;header&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">35px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">900</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"><span style="color:#D7BA7D">h2</span><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;header&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">25px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">800</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"><span style="color:#D7BA7D">h3</span><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;header&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">400</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"><span style="color:#D7BA7D">h4</span><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;header&quot;</span><span style="color:#E6E6E6">],</span><span style="color:#D7BA7D">h5</span><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;header&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">400</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* paragraph */</span></span>
<span class="line"><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;p&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">15px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">400</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">color</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-text-color</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">gap</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">margin</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">0</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">line-height</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* anchor (link) */</span></span>
<span class="line"><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;a&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">text-decoration</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">none</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">15px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">600</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">color</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-main-color</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* space */</span></span>
<span class="line"><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;space&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">margin-bottom</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* list */</span></span>
<span class="line"><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;list&quot;</span><span style="color:#E6E6E6">],[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;list-ordered&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">margin-left</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">display</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">flex</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">flex-direction</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">column</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">gap</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    &amp; li&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">16px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">400</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-text-color</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* inline code */</span></span>
<span class="line"><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;inline-code&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">display</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">inline-flex</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">align-items</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">center</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">width</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">fit-content</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">gap</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">background-color</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-foreground</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">color</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-text-color</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">13px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">400</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">padding</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">3px</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">6px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">border-radius</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* code */</span></span>
<span class="line"><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;code&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">position</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">relative</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">margin</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">0px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">border-radius</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">padding</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">0px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">background</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--shiki-background</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">14px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">300</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    &amp; button&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">all</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">unset</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">cursor</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">pointer</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">background-color</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--shiki-button-bg</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--shiki-button-color</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">padding</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">8px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">border-radius</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">4px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">position</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">absolute</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">top</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">right</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">5px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">display</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">flex</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">align-items</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">center</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">justify-content</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">center</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    &amp; </span><span style="color:#D7BA7D">code</span><span style="color:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">flex</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">1</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">display</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">flex</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">flex-direction</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">column</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    &amp; </span><span style="color:#D7BA7D">.line</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">padding</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">1px</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">margin</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">2px</span><span style="color:#E6E6E6"> </span><span style="color:#B5CEA8">0px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    &amp; </span><span style="color:#D7BA7D">.line.added</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">background-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#4d8aac40</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">margin</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">0px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    &amp; </span><span style="color:#D7BA7D">.line.removed</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">background-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#917a7a52</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">margin</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">0px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* warning */</span></span>
<span class="line"><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;warning&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">padding</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">border-radius</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">16px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">font-weight</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">300</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">border</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">1.5px</span><span style="color:#E6E6E6"> </span><span style="color:#CE9178">solid</span><span style="color:#E6E6E6"> </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-border-color</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">white</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">background-color</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">#be7575</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">display</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">flex</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">align-items</span><span style="color:#E6E6E6">: </span><span style="color:#CE9178">center</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">gap</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">10px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    &amp; svg&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">min-width</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">min-height</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">width</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">height</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">fill</span><span style="color:#E6E6E6">: </span><span style="color:#DCDCAA">var</span><span style="color:#E6E6E6">(</span><span style="color:#9CDCFE">--sb-error-bg</span><span style="color:#E6E6E6">);</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* mobile =========================================== */</span></span>
<span class="line"><span style="color:#C586C0">@media</span><span style="color:#E6E6E6"> (</span><span style="color:#9CDCFE">max-width</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">768px</span><span style="color:#E6E6E6">) &#123;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* paragraph */</span></span>
<span class="line"><span style="color:#E6E6E6">    [</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;p&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">13px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* headers */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#D7BA7D">h1</span><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;header&quot;</span><span style="color:#E6E6E6">]&#123; </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">30px</span><span style="color:#E6E6E6">; }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#D7BA7D">h2</span><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;header&quot;</span><span style="color:#E6E6E6">]&#123; </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">25px</span><span style="color:#E6E6E6">; }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#D7BA7D">h3</span><span style="color:#E6E6E6">[</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;header&quot;</span><span style="color:#E6E6E6">]&#123; </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">20px</span><span style="color:#E6E6E6">; }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* anchor (link) */</span></span>
<span class="line"><span style="color:#E6E6E6">    [</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;a&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">13px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/* warning */</span></span>
<span class="line"><span style="color:#E6E6E6">    [</span><span style="color:#9CDCFE">data-md</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;warning&quot;</span><span style="color:#E6E6E6">]&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">font-size</span><span style="color:#E6E6E6">: </span><span style="color:#B5CEA8">13px</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
</code></pre>
</div>
