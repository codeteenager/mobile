import{_ as a,c as e,o as i,V as t}from"./chunks/framework.7db3ccb7.js";const r="/mobile/guide/8.png",b=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md","lastUpdated":1679824266000}'),l={name:"guide/index.md"},o=t('<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>跨平台其实是一个老生常谈的话题，技术方案也是历经变迁，但始终热点不断，究其原因有二：</p><ul><li>首先，移动端原生技术需要配备 iOS 和 Android 两套团队和技术栈，且存在发版周期限制，开发效率上存在天然缺陷；</li><li>其次，原生跨平台技术虽然“出道”较早，但是各方案都难以做到完美，因此也没有大一统的技术垄断。</li></ul><p><img src="'+r+'" alt=""></p><p>目前的主流跨平台方案：Cordova/phoneGap、React Native、Weex、微信小程序和Flutter等，根据其原理性，可以分为三大类。</p><ul><li>H5+原生（Cordova、Ionic、微信小程序）</li><li>JavaScript开发+原生渲染 （React Native、Weex、快应用）</li><li>自绘UI+原生(Flutter)</li></ul><h2 id="h5-原生混合开发" tabindex="-1">H5+原生混合开发 <a class="header-anchor" href="#h5-原生混合开发" aria-label="Permalink to &quot;H5+原生混合开发&quot;">​</a></h2><p>这种模式又称为Hybrid开发，现在很多App都用这种模式去开发，常见的有微信、淘宝、美团、爱奇艺等知名移动应用等。国内也有很多公司使用Hybrid模式去开发平台，供开发者使用，像Dcloud、AppCan、Inoic等，基本上都是参考Cordova衍生出的混合开发框架。</p><p>这类框架主要原理就是将APP的一部分需要动态变动的内容通过H5来实现，通过原生的网页加载控件WebView (Android)或WKWebView（ios）来加载，H5部分是可以随时改变而不用发版，这样就解决了动态化的需求，同时，由于h5代码只需要一次开发，就能同时在Android和iOS两个平台运行，这也可以减小开发成本，我们称这种h5+原生的开发模式为混合开发。采用混合模式开发的APP我们称之为混合应用或Hybrid APP。</p><p>由于原生开发可以访问平台所有功能，而混合开发中，h5代码是运行在WebView中，而WebView实质上就是一个浏览器内核，其JavaScript依然运行在一个权限受限的沙箱中，所以对于大多数系统能力都没有访问权限，如无法访问文件系统、不能使用蓝牙等。所以，对于H5不能实现的功能，都需要原生去做。而混合框架一般都会在原生代码中预先实现一些访问系统能力的API， 然后暴露给WebView以供JavaScript调用，这样一来，WebView就成为了JavaScript与原生API之间通信的桥梁，主要负责JavaScript与原生之间传递调用消息，而消息的传递必须遵守一个标准的协议，它规定了消息的格式与含义，我们把依赖于WebView的用于在JavaScript与原生之间通信并实现了某种消息传输协议的工具称之为WebView JavaScript Bridge, 简称 JsBridge，它也是混合开发框架的核心。</p><p>混合应用的优点是动态内容是H5，使用web技术栈就可以开发，社区及资源丰富，缺点是性能不好，对于复杂用户界面或动画，webview不堪重任。</p><h2 id="javascript开发-原生渲染" tabindex="-1">JavaScript开发+原生渲染 <a class="header-anchor" href="#javascript开发-原生渲染" aria-label="Permalink to &quot;JavaScript开发+原生渲染&quot;">​</a></h2><p>这类开源框架的代表主要是Facebook的React Native、阿里的Weex，当然也有未开源的美团的Picasso，以及最新推出的快应用。 JavaScript开发+原生渲染的方式主要优点如下：</p><ul><li>采用Web开发技术栈，社区庞大、上手快、开发成本相对较低。</li><li>原生渲染，性能相比H5提高很多。</li><li>动态化较好，支持热更新。</li></ul><p>当然也有缺点如下：</p><ul><li>渲染时需要JavaScript和原生之间通信，在有些场景如拖动可能会因为通信频繁导致卡顿。</li><li>JavaScript为脚本语言，执行时需要JIT，执行效率和AOT代码仍有差距。</li><li>由于渲染依赖原生控件，不同平台的控件需要单独维护，并且当系统更新时，社区控件可能会滞后；除此之外，其控件系统也会受到原生UI系统限制，例如，在Android中，手势冲突消歧规则是固定的，这在使用不同人写的控件嵌套时，手势冲突问题将会变得非常棘手。</li></ul><h3 id="react-native" tabindex="-1">React Native <a class="header-anchor" href="#react-native" aria-label="Permalink to &quot;React Native&quot;">​</a></h3><p>React Native (简称RN)是Facebook于2015年4月开源的跨平台移动应用开发框架，是Facebook早先开源的JS框架 React 在原生移动应用平台的衍生产物，目前支持iOS和Android两个平台。RN使用Javascript语言，类似于HTML的JSX，以及CSS来开发移动应用，因此熟悉Web前端开发的技术人员只需很少的学习就可以进入移动应用开发领域。</p><p>React Native的原理和React设计一致，React中虚拟DOM最终会映射为浏览器DOM树，而RN中虚拟DOM会通过 JavaScriptCore 映射为原生控件树。</p><p>JavaScriptCore 是一个JavaScript解释器，它在React Native中主要有两个作用：</p><ul><li>为JavaScript提供运行环境。</li><li>是JavaScript与原生应用之间通信的桥梁，作用和JsBridge一样，事实上，在iOS中，很多JsBridge的实现都是基于 JavaScriptCore 。</li></ul><p>而RN中将虚拟DOM映射为原生控件的过程中分两步：</p><ul><li>布局消息传递； 将虚拟DOM布局信息传递给原生</li><li>原生根据布局信息通过对应的原生控件渲染控件树</li></ul><p>由于React Native是原生控件渲染，所以性能会比混合应用中H5好很多，同时React Native是Web开发技术栈，只需维护一份代码，即可在多个平台上使用。</p><h3 id="weex" tabindex="-1">Weex <a class="header-anchor" href="#weex" aria-label="Permalink to &quot;Weex&quot;">​</a></h3><p>Weex是阿里巴巴于2016年发布的跨平台移动端开发框架，思想及原理和React Native类似，最大的不同是语法层面，React Native使用React.js作为开发框架，而Weex则使用Vue.js作为开发框架。Vue和React堪称前端领域最火的JavaScript框架，它们的易用性和功能性都非常强大，Weex在淘宝上也有广泛的应用。</p><h3 id="快应用" tabindex="-1">快应用 <a class="header-anchor" href="#快应用" aria-label="Permalink to &quot;快应用&quot;">​</a></h3><p>快应用是华为、小米、OPPO、魅族等国内9大主流手机厂商共同制定的轻量级应用标准，目标直指微信小程序。它也是采用JavaScript语言开发，原生控件渲染，与React Native和Weex相比主要有两点不同：</p><ul><li>快应用自身不支持Vue或React语法，其采用原生JavaScript开发，其开发框架和微信小程序很像，值得一提的是小程序目前已经可以使用Vue语法开发（mpvue），从原理上来讲，Vue的语法也可以移植到快应用上。</li><li>React Native和Weex的渲染/排版引擎是集成到框架中的，每一个APP都需要打包一份，安装包体积较大；而快应用渲染/排版引擎是集成到ROM中的，应用中无需打包，安装包体积小，正因如此，快应用才能在保证性能的同时做到快速分发。</li></ul><h2 id="自绘ui-原生" tabindex="-1">自绘UI+原生 <a class="header-anchor" href="#自绘ui-原生" aria-label="Permalink to &quot;自绘UI+原生&quot;">​</a></h2><p>通过在不同平台实现一个统一接口的渲染引擎来绘制UI，而不依赖系统原生控件，所以可以做到不同平台UI的一致性。注意，自绘引擎解决的是UI的跨平台问题，如果涉及其它系统能力调用，依然要涉及原生开发。这种平台技术的优点如下：</p><ul><li>性能高；由于自绘引擎是直接调用系统API来绘制UI，所以性能和原生控件接近。</li><li>灵活、组件库易维护、UI外观保真度和一致性高；由于UI渲染不依赖原生控件，也就不需要根据不同平台的控件单独维护一套组件库，所以代码容易维护。由于组件库是同一套代码、同一个渲染引擎，所以在不同平台，组件显示外观可以做到高保真和高一致性；另外，由于不依赖原生控件，也就不会受原生布局系统的限制，这样布局系统会非常灵活。</li></ul><p>不足之处：</p><ul><li>动态性不足；为了保证UI绘制性能，自绘UI系统一般都会采用AOT模式编译其发布包，所以应用发布后，不能像Hybrid和RN那些使用JavaScript（JIT）作为开发语言的框架那样动态下发代码。</li></ul><h3 id="flutter" tabindex="-1">Flutter <a class="header-anchor" href="#flutter" aria-label="Permalink to &quot;Flutter&quot;">​</a></h3><p>Flutter 是 Google推出并开源的移动应用开发框架，主打跨平台、高保真、高性能。开发者可以通过 Dart语言开发 App，一套代码同时运行在 iOS 和 Android平台。 Flutter提供了丰富的组件、接口，开发者可以很快地为 Flutter添加原生扩展。</p><p>Flutter既不使用WebView，也不使用操作系统的原生控件。 相反，Flutter使用自己的高性能渲染引擎来绘制widget。这样不仅可以保证在Android和iOS上UI的一致性，而且也可以避免对原生控件依赖而带来的限制及高昂的维护成本。</p><p>Flutter使用Skia作为其2D渲染引擎，Skia是Google的一个2D图形处理函数库，包含字型、坐标转换，以及点阵图都有高效能且简洁的表现，Skia是跨平台的，并提供了非常友好的API，目前Google Chrome浏览器和Android均采用Skia作为其绘图引擎，值得一提的是，由于Android系统已经内置了Skia，所以Flutter在打包APK(Android应用安装包)时，不需要再将Skia打入APK中，但iOS系统并未内置Skia，所以构建iPA时，也必须将Skia一起打包，这也是为什么Flutter APP的Android安装包比iOS安装包小的主要原因。</p><p>但是Flutter也有不足之处，不支持动态下发代码和热更新。</p>',39),p=[o];function c(d,u,n,h,s,v){return i(),e("div",null,p)}const P=a(l,[["render",c]]);export{b as __pageData,P as default};
