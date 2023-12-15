import{c as a}from"./chunks/constants.01c4bef2.js";import{o as t,c as l,k as s,t as e,l as o,Q as n}from"./chunks/framework.51d6c45b.js";const p=n('<h1 id="deploy-an-op-stack-devnet-to-celestia" tabindex="-1">Deploy an OP Stack devnet to Celestia <a class="header-anchor" href="#deploy-an-op-stack-devnet-to-celestia" aria-label="Permalink to &quot;Deploy an OP Stack devnet to Celestia&quot;">​</a></h1><p>In order to deploy a devnet to Celestia, you will need to have a modified version of <code>optimism-bedrock</code>. Refer to the <a href="./optimism-devnet">steps to install dependencies and the modified version of OP Stack</a> for your environment setup.</p><h2 id="pick-your-deployment-type" tabindex="-1">Pick your deployment type <a class="header-anchor" href="#pick-your-deployment-type" aria-label="Permalink to &quot;Pick your deployment type&quot;">​</a></h2><p>Using Celestia and OP stack, you have the option to either run a light node of your own or a <code>local-celestia-devnet</code>, both of which will give you a local devnet to test things out with.</p><h3 id="using-a-local-devnet" tabindex="-1">Using a local devnet <a class="header-anchor" href="#using-a-local-devnet" aria-label="Permalink to &quot;Using a local devnet&quot;">​</a></h3><p>If you&#39;d like to use the <code>local-celestia-devnet</code>, you&#39;re in luck! This is the default for the OP Stack + Celestia repository. Head to the <a href="./optimism-devnet">previous page</a> to get started.</p><h3 id="using-a-light-node" tabindex="-1">Using a light node <a class="header-anchor" href="#using-a-light-node" aria-label="Permalink to &quot;Using a light node&quot;">​</a></h3><p>This is a <strong>beta integration</strong> and we are working on resolving <a href="https://github.com/celestiaorg/optimism/issues/" target="_blank" rel="noreferrer">open issues</a>.</p><p>In order to allow your light node to post and retrieve data without errors, you will need to change <code>UseShareExchange</code> to <code>false</code> in:</p>',9),c={class:"vp-code-group vp-adaptive-theme"},i=n('<div class="tabs"><input type="radio" name="group-HTRo3" id="tab-VIjjkzt" checked="checked"><label for="tab-VIjjkzt">Mainnet Beta</label><input type="radio" name="group-HTRo3" id="tab-nS8RHVl"><label for="tab-nS8RHVl">Mocha</label><input type="radio" name="group-HTRo3" id="tab-yFQepPN"><label for="tab-yFQepPN">Arabica</label></div>',1),r={class:"blocks"},d=n('<div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$HOME/.celestia-light/config.toml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$HOME/.celestia-light/config.toml</span></span></code></pre></div>',1),h={class:"language-bash vp-adaptive-theme"},y=s("button",{title:"Copy Code",class:"copy"},null,-1),E=s("span",{class:"lang"},"bash",-1),u={class:"shiki github-dark vp-code-dark"},g={class:"line"},_={style:{color:"#E1E4E8"}},v={class:"shiki github-light vp-code-light"},f={class:"line"},b={style:{color:"#24292E"}},m={class:"language-bash vp-adaptive-theme"},k=s("button",{title:"Copy Code",class:"copy"},null,-1),C=s("span",{class:"lang"},"bash",-1),F={class:"shiki github-dark vp-code-dark"},w={class:"line"},T={style:{color:"#E1E4E8"}},S={class:"shiki github-light vp-code-light"},A={class:"line"},B={style:{color:"#24292E"}},q=n('<p>If you choose to use your own node store, the light node must be <strong>fully synced</strong> and <strong>funded</strong> for you to be able to submit and retrieve <code>PayForBlobs</code> to a Celestia network.</p><p>If it is not synced, you will run into <a href="https://github.com/celestiaorg/celestia-node/issues/2151/" target="_blank" rel="noreferrer">errors similar to this</a>.</p><p>Visit the <a href="./../nodes/arabica-devnet">Arabica</a> or <a href="./../nodes/mocha-testnet">Mocha</a> pages to to visit their faucets.</p><p>In order to mount existing data, you must have a node store that is in this directory:</p>',4),D={class:"vp-code-group vp-adaptive-theme"},P=n('<div class="tabs"><input type="radio" name="group-baxnz" id="tab-JaCa5rJ" checked="checked"><label for="tab-JaCa5rJ">Mainnet Beta</label><input type="radio" name="group-baxnz" id="tab-E5i3Ugk"><label for="tab-E5i3Ugk">Mocha</label><input type="radio" name="group-baxnz" id="tab-ACzRvZr"><label for="tab-ACzRvZr">Arabica</label></div>',1),O={class:"blocks"},I=n('<div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$HOME/.celestia-light</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$HOME/.celestia-light</span></span></code></pre></div>',1),x={class:"language-bash vp-adaptive-theme"},R=s("button",{title:"Copy Code",class:"copy"},null,-1),M=s("span",{class:"lang"},"bash",-1),H={class:"shiki github-dark vp-code-dark"},V={class:"line"},N={style:{color:"#E1E4E8"}},$={class:"shiki github-light vp-code-light"},U={class:"line"},L={style:{color:"#24292E"}},z={class:"language-bash vp-adaptive-theme"},j=s("button",{title:"Copy Code",class:"copy"},null,-1),J=s("span",{class:"lang"},"bash",-1),Q={class:"shiki github-dark vp-code-dark"},W={class:"line"},Y={style:{color:"#E1E4E8"}},K={class:"shiki github-light vp-code-light"},X={class:"line"},Z={style:{color:"#24292E"}},G=n(`<p>This is the default location of the node store when you initialize and run a new Celestia node.</p><p>By default, the node will run with the account named <code>my_celes_key</code>.</p><p>If you have your own setup you&#39;d like to try, you can always edit <code>optimism/ops-bedrock/docker-compose.yml</code> to work with your setup.</p><h3 id="using-a-raas-provider" tabindex="-1">Using a RaaS provider <a class="header-anchor" href="#using-a-raas-provider" aria-label="Permalink to &quot;Using a RaaS provider&quot;">​</a></h3><p>If you&#39;d like to use a Rollups as a Service (RaaS) provider, you can do so by going to the RaaS category in the menu.</p><h2 id="build-the-devnet" tabindex="-1">Build the devnet <a class="header-anchor" href="#build-the-devnet" aria-label="Permalink to &quot;Build the devnet&quot;">​</a></h2><p>Build TypeScript definitions for TS dependencies:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">optimism</span></span>
<span class="line"><span style="color:#B392F0;">make</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">optimism</span></span>
<span class="line"><span style="color:#6F42C1;">make</span></span></code></pre></div><p>Set environment variables to start network:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> SEQUENCER_BATCH_INBOX_ADDRESS</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0xff00000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> L2OO_ADDRESS</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0x70997970C51812dc3A010C7d01b50e0d17dc79C8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> SEQUENCER_BATCH_INBOX_ADDRESS</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0xff00000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> L2OO_ADDRESS</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0x70997970C51812dc3A010C7d01b50e0d17dc79C8</span></span></code></pre></div><h2 id="start-the-devnet" tabindex="-1">Start the devnet <a class="header-anchor" href="#start-the-devnet" aria-label="Permalink to &quot;Start the devnet&quot;">​</a></h2><p>First, make sure your light node is synced and funded. It must not be running for this example to work.</p><p>This example is for Mainnet Beta. You can modify the <code>da:</code> section of your <code>$HOME/optimism/ops-bedrock/docker-compose.yml</code> for your specific use, similarly to the example below:</p><p>This setup will use <code>celestia-da</code>, which is <code>celestia-node</code> with a DA server on port 26650.</p><p>For the <code>P2P_NETWORK</code> variable, you&#39;ll need to supply the network of choice, either <code>celestia</code>, <code>mocha</code>, or <code>arabica</code>. Using <code>celestia</code>, the volume path will be just <code>.celestia-light</code> instead of <code>.celestia-light-&lt;network&gt;</code>. You will also need to provide a core.ip RPC URL for the network you are using.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#85E89D;">da</span><span style="color:#E1E4E8;">:</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ghcr.io/rollkit/local-celestia-devnet:v0.12.1</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ghcr.io/rollkit/celestia-da:v0.12.1-rc0</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">&gt;</span><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line diff add"><span style="color:#9ECBFF;">    celestia-da light start </span></span>
<span class="line diff add"><span style="color:#9ECBFF;">    --p2p.network=&lt;network&gt; </span></span>
<span class="line diff add"><span style="color:#9ECBFF;">    --da.grpc.namespace=000008e5f679bf7116cb </span></span>
<span class="line diff add"><span style="color:#9ECBFF;">    --da.grpc.listen=0.0.0.0:26650 </span></span>
<span class="line diff add"><span style="color:#9ECBFF;">    --core.ip &lt;rpc-url&gt; </span></span>
<span class="line diff add"><span style="color:#9ECBFF;">    --gateway </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">: </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">NODE_TYPE=light</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">P2P_NETWORK=&lt;network&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;26650:26650&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;26658:26658&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;26659:26659&quot;</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">: </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">$HOME/.celestia-light-&lt;network&gt;/:/home/celestia/.celestia-light-&lt;network&gt;/</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">healthcheck</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">test</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;CMD&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;curl&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-f&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;http://localhost:26659/header/1&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">interval</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">10s</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">timeout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">5s</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">retries</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">start_period</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">30s</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#22863A;">da</span><span style="color:#24292E;">:</span></span>
<span class="line diff remove"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ghcr.io/rollkit/local-celestia-devnet:v0.12.1</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ghcr.io/rollkit/celestia-da:v0.12.1-rc0</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#24292E;">  </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">&gt;</span><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line diff add"><span style="color:#032F62;">    celestia-da light start </span></span>
<span class="line diff add"><span style="color:#032F62;">    --p2p.network=&lt;network&gt; </span></span>
<span class="line diff add"><span style="color:#032F62;">    --da.grpc.namespace=000008e5f679bf7116cb </span></span>
<span class="line diff add"><span style="color:#032F62;">    --da.grpc.listen=0.0.0.0:26650 </span></span>
<span class="line diff add"><span style="color:#032F62;">    --core.ip &lt;rpc-url&gt; </span></span>
<span class="line diff add"><span style="color:#032F62;">    --gateway </span></span>
<span class="line diff add"><span style="color:#24292E;">  </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">: </span></span>
<span class="line diff add"><span style="color:#24292E;">      - </span><span style="color:#032F62;">NODE_TYPE=light</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#24292E;">      - </span><span style="color:#032F62;">P2P_NETWORK=&lt;network&gt;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;26650:26650&quot;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;26658:26658&quot;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;26659:26659&quot;</span></span>
<span class="line diff add"><span style="color:#24292E;">  </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">: </span></span>
<span class="line diff add"><span style="color:#24292E;">    - </span><span style="color:#032F62;">$HOME/.celestia-light-&lt;network&gt;/:/home/celestia/.celestia-light-&lt;network&gt;/</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">healthcheck</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">test</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;CMD&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;curl&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-f&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;http://localhost:26659/header/1&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">interval</span><span style="color:#24292E;">: </span><span style="color:#032F62;">10s</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">timeout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">5s</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">retries</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">start_period</span><span style="color:#24292E;">: </span><span style="color:#032F62;">30s</span></span></code></pre></div><p>Now start the devnet:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">devnet-up</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">devnet-up</span></span></code></pre></div><h2 id="view-the-logs-of-the-devnet" tabindex="-1">View the logs of the devnet <a class="header-anchor" href="#view-the-logs-of-the-devnet" aria-label="Permalink to &quot;View the logs of the devnet&quot;">​</a></h2><p>If you&#39;d like to view the logs of the devnet, run the following command from the root of the Optimism directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">devnet-logs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">devnet-logs</span></span></code></pre></div><h2 id="stop-the-devnet" tabindex="-1">Stop the devnet <a class="header-anchor" href="#stop-the-devnet" aria-label="Permalink to &quot;Stop the devnet&quot;">​</a></h2><p>To safely stop the devnet, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">devnet-down</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">devnet-down</span></span></code></pre></div><h2 id="clean-the-devnet" tabindex="-1">Clean the devnet <a class="header-anchor" href="#clean-the-devnet" aria-label="Permalink to &quot;Clean the devnet&quot;">​</a></h2><p>To remove all data from the devnet, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">devnet-clean</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">devnet-clean</span></span></code></pre></div><h2 id="deploying-to-an-l1-or-l2" tabindex="-1">Deploying to an L1 (or L2) <a class="header-anchor" href="#deploying-to-an-l1-or-l2" aria-label="Permalink to &quot;Deploying to an L1 (or L2)&quot;">​</a></h2><p>If you&#39;d like to deploy to an EVM L1 or L2, reference the <a href="https://community.optimism.io/docs/developers/bedrock/node-operator-guide/" target="_blank" rel="noreferrer">OP stack deployment guide</a>.</p>`,29),ls=JSON.parse('{"title":"Deploy an OP Stack devnet to Celestia","description":"Start your own devnet with a modified version of optimism-bedrock.","frontmatter":{"description":"Start your own devnet with a modified version of optimism-bedrock.","next":{"text":"Wallet with celestia-app","link":"/developers/celestia-app-wallet"},"head":[["meta",{"name":"og:title","content":"Deploy an OP Stack devnet to Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/optimism.md","filePath":"developers/optimism.md","lastUpdated":1702650194000}'),ss={name:"developers/optimism.md"},ps=Object.assign(ss,{setup(as){return(es,os)=>(t(),l("div",null,[p,s("div",c,[i,s("div",r,[d,s("div",h,[y,E,s("pre",u,[s("code",null,[s("span",g,[s("span",_,"$HOME/.celestia-light-"+e(o(a).mochaChainId)+"/config.toml",1)])])]),s("pre",v,[s("code",null,[s("span",f,[s("span",b,"$HOME/.celestia-light-"+e(o(a).mochaChainId)+"/config.toml",1)])])])]),s("div",m,[k,C,s("pre",F,[s("code",null,[s("span",w,[s("span",T,"$HOME/.celestia-light-"+e(o(a).arabicaChainId)+"/config.toml",1)])])]),s("pre",S,[s("code",null,[s("span",A,[s("span",B,"$HOME/.celestia-light-"+e(o(a).arabicaChainId)+"/config.toml",1)])])])])])]),q,s("div",D,[P,s("div",O,[I,s("div",x,[R,M,s("pre",H,[s("code",null,[s("span",V,[s("span",N,"$HOME/.celestia-light-"+e(o(a).mochaChainId),1)])])]),s("pre",$,[s("code",null,[s("span",U,[s("span",L,"$HOME/.celestia-light-"+e(o(a).mochaChainId),1)])])])]),s("div",z,[j,J,s("pre",Q,[s("code",null,[s("span",W,[s("span",Y,"$HOME/.celestia-light-"+e(o(a).arabicaChainId),1)])])]),s("pre",K,[s("code",null,[s("span",X,[s("span",Z,"$HOME/.celestia-light-"+e(o(a).arabicaChainId),1)])])])])])]),G]))}});export{ls as __pageData,ps as default};
