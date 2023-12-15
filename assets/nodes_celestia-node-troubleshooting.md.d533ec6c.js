import{c as o}from"./chunks/constants.01c4bef2.js";import{o as p,c as t,k as s,a,t as n,l,Q as e}from"./chunks/framework.51d6c45b.js";const r=e(`<h1 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h1><h2 id="network-selection" tabindex="-1">Network selection <a class="header-anchor" href="#network-selection" aria-label="Permalink to &quot;Network selection&quot;">​</a></h2><p>Note: If you do not select a network, the default network will be Mainnet Beta.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Refer to <a href="#ports">the ports section of this page</a> for information on which ports are required to be open on your machine.</p></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>It is advised before switching networks to reinitialize your node via <code>init</code> command. This is due to an old config being present. Re-initialisation will reset the config.</p></div><h3 id="chain-id" tabindex="-1">Chain ID <a class="header-anchor" href="#chain-id" aria-label="Permalink to &quot;Chain ID&quot;">​</a></h3>`,7),c=s("em",null,"i.e.",-1),i=s("code",null,"--p2p.network string",-1),y=s("thead",null,[s("tr",null,[s("th",null,"Network"),s("th",null,"Chain ID"),s("th",null,[s("code",null,"--p2p.network string")])])],-1),E=s("td",null,"Mainnet Beta",-1),d=s("td",null,[a("not required ("),s("code",null,"--p2p.network celestia"),a(")")],-1),h=s("td",null,"Mocha",-1),F=s("td",null,[s("code",null,"--p2p.network mocha")],-1),u=s("td",null,"Arabica",-1),g=s("td",null,[s("code",null,"--p2p.network arabica")],-1),C=e(`<h2 id="ports" tabindex="-1">Ports <a class="header-anchor" href="#ports" aria-label="Permalink to &quot;Ports&quot;">​</a></h2><p>When interacting with a Celestia node, you may need to open ports on your machine to allow communication between nodes, such as bridge nodes. It is essential that specific ports are accessible. Make sure that your firewall allows connections to the correct ports.</p><p>If you run a node on a cloud server, make sure that the ports are open on the server&#39;s firewall. If you run a node at home, make sure that your router allows connections to the correct ports.</p><p>For example, validator ports 9090 and 26657 need to be accessible by the bridge, and port 2121 is required for P2P connections for all node types.</p><p>The following ports are used by Celestia nodes:</p><table><thead><tr><th>Port</th><th>Protocol</th><th>Address</th><th>Description</th><th>Enabled by default on node</th><th>Flag</th></tr></thead><tbody><tr><td>2121</td><td>TCP/UDP</td><td>localhost</td><td>P2P</td><td>true</td><td>N/A</td></tr><tr><td>26658</td><td>HTTP</td><td>localhost</td><td>RPC</td><td>true</td><td><code>--rpc.port string</code></td></tr><tr><td>26659</td><td>HTTP</td><td>localhost</td><td>REST Gateway</td><td>false</td><td><code>--gateway.port string</code></td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The gateway endpoints have been deprecated and will be removed in the future. If you would like to use them anyway, you can <a href="https://github.com/celestiaorg/celestia-node/pull/2360" target="_blank" rel="noreferrer">find more details on GitHub</a>.</p></div><h2 id="changing-the-location-of-your-node-store" tabindex="-1">Changing the location of your node store <a class="header-anchor" href="#changing-the-location-of-your-node-store" aria-label="Permalink to &quot;Changing the location of your node store&quot;">​</a></h2><p>In this section, we&#39;ll guide you through starting your node using a node store in a different location than you originally started with.</p><p>First, stop your node safely using <code>control + C</code>.</p><p>Then, init your node again with a new node store:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/user/celestia-</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">-location/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/user/celestia-</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">-location/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span></span></code></pre></div><p>Next, start your node:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rpc-mocha.pops.one</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--node.store</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/user/celestia-</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">-location/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rpc-mocha.pops.one</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--node.store</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/user/celestia-</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">-location/</span></span></code></pre></div><p>If you choose to change the location of your node store, you will need to execute each command on your node with the following flag:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">--node.store</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/user/celestia-</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">-location/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">--node.store</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/user/celestia-</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">-location/</span></span></code></pre></div><p>When using <code>cel-key</code>, the process is different. To show the keys you should add <code>--keyring-dir</code> like this example:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./cel-key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--node.type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">full</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--keyring-dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/user/celestia-</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">-location/keys/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./cel-key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--node.type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">full</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--keyring-dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/user/celestia-</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">-location/keys/</span></span></code></pre></div><h2 id="resetting-your-config" tabindex="-1">Resetting your config <a class="header-anchor" href="#resetting-your-config" aria-label="Permalink to &quot;Resetting your config&quot;">​</a></h2><p>If you an encounter an error, it is likely that an old config file is present:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Error:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodebuilder/share:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">interval</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">must</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">be</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">positive</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">nodebuilder/core:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">invalid</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">IP</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">addr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">given:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Error:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodebuilder/share:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">interval</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">must</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">be</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">positive</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Error:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nodebuilder/share:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">interval</span><span style="color:#24292E;"> </span><span style="color:#032F62;">must</span><span style="color:#24292E;"> </span><span style="color:#032F62;">be</span><span style="color:#24292E;"> </span><span style="color:#032F62;">positive</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">nodebuilder/core:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">invalid</span><span style="color:#24292E;"> </span><span style="color:#032F62;">IP</span><span style="color:#24292E;"> </span><span style="color:#032F62;">addr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">given:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Error:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nodebuilder/share:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">interval</span><span style="color:#24292E;"> </span><span style="color:#032F62;">must</span><span style="color:#24292E;"> </span><span style="color:#032F62;">be</span><span style="color:#24292E;"> </span><span style="color:#032F62;">positive</span></span></code></pre></div><p>You can re-initialize your node&#39;s config with the following commands:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Save your config so custom values are not lost.</p></div><p>Run the following command to update your config:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config-update</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config-update</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>This will pull in any new values from new configuration and merge them into the existing configuration.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>After using the <code>config-update</code> command, it is encouraged to double-check that your custom values are preserved.</p></div><p>Then, to start your node again:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="clearing-the-data-store" tabindex="-1">Clearing the data store <a class="header-anchor" href="#clearing-the-data-store" aria-label="Permalink to &quot;Clearing the data store&quot;">​</a></h2><p>For <strong>bridge, full, and light nodes</strong>, remove the data store with this command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">node-typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unsafe-reset-store</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">networ</span><span style="color:#E1E4E8;">k</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">node-typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unsafe-reset-store</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">networ</span><span style="color:#24292E;">k</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">light</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unsafe-reset-store</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mocha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">light</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unsafe-reset-store</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mocha</span></span></code></pre></div><h2 id="fatal-headers-given-to-the-heightsub-are-in-the-wrong-order" tabindex="-1">FATAL headers given to the heightSub are in the wrong order <a class="header-anchor" href="#fatal-headers-given-to-the-heightsub-are-in-the-wrong-order" aria-label="Permalink to &quot;FATAL headers given to the heightSub are in the wrong order&quot;">​</a></h2><p>If you observe a FATAL log line like:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">FATAL</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">header/store</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">store/heightsub.go:87</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">PLEASE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">FILE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">A</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">BUG</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">REPORT:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">headers</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">given</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">heightSub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">are</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wrong</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">order&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">FATAL</span><span style="color:#24292E;">   </span><span style="color:#032F62;">header/store</span><span style="color:#24292E;">   </span><span style="color:#032F62;">store/heightsub.go:87</span><span style="color:#24292E;">    </span><span style="color:#032F62;">PLEASE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">FILE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">A</span><span style="color:#24292E;"> </span><span style="color:#032F62;">BUG</span><span style="color:#24292E;"> </span><span style="color:#032F62;">REPORT:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">headers</span><span style="color:#24292E;"> </span><span style="color:#032F62;">given</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">heightSub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">are</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wrong</span><span style="color:#24292E;"> </span><span style="color:#032F62;">order&quot;</span></span></code></pre></div><p>then it is possible the celestia-node <code>data/</code> directory contains headers from a previous instance of the network that you are currently trying to run against. One resolution strategy is to delete the existing celestia-node config for the target network and re-initialize it:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># rm -rf ~/.celestia-&lt;node-type&gt;-&lt;network&gt;</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/.celestia-bridge-private</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># celestia &lt;node-type&gt; init --p2p.network &lt;network&gt;</span></span>
<span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--p2p.network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">private</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># rm -rf ~/.celestia-&lt;node-type&gt;-&lt;network&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/.celestia-bridge-private</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># celestia &lt;node-type&gt; init --p2p.network &lt;network&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--p2p.network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">private</span></span></code></pre></div>`,38),w=JSON.parse('{"title":"Troubleshooting","description":"A guide to troubleshooting common issues with Celestia Node.","frontmatter":{"description":"A guide to troubleshooting common issues with Celestia Node.","head":[["meta",{"name":"og:title","content":"Troubleshooting | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-node-troubleshooting.md","filePath":"nodes/celestia-node-troubleshooting.md","lastUpdated":1700056188000}'),b={name:"nodes/celestia-node-troubleshooting.md"},A=Object.assign(b,{setup(k){return(v,B)=>(p(),t("div",null,[r,s("p",null,[a("When interacting with celestia-node, it is important to take into account the different chain IDs for different networks. For Mainnet Beta, there is no need to declare a chain ID, as the default is "+n(l(o).mainnetChainId)+", ",1),c,a(" no "),i,a(" flag is required for Mainnet Beta.")]),s("table",null,[y,s("tbody",null,[s("tr",null,[E,s("td",null,n(l(o).mainnetChainId),1),d]),s("tr",null,[h,s("td",null,n(l(o).mochaChainId),1),F]),s("tr",null,[u,s("td",null,n(l(o).arabicaChainId),1),g])])]),C]))}});export{w as __pageData,A as default};
