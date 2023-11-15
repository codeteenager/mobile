import{_ as e,o as i,c as a,Q as r}from"./chunks/framework.c994c789.js";const w=JSON.parse('{"title":"Hybrid","description":"","frontmatter":{},"headers":[],"relativePath":"guide/hybrid.md","filePath":"guide/hybrid.md","lastUpdated":1700067381000}'),d={name:"guide/hybrid.md"},t=r('<h1 id="hybrid" tabindex="-1">Hybrid <a class="header-anchor" href="#hybrid" aria-label="Permalink to &quot;Hybrid&quot;">​</a></h1><p>hybrid即<code>混合</code>，即前端和客户端的混合开发，需要前端开发人员和客户端开发人员配合完成，某些环节也可能涉及到server端，在更新和升级的时候就涉及到server端。</p><p>hybrid它的优势是可以快速迭代更新，无需app审核。app的更新需要Android或iOS AppStore应用商店审核的，国内Android像华为、oppo、小米审核较快，iOS审核较慢。所以使用原生开发想要快速上线是不可能的，但是hybrid就能解决这个问题。</p><p>其次体验也十分流畅，不仔细计较的话和NA的体验基本类似。同时也减少开发和沟通成本，双端公用一套代码，因为页面采用前端来开发，可以在Android和iOS的webview上运行。</p><h2 id="webview" tabindex="-1">webview <a class="header-anchor" href="#webview" aria-label="Permalink to &quot;webview&quot;">​</a></h2><p>webview是app中的一个组件，在app中可以有webview也可以没有，它主要用于加载H5页面，可以是远程的页面也可以使本地的页面，即一个小型的浏览器内核。</p><p>最早的实践就是通过 WebView 双端运行 Web 代码。事实上，虽然 iOS 和 Android 系统难以统一，但是它们都对 Web 技术开放，于是有的人开玩笑：“不管是 Mac、Windows、Linux、iOS、Android 还是其他平台，只要给一个浏览器，连‘月球’上它都能跑。”因此，Hybrid 方案算是最古老，但也是最成熟、应用最为广泛的技术。</p><p>Android的WebView采用的是低版本和高版本使用了不同的webkit内核，4.4后直接使用了Chrome。</p><p>iOS中UIWebView算是自IOS2就有，但性能较差，特性支持较差，WKWebView是iOS8之后的升级版，性能更强特性支持也较好。</p><p>WebView控件除了能加载指定的url外，还可以对URL请求、JavaScript的对话框、加载进度、页面交互进行强大的处理，之后会提到拦截请求、执行JS脚本都依赖于此。</p><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><ul><li>NA：体验要求极致，变化不频繁，例如头条的首页</li><li>hybrid：体验要求高，变化频繁，例如头条的新闻详情页</li><li>h5：体验无要求，不常用，例如举报、反馈等页面</li></ul><h2 id="实现流程" tabindex="-1">实现流程 <a class="header-anchor" href="#实现流程" aria-label="Permalink to &quot;实现流程&quot;">​</a></h2><ol><li>前端做好静态页面(html、js、css)，将文件交给客户端</li><li>客户端拿到前端静态页面，以文件形式存储在app中</li><li>客户端在一个webview中使用file协议加载静态页面</li></ol>',14),o=[t];function l(p,h,b,n,s,c){return i(),a("div",null,o)}const u=e(d,[["render",l]]);export{w as __pageData,u as default};
