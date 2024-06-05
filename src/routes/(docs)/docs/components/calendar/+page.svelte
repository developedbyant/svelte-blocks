<script lang="ts">
    import { metaTagsStore } from "kitdocs";
    metaTagsStore.set({ 
        appName:"KitDocs",title:"Calendar",description:"A interactive date picker that displays a monthly view and allows selecting a date.",
        url:"https://kitdocs.dev/docs/components/calendar",image:"https://kitdocs.dev/images/backdrop.png",ogType:"article" 
    });
    import Calendar, { type T } from "sb/calendar";
    /** Current value */
    let value:T['value'];
    /** Component options */
    const options:T['options'] = {
        bg:"purple", color:"green", border:"hotpink",
        onSelectedBg:"yellow", onSelectedColor:"blue"
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

<h1 data-section data-md="header" id="toast">
    Toast
</h1>
<p data-md="p">A interactive date picker that displays a monthly view and allows selecting a date.</p>
<div class="flex">
    <Calendar bind:value/>
</div>


<h2 data-section data-md="header" id="usage">
    Usage
</h2>
<p data-md="p">To use component, import it and it's type from <code data-md="inline-code">sb/calendar</code> and add component to any svelte file.</p>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Calendar</span><span style="color:#D4D4D4">, &#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/calendar&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">let</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;value&#039;</span><span style="color:#D4D4D4">];</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Calendar</span><span style="color:#E6E6E6"> </span><span style="color:#C586C0">bind</span><span style="color:#E6E6E6">:</span><span style="color:#9CDCFE">value</span><span style="color:#808080">/&gt;</span></span>
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
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Make container take full with */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">fullWidth</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">boolean</span><span style="color:#E6E6E6">;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change container background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">bg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change container text color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">color</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change header text color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">headerColor</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change container border color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">border</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change selected day background */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">onSelectedBg</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#6A9955">/** Change selected day color */</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">onSelectedColor</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6"> </span><span style="color:#4EC9B0">string</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#6A9955">/** Current value, it can be bind */</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">?:</span><span style="color:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">day</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">number</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">year</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">number</span></span>
<span class="line"><span style="color:#E6E6E6">        </span><span style="color:#9CDCFE">month</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">number</span></span>
<span class="line"><span style="color:#E6E6E6">    }</span></span>
<span class="line"><span style="color:#E6E6E6">}</span></span>
</code></pre>
</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="binding-value">
    Binding value
</h2>
<p data-md="p">To bind the current value of the component, use the <code data-md="inline-code">value</code> prop.</p>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Calendar</span><span style="color:#D4D4D4">, &#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/calendar&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#6A9955">/** Current value */</span></span>
<span class="line"><span style="color:#D4D4D4">    &lt;</span><span style="color:#4EC9B0">addS</span><span style="color:#D4D4D4">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">let</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;value&#039;</span><span style="color:#D4D4D4">];</span></span>
<span class="line"><span style="color:#D4D4D4">    &lt;</span><span style="color:#4EC9B0">addE</span><span style="color:#D4D4D4">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#6A9955">/** Component options */</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">const</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">options</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;options&#039;</span><span style="color:#D4D4D4">] = &#123;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">bg:</span><span style="color:#CE9178">&quot;purple&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">color:</span><span style="color:#CE9178">&quot;green&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">border:</span><span style="color:#CE9178">&quot;hotpink&quot;</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">onSelectedBg:</span><span style="color:#CE9178">&quot;yellow&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">onSelectedColor:</span><span style="color:#CE9178">&quot;blue&quot;</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">addS</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6">    </span><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Calendar</span><span style="color:#E6E6E6"> </span><span style="color:#C586C0">bind</span><span style="color:#E6E6E6">:</span><span style="color:#9CDCFE">value</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">&#123;options}</span><span style="color:#808080">/&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">addE</span><span style="color:#808080">&gt;</span></span>
</code></pre>
</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="change-style">
    Change style
</h2>
<p data-md="p">You can Change the way the default button looks like, by passing props <code data-md="inline-code">options</code>.</p>
<div data-md="code">
    <button onclick={copyText}>Copy</button>
    <pre style="background-color:#222222;color:#E6E6E6"><code style="display: flex;flex-direction:column;overflow-x: auto;"><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">lang</span><span style="color:#E6E6E6">=</span><span style="color:#CE9178">&quot;ts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">Calendar</span><span style="color:#D4D4D4">, &#123; </span><span style="color:#C586C0">type</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">T</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#D4D4D4"> </span><span style="color:#CE9178">&quot;sb/calendar&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#6A9955">/** Current value */</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">let</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">value</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;value&#039;</span><span style="color:#D4D4D4">];</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#6A9955">/** Component options */</span></span>
<span class="line"><span style="color:#D4D4D4">    </span><span style="color:#569CD6">const</span><span style="color:#D4D4D4"> </span><span style="color:#9CDCFE">options</span><span style="color:#D4D4D4">:</span><span style="color:#4EC9B0">T</span><span style="color:#D4D4D4">[</span><span style="color:#CE9178">&#039;options&#039;</span><span style="color:#D4D4D4">] = &#123;</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">bg:</span><span style="color:#CE9178">&quot;purple&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">color:</span><span style="color:#CE9178">&quot;green&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">border:</span><span style="color:#CE9178">&quot;hotpink&quot;</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#D4D4D4">        </span><span style="color:#9CDCFE">onSelectedBg:</span><span style="color:#CE9178">&quot;yellow&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">onSelectedColor:</span><span style="color:#CE9178">&quot;blue&quot;</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#4EC9B0">Calendar</span><span style="color:#E6E6E6"> </span><span style="color:#C586C0">bind</span><span style="color:#E6E6E6">:</span><span style="color:#9CDCFE">value</span><span style="color:#E6E6E6"> </span><span style="color:#9CDCFE">&#123;options}</span><span style="color:#808080">/&gt;</span></span>
</code></pre>
</div>
<div data-md="space"></div>
<Calendar bind:value {options}/>
