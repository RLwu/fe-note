#前端开发面试题

## <a name='preface'>前言</a> ##


由于工作变动，在毫无准备的情况下直接去面试，虽然大概知道其中一二，说出来面试官的心里答案还是有一定差距。面试题是对理论知识的总结，让自己学会应该如何表达，于是便决定整理以下，有备无患。个人认为这些题只能帮助你对相关知识有一定的了解，但对于拿去应付面试还是有所欠缺，务必要用心钻研其中的原理，重要知识需要系统学习、透彻学习，形成自己的知识链，万不可投机取巧，临时抱佛脚只求面试侥幸混过关是错误的！也是不可能的！

**面试有几点需注意：(部分来源[寒冬winter])**

1. 面试题目： 根据你的等级和职位的变化，入门级到专家级，广度和深度都会有所增加。

1. 题目类型： 理论知识、算法、项目细节、技术视野、开放性题、工作案例。

1. 细节追问： 可以确保问到你开始不懂或面试官开始不懂为止，这样可以大大延展题目的区分度和深度，知道你的实际能力。因为这种知识关联是长时期的学习，临时抱佛脚绝对是记不住的。

1. 一些开放性题目：自我介绍：除了基本个人信息以外，面试官更想听的是你与众不同的地方和你的优势。项目介绍：？如何看待前端开发？平时是如何学习前端开发的？未来三到五年的规划是怎样的？

1. 回答问题再棒，面试官（可能是你面试职位的直接领导），会考虑我要不要这个人做我的同事？所以态度很重要、除了能做事，还要会做人。

1. 资深的前端开发能把absolute和relative弄混，这样的人不要也罢，因为团队需要的是：你这个人具有可以依靠的才能（靠谱）。



**前端开发知识点：**

	HTML&CSS：
		对Web标准的理解、浏览器内核差异、兼容性、hack、CSS基本功：布局、盒子模型、选择器优先级、
		HTML5、CSS3、Flexbox

	JavaScript：
        数据类型、运算、对象、Function、继承、闭包、作用域、原型链、事件、RegExp、JSON、Ajax、
		DOM、BOM、内存泄漏、跨域、异步装载、模板引擎、前端MVC、路由、模块化、Canvas、ECMAScript 6、Nodejs

	其他：
        移动端、响应式、自动化构建、HTTP、离线存储、WEB安全、优化、重构、团队协作、可维护、易用性、SEO、UED、架构、职业生涯、快速学习能力

作为一名前端工程师，**无论工作年头长短都应该掌握的知识点**：

此条由 王子墨 发表在 [攻城师的实验室](http://lab.yuanwai.wang/)

		1、DOM结构 —— 两个节点之间可能存在哪些关系以及如何在节点之间任意移动。

		2、DOM操作 —— 如何添加、移除、移动、复制、创建和查找节点等。

		3、事件 —— 如何使用事件，以及IE和标准DOM事件模型之间存在的差别。

		4、XMLHttpRequest —— 这是什么、怎样完整地执行一次GET请求、怎样检测错误。

		5、严格模式与混杂模式 —— 如何触发这两种模式，区分它们有何意义。

		6、盒模型 —— 外边距、内边距和边框之间的关系，及IE8以下版本的浏览器中的盒模型

		7、块级元素与行内元素 —— 怎么用CSS控制它们、以及如何合理的使用它们

		8、浮动元素 —— 怎么使用它们、它们有什么问题以及怎么解决这些问题。

		9、HTML与XHTML —— 二者有什么区别，你觉得应该使用哪一个并说出理由。

		10、JSON —— 作用、用途、设计结构。



**备注：**


	根据自己需要选择性阅读，资料答案不够正确和全面，欢迎欢迎Star和提交issues。





## <a name='html'>HTML</a>

- Doctype作用？标准模式与兼容模式各有什么区别?

		（1）、<!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

		（2）、标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

- HTML5 为什么只需要写 <!DOCTYPE HTML>？

		 HTML5 不基于 SGML，因此不需要对DTD（文档类型定义(Document Type Definition)）进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；

		 而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。


- 常见DOCTYPE

		（1）、HTML4.01 strict：不允许使用表现性、废弃元素（如font）以及frameset。声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

		（2）、HTML4.01 Transitional:允许使用表现性、废弃元素（如font），不允许使用frameset。声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
		
		（3）、HTML4.01 Frameset:允许表现性元素，废气元素以及frameset。声明：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
		
		（4）、XHTML1.0 Strict:不使用允许表现性、废弃元素以及frameset。文档必须是结构良好的XML文档。声明：<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
		
		（5）、XHTML1.0 Transitional:允许使用表现性、废弃元素，不允许frameset，文档必须是结构良好的XMl文档。声明： <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		
		（6）、XHTML 1.0 Frameset:允许使用表现性、废弃元素以及frameset，文档必须是结构良好的XML文档。声明：<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
		
		（7）、HTML 5: <!doctype html>


- 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

		首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

		（1）行内元素有：a b span img input select strong（强调的语气），不能设置其高度和宽度
		（2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
		（3）行内块级元素：<img> 、<input> 元素等，这些元素可以和其他行内元素位于同一行，同时可以设置其高度和宽度。
		（3）常见的空元素：
			<br> <hr> <img> <input> <link> <meta>
			鲜为人知的是：
			<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>


- 介绍一下你对浏览器内核的理解？

		主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
		渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

		JS引擎则：解析和执行javascript来实现网页的动态效果。

		最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

- 常见的浏览器内核有哪些？

        	Trident：   IE浏览器
		Gecko：     Mozilla 浏览器，比如 Firefox;
		Webkit：    Safari浏览器，也是Chrome浏览器的内核原型;
		Blink:      Chrome浏览器，Opera浏览器。

      详细文章：[浏览器内核的解析和对比](http://www.cnblogs.com/fullhouse/archive/2011/12/19/2293455.html)

- 简述一下你对HTML语义化的理解？

	    用正确的标签做正确的事情。
	    html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
	    即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
	    搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
	    使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。


- 列举常用的结构标记，并描述其作用

	    结构标记专门用于标识页面的不同结构，相对于使用 <div> 元素而言，可以实现语义 化的标签。
		常用的结构标记有:
		 <header> 元素:用于定义文档的页眉;
		 <nav> 元素:用于定义页面的导航链接部分;
		 <section> 元素:用于定义文档中的节，表示文档中的一个具体的组成部分;
		 <article> 元素:常用于定义独立于文档的其他部分的内容;
		 <footer> 元素:常用于定义某区域的脚注信息;
		 <aside> 元素:常用于定义页面的一些额外组成部分，如广告栏、侧边栏和相关引用信息等。
	    
	    
- 锚点的作用是什么?如何创建锚点?

		锚点是文档中某行的一个记号，类似于书签，用于链接到文档中的某个位置。当定义了 锚点后，我们可以创建直接跳至该锚点(比如页面中某个小节)的链接，这样使用者就无需 不停地滚动页面来寻找他们需要的信息了。
		
		在使用 <a> 元素创建锚点时，需要使用 name 属性为其命名，代码如下所示:
		
		<a name=”anchorname1”>锚点一</a> 
		
		然后就可以创建链接，直接跳转到锚点，代码如下所示:
		
		<a href=”#anchorname1”>回到锚点一</a>
		


- 超级链接有哪些常见的表现形式?

		<a> 元素用于创建超级链接，常见的表现形式有:
		
		1、普通超级链接，语法为:
		<a href="" target="">文本</a> 
		
		2、下载链接，即目标文档为下载资源，语法如:
		<a href="DAY02.zip">下载</a> 
		
		3、电子邮件链接，用于链接到 email，语法如:
		<a href="mailto:tarena@tarena.com.cn">联系我们</a> 
		
		4、空链接，用于返回页面顶部，语法如:
   		<a href="#">...</a>
		
		5、链接到 JavaScript，以实现特定的代码功能，语法如:
		<a href="javascript : ...">JS 功能</a>
	
	
- html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？


	  * HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
			  绘画 canvas;
			  拖拽释放(Drag and drop) API
			  用于媒介回放的 video 和 audio 元素;
			  本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
	          	  sessionStorage 的数据在浏览器关闭后自动删除;
			  语意化更好的内容元素，比如 article、footer、header、nav、section;
			  表单控件，calendar、date、time、email、url、search;
			  新的技术webworker, websocket, 地理(Geolocation) API;

		  移除的元素：
			  纯表现的元素：basefont，big，center，font, s，strike，tt，u;
			  对可用性产生负面影响的元素：frame，frameset，noframes；

	  * 支持HTML5新标签：
			IE8/IE7/IE6支持通过document.createElement方法产生的标签，
		  	可以利用这一特性让这些浏览器支持HTML5新标签，
          	 	浏览器支持新标签后，还需要添加标签默认的样式。

		     	当然也可以直接使用成熟的框架、比如html5shim;
			 <!--[if lt IE 9]>
				<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
			 <![endif]-->

	  * 如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素


- HTML5的离线储存怎么使用，工作原理能不能解释一下？

		在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
		
		原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。


		如何使用：
		1、页面头部像下面一样加入一个manifest的属性<html manifest="myapp.appcache">；
		2、在cache.manifest文件的编写离线存储的资源；
			CACHE MANIFEST
			#v0.11
			CACHE:
			js/app.js
			css/style.css
			NETWORK:
			resourse/logo.png
			FALLBACK:
			/ /offline.html
		3、在离线状态时，操作window.applicationCache进行需求实现。

	详细的使用请参考：[有趣的HTML5：离线存储](http://segmentfault.com/a/1190000000732617)



- 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？

		在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
		离线的情况下，浏览器就直接使用离线存储的资源。
	详细的使用请参考：[有趣的HTML5：离线存储](http://segmentfault.com/a/1190000000732617)

- 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

		cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
		cookie数据始终在同源的http请求中携带（即使不需要），即会在浏览器和服务器间来回传递，不可以跨域调用。
		cookie有path概念，子路径可以访问父路径cookie，父路径不能访问子路径cookie
		sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

		存储大小：
			浏览器不能保存超过300个cookie，单个服务器不能超过20个，每个cookie不能超过4k
			sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

		有效时间：
	    	localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
        	sessionStorage  会话级别的存储，数据在当前浏览器窗口关闭后自动删除
		cookie          设置的cookie有效期内一直有效，默认为浏览器关闭
		
		共享：
	    	localStorage    在同源文档之间共享，localStorage的修改会促发其他文档窗口的update事件
        	sessionStorage  不能共享
		cookie          在同源且符合path规则的文档之间共享
		
		方法：
	    	localStorage    localStorage.setItem('x', 1); // storge x->1
				localStorage.getItem('x); // return value of x
				localStorage.removeItem('x'); // remove x
				localStorage.clear();  // remove all data
		
		cookie      	需要前端开发者自己封装setCookie，getCookie
		
		兼容性：
		IE7、IE6中的userData其实就是javascript本地存储的解决方案
		

- cookie 和session 的区别：

 		1、cookie数据存放在客户的浏览器上，session数据放在服务器上。

 		2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗

    			考虑到安全应当使用session。

 		3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能

     			考虑到减轻服务器性能方面，应当使用COOKIE。

 		4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

 		5、所以个人建议：

   		 	将登陆信息等重要信息存放为SESSION

    			其他信息如果需要保留，可以放在COOKIE中


- cookie及其操作

		•cookie是web浏览器存储的少量数据，最早设计为服务器端使用，作为HTTP协议的扩展实现。cookie数据会自动在浏览器和服务器之间传输。
		•通过读写cookie检测是否支持
		•cookie属性有名，值，max-age，path, domain，secure；
		•cookie默认有效期为浏览器会话，一旦用户关闭浏览器，数据就丢失，通过设置max-age=seconds属性告诉浏览器cookie有效期
		•cookie作用域通过文档源和文档路径来确定，通过path和domain进行配置，web页面同目录或子目录文档都可访问
		•通过cookie保存数据的方法为：为document.cookie设置一个符合目标的字符串如下
		•读取document.cookie获得'; '分隔的字符串，key=value,解析得到结果
		document.cookie = 'name=qiu; max-age=9999; path=/; domain=domain; secure';

		document.cookie = 'name=aaa; path=/; domain=domain; secure';
		// 要改变cookie的值，需要使用相同的名字、路径和域，新的值
		// 来设置cookie，同样的方法可以用来改变有效期

		// 设置max-age为0可以删除指定cookie

		//读取cookie，访问document.cookie返回键值对组成的字符串，
		//不同键值对之间用'; '分隔。通过解析获得需要的值
		cookieUtil.js：自己写的cookie操作工具
		
		如何删除一个cookie：
			1.将时间设为当前时间往前一点。
				var date = new Date();

				date.setDate(date.getDate() - 1);//真正的删除
				setDate()方法用于设置一个月的某一天。
			2.expires的设置
    				document.cookie = 'user='+ encodeURIComponent('name')  + ';expires = ' + new Date(0)


- iframe有那些缺点？

		*iframe会阻塞主页面的Onload事件；
		*搜索引擎的检索程序无法解读这种页面，不利于SEO;

		*iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

        使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
        动态给iframe添加src属性值，这样可以绕开以上两个问题。

- Label的作用是什么？是怎么用的？

		label标签来定义表单控之间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上，为鼠标用户改进了用户体验性。

		<label> 元素可以附带一个 for 属性，只要将该属性的值设置为表单中任 何一个控件的 id 属性的值，则当用户点击该标签(文本)时，浏览器就会自动将焦点转到 和标签相关的表单控件上。
		即:如果在 <label>元素内点击文本，就会触发此控件。

		<label for="Name">Number:</label>
		<input type=“text“name="Name" id="Name"/>

		<label>Date:<input type="text" name="B"/></label>


- 表单向服务器提交数据有几种方式?这些方式有什么区别?

		将表单数据发送给服务器的常用方式有两种:Get 和 Post。
		
		浏览器发送给服务器的 HTTP 请求分为请求头(header)和请求主体(body)两部分。 其中，必须包含头部分，用于指定发送请求的方式、目的地以及其他关键信息;而主体是可 选的。在头数据和主体数据之间用一个空白行来隔开。
		
		比如，需要发送请求到页面 GetStockPrice.php，且需要附带数据 Symbol=MSFT。 那么如果使用 Get 方式发送数据，则简化后的请求数据内容如下所示:
		 	GET /Trading/GetStockPrice.aspx?Symbol=MSFT HTTP/1.1 Host: localhost
			
		如果使用 Post 方式发送数据，则简化后的请求数据内容如下所示:
		
			POST /Trading/GetStockPrice.aspx HTTP/1.1
			Host: localhost
			Content-Type: application/x-www-form-urlencoded Content-Length: 11
			Symbol=MSFT

  		由此可见，两种方式的区别主要在于发送数据方式不同：
		使用 Get 方式向服务器发送表单数据时，表单数据将附加在 URL 属性的末端;采用 POST 方法发送数据时，数据会放置在主体中发送。


- HTML5的form如何关闭自动完成功能？

		给不想要提示的 form 或某个 input 设置为 autocomplete=off。


- 如何实现浏览器内多个标签页之间的通信? (阿里)

		WebSocket、SharedWorker；
		也可以调用localstorge、cookies等本地存储方式；

		localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，
		我们通过监听事件，控制它的值来进行页面信息通信；
		注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常；

- webSocket如何兼容低浏览器？(阿里)

		Adobe Flash Socket 、
		ActiveX HTMLFile (IE) 、
		基于 multipart 编码发送 XHR 、
		基于长轮询的 XHR

- 页面可见性（Page Visibility API） 可以有哪些用途？   

		通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
		在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；
		

- 如何在页面上实现一个圆形的可点击区域？

		1、map+area或者svg
		2、border-radius
		3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等

- 实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。

		<div style="height:1px;overflow:hidden;background:red"></div>


- 网页验证码是干嘛的，是为了解决什么安全问题。

		区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水；
		有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。

- title与h1的区别、b与strong的区别、i与em的区别？

		title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响；

		strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容。

		i内容展示为斜体，em表示强调的文本；
		
		Physical Style Elements -- 自然样式标签
		b, i, u, s, pre
		Semantic Style Elements -- 语义样式标签
		strong, em, ins, del, code
		应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签。
		
		
- <img>的title和alt有什么区别

		1  title是global attributes之一，用于为元素提供附加的advisory information。通常当鼠标滑动到元素上的时候显示。
		2  alt是<img>的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。

- HTML全局属性(global attribute)有哪些

		•	accesskey:设置快捷键，提供快速访问元素如aaa在windows下的firefox中按alt + shift + a可激活元素
		•	class:为元素设置类标识，多个类名用空格分开，CSS和javascript可通过class属性获取元素
		•	contenteditable: 指定元素内容是否可编辑
		•	contextmenu: 自定义鼠标右键弹出菜单内容
		•	data-*: 为元素增加自定义属性
		•	dir: 设置元素文本方向
		•	draggable: 设置元素是否可拖拽
		•	dropzone: 设置元素拖放类型： copy, move, link
		•	hidden: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
		•	id: 元素id，文档内唯一
		•	lang: 元素内容的的语言
		•	spellcheck: 是否启动拼写和语法检查
		•	style: 行内css样式
		•	tabindex: 设置元素可以获得焦点，通过tab可以导航
		•	title: 元素相关的建议信息
		•	translate: 元素和子孙节点内容是否需要本地化

- web开发中会话跟踪的方法有哪些

		1	cookie
		2	session
		3	url重写
		4	隐藏input
		5	ip地址


## <a name='css'>CSS</a>

- 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？

		（1）有两种， IE 盒子模型、W3C 盒子模型；
		（2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
		（3）区  别： IE的content部分把 border 和 padding计算了进去;


- CSS选择符有哪些？哪些属性可以继承？

		*       1.id选择器（ # myid）
			2.类选择器（.myclassname）
			3.标签选择器（div, h1, p）
			4.相邻选择器（h1 + p）
			5.子选择器（ul > li）
			6.后代选择器（li a）
			7.通配符选择器（ * ）
			8.属性选择器（a[rel = "external"]）
			9.伪类选择器（a:hover, li:nth-child）

		*   可继承的样式： 
			1)文本相关属性:font-family、font-size、font-style、font-variant, font-weight、font 、 letter-spacing 、 line-height 、 text-align 、 text-indent 、 text-transform 、 word-spacing、color;
			2)列表相关属性:list-style-image、list-style-position、list-style-type、list-style; 
			3)表格相关属性:border-collapse、border-spacing、caption-side、table-layoute; 
			4)其他属性:Cursor、visibility。
		*   不可继承的样式：border padding margin width height ;


- CSS3新增伪类有那些？

			CSS3 提供了大量伪类选择器，浏览器对于有些伪类选择器的支持还不太好。
			目前，常用的伪类选择器有:
			 目标为类:即 :target，突出显示活动的 HTML 锚，用于选取当前活动的目标元素; 
			 元素状态伪类:比如 :enabled、:disabled、:checked;
			 结构伪类:比如 :first-child、:last-child、:empty、:only-child;
			 否定伪类:即 :not(selector) ，匹配非指定元素/选择器的每个元素。
			
			:after			在元素之前添加内容,也可以用来做清除浮动。
			:before			在元素之后添加内容


- CSS优先级算法如何计算？

		*   优先级就近原则，同权重情况下样式定义最近者为准;

		*   载入样式以最后载入的定位为准;

		优先级为:
		   !important >  id > class > tag
		   	important 比 内联优先级高


- 页面导入样式时，使用link和@import有什么区别？


		（1）link是HTML方式，无兼容问题； @import是CSS方式，只在IE5以上才能被识别，可以使用@import对老浏览器隐藏样式;

		（2）页面被加载的时，link会同时被加载，最大限度支持并行下载；而@import引用的CSS会等到页面被加载完再加载，过多嵌套导致串行下载，出现FOUC;
		
		（3）link可以通过rel="alternate stylesheet"指定候选样式；总体link优于@import；


- 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

		FOUC - Flash Of Unstyled Content 文档样式闪烁
		<style type="text/css" media="all">@import "../fouc.css";</style>
		而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。

     		解决方法简单的出奇，只要在<head>之间加入一个<link>或者<script>元素就可以了。


- 如何理解 CSS 样式表的层叠性?

		CSS 使用层叠(Cascade)的原则来考虑继承、层叠次序和优先级等重要特征，从而判 断相互冲突的规则中哪个规则应该起作用。
		继承性是指，许多 CSS 的样式规则不但影响选择器所定义的元素，而且会被这些元素 的后代继承。
		层叠性是指，当一个 Web 页面使用多个样式表，多个样式表中的样式可层叠为一个。 在多个样式表之间所定义的样式没有冲突的时候，浏览器会显示所有的样式。
 
  			<style type="text/css">
   		 	@import "aa.css";
			</style>
 
  		优先级是指，当发生样式定义冲突时，浏览器首先会按照不同样式规则的优先级来应用 样式。CSS 样式的优先级如下所示(其中数字 3 拥有最高的优先权):
			1. 浏览器缺省设置;
			2. 外部样式表(.css 文件)或者内部样式表(位于 <head> 元素内部); 3. 内联样式(作为某个元素的 style 属性的值)。 同等优先级下，以最后定义的样式为准，important 比内联高。
	

- 如何水平居中一个元素


		*  如果需要居中的元素为常规流中inline元素，为父元素设置
		
			text-align: center;
		
		
		*  如果需要居中的元素为常规流中block元素
		
			1）为元素设置宽度，
			2）设置左右margin为auto。
			3）IE6下需在父元素上设置text-align: center;,再给子元素恢复需要的值
			
			div{
				text-align: center;
				child{
					width:200px;
					margin:0 auto;
				}
			}


		*  居中一个浮动元素

			对于浮动元素，设置其左右外边距为关键字 auto 是无效的。此时，如果需要设置其居中显示，可以:
				1）为元素设置宽度，
				2）position: relative;，
				3）浮动方向偏移量（left或者right）设置为50%，
				4）浮动方向上的margin设置为元素宽度一半乘以-1
				
			确定容器的宽高 宽500 高 300 的层

		     	.div {
				  width:500px ; height:300px;	//1 高度可以不设
				  margin: -150px 0 0 -250px;	//3
				  position:relative;		//2相对定位
		          	  background-color:pink;	//方便看效果
				  left:50%;			//4
				  top:50%;
			}

		*  让绝对定位的div居中

			  position: absolute;
			  width: 1200px;
			  margin: 0 auto;
			  top: 0;
			  left: 0;
			  bottom: 0;
			  right: 0;


- 如何垂直居中一个元素


- display有哪些值？说明他们的作用。

		  block       	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
		  none        	缺省值。象行内元素类型一样显示。
		  inline      	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
		  inline-block  默认宽度为内容宽度，可以设置宽高，同行显示。
		  list-item   	像块类型元素一样显示，并添加样式列表标记。
		  table       	此元素会作为块级表格来显示。
		  inherit     	规定应该从父元素继承 display 属性的值。


- display: block和display: inline的区别

		block元素特点：
			1.处于常规流中时，如果width没有设置，会自动填充满父容器 
			2.可以应用margin/padding
			3.在没有设置高度的情况下会扩展高度以包含常规流中的子元素 
			4.处于常规流中时布局时在前后元素位置之间（独占一个水平空间） 5.忽略vertical-align
		inline元素特点
			1.水平方向上根据direction依次布局
			2.不会在元素前后进行换行
			3.受white-space控制
			4.margin/padding在竖直方向上无效，水平方向上有效 
			5.width/height属性对非替换行内元素无效，宽度由元素内容决定 
			6.非替换行内元素的行框高由line-height确定，替换行内元素的行框高由height,margin,padding,border决定
			7.浮动或绝对定位时会转换为block 
			8.vertical-align属性生效
	
- display,float,position的关系

		1 如果display为none，那么position和float都不起作用，这种情况下元素不产生框
		2 否则，如果position值为absolute或者fixed，框就是绝对定位的，float的计算值为none，display根据下面的表格进行调整。
		3 否则，如果float不是none，框是浮动的，display根据下表进行调整
		4 否则，如果元素是根元素，display根据下表进行调整
		5 其他情况下display的值为指定值 总结起来：绝对定位、浮动、根元素都需要调整display
	
- display 属性 和 visibility 属性的区别?

		可以使用 display 属性定义建立布局时元素生成的显示框类型。
		
		1. 如果将 display 属性设置为 block，可以让行内元素(比如 <a> 元素)表现得像 块级元素一样;
		2. 如果将 display 属性设置为 inline，可以让块级元素(比如 <p> 元素)表现得像 内联元素一样;
		3. 可以通过把 display 属性设置为 none，让生成的元素根本没有框。这样的话，该 框及其所有内容就不再显示，不占用文档中的空间。
		
		在 DIV 设计中，使用 display:none 属性后，HTML 元素(对象)的宽度、高度等各种 属性值都将“丢失”;而使用 visibility:hidden 属性后，HTML 元素(对象)仅仅是在视觉 上看不见(完全透明)，而它所占据的空间位置仍然存在，也即是说它仍具有高度、宽度等 属性值。
	
	
- 简要描述 CSS 中的定位机制。

		CSS 中，除了默认的流定位方式以外，还有如下几种定位机制:浮动定位、相对定位、 绝对定位和固定定位。
		浮动定位：是指将元素排除在普通流之外，并且将它放置在包含框的左边或者右边，但是 依旧位于包含框之内。
    		相对定位：将元素相对于它在普通流中的位置进行定位。
		绝对定位：是指将元素的内容从普通流中完全移除，并且可以使用偏移属性来固定该元素 的位置。
  		固定定位：是指将元素的内容固定在页面的某个位置。
		

- 什么情况下需要额外设置表格的显示规则?

		默认情况下(不额外设置表格的显示规则时)，表格按照自动表格布局进行显示，即， 浏览器在显示表之前查看每一个单元格，然后基于所有单元格的设置计算表的大小，而列的 宽度是由列单元格中没有折行的最宽的内容设定的。此时，单元格的大小会适应内容的大小。
		
		自动表格布局的算法在表格复杂时会比较慢，这是由于它需要在确定最终的布局之前访 问表格中所有的内容。在不能提前确定每一列的大小时，这种方式会非常适用。
		
		如果额外设置表格的显示规则，即，设置 table-layout 属性的值为 fixed，则称为固 定表格布局。在固定表格布局中，水平布局仅取决于表格宽度、列宽度、表格边框宽度、单 元格间距，而与单元格的内容无关。浏览器将使用某列指定的宽度来计算布局(如果给了宽 度的话)，并使用该宽度计算该列中所有其他单元格的宽度。
		
		固定表格布局与自动表格布局相比，允许浏览器更快地对表格进行布局。因为如果指定 使用固定表格布局，浏览器在接收到第一行后就可以显示表格。如果表格庞大且已经指定了 大小，则会加速表的显示。
		
- position的值relative和absolute定位原点是？

		  absolute
			生成绝对定位的元素，相对于值不为 static的第一个父元素进行定位。
		  fixed （老IE不支持）
			生成绝对定位的元素，相对于浏览器窗口进行定位。
		  relative
			生成相对定位的元素，相对于其正常位置进行定位。
		  static
			默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
		  inherit
			规定从父元素继承 position 属性的值。


- 外边距折叠(collapsing margins)

		毗邻的两个或多个margin会合并成一个margin，叫做外边距折叠。规则如下：
			1 两个或多个毗邻的普通流中的块元素垂直方向上的margin会折叠
			2 浮动元素/inline-block元素/绝对定位元素的margin不会和垂直方向上的其他元素的margin折叠
			3 创建了块级格式化上下文的元素，不会和它的子元素发生margin折叠
			4 元素自身的margin-bottom和margin-top相邻时也会折叠
		

- stacking context,布局规则

		z轴上的默认层叠顺序如下（从下到上）：
			1	根元素的边界和背景
			2	常规流中的元素按照html中顺序
			3	浮动块
			4	positioned元素按照html中出现顺序
		如何创建stacking context：
			1	根元素
			2	z-index不为auto的定位元素
			3	a flex item with a z-index value other than 'auto'
			4	opacity小于1的元素
			5	在移动端webkit和chrome22+，z-index为auto，position: fixed也将创建新的stacking context


- 为什么建议设置背景图像的同时还设置背景颜色?	

		一般建议在使用背景图像的同时提供 background-color 属性，并且将其设置为和图像 主要颜色类似的颜色。这样，如果正在加载页面，或者因为各种原因无法显示背景图像时， 页面可以使用这种颜色作为背景色。


- 在设置文本的字体时，为什么建议设置替换字体?

		为 font-family 属性指定多种字体，且多种字体之间用逗号隔开，这样可以为 页面指定一个字体列表。如果用户机器没有第一种字体，则浏览器会查找字体列表中的下一 种字体作为替代字体显示。如果找遍了字体列表还是没有可以使用的字体，浏览器才会使用 默认字体显示页面。代码如下所示:
   			
			h1 {font-family: Georgia, serif;}
			
		因此，我们建议在所有 font-family 规则中都提供一个通用字体系列。这样就提供了 一条后路，在用户机器无法提供与规则匹配的特定字体时，就可以选择一个通用字体作为替 换。
		
- 简要描述 CSS 中 content 属性的作用。

		content 属性与 :before 及 :after 伪元素配合使用，来插入生成内容，可以在元素之 前或之后放置生成的内容。可以插入文本、图像、引号，并可以结合计数器为页面元素插入 编号。比如，查看如下代码:
		
			body {counter-reset:chapter;}
			h1:before {content:“第” counter(chapter) "章 ";} 
			h1 {counter-increment:chapter;}
			
		使用 content 属性，并结合:before 选择器和计数器 counter，可以在每个 <h1> 元 素前插入新的内容。
		
		
- CSS Sprite 是什么，谈谈这个技术的优缺点

		CSS Sprites 是一种网页图片应用处理方式，就是把网页中一些背景图片整合到一张图 片 文 件 中 ， 再 利 用 CSS 的 “background-image” ， “background- repeat” ， “background-position”的组合进行背景定位。
		
		其优点在于:
			 减少网页的 http 请求，提高性能，这也是 CSS Sprites 最大的优点，也是其 被广泛传播和应用的主要原因;
			 减少图片的字节:多张图片合并成1张图片的字节小于多张图片的字节总和; 
			 减少了命名困扰:只需对一张集合的图片命名，不需要对每一个小元素进行命名提高制作效率;
			 更换风格方便:只需要在一张或少张图片上修改图片的颜色或样式，整个网页的风格就可以改变，维护起来更加方便。
			
		诚然 CSS Sprites 是如此的强大，但是也存在一些不可忽视的缺点:
		
			 图片合成比较麻烦;
			 背景设置时，需要得到每一个背景单元的精确位置，;
			 维护合成图片时，最好只是往下加图片，而不要更改已有图片。

- CSS3有哪些新特性？

		  新增各种CSS选择器	（: not(.input)：所有 class 不是“input”的节点）
  		  圆角		   （border-radius:8px）
		  多列布局	   	  （multi-column layout）
		  阴影和反射		 （Shadow\Reflect）
		  文字特效		  （text-shadow、）
		  文字渲染		  （Text-decoration）
		  线性渐变		  （gradient）
		  旋转		   （transform）
          增加了旋转,缩放,定位,倾斜,动画，多背景
		  transform:\scale(0.85,0.90)\ translate(0px,-30px)\ skew(-9deg,0deg)\Animation:
		  
- 对 CSS3 有了解吗?列举几个 CSS3 的新特性并简要描述

		CSS3 作为 CSS 技术的升级版本，着力于模块化发展，将规范分解为一些小的模块，如 选择器、盒子模型、列表模块、背景和边框等;并加入了很多新的模块和属性，比如复杂选 择器、文字阴影、边框圆角、边框阴影、渐变、过渡、多栏布局、2D/3D 转换、动画等。
		
		其中，CSS3 提供了一些复杂选择器，用于实现页面复杂情况下的元素选择，如属性选 择器、一些伪类和伪元素选择器;渐变用于为元素设置渐变效果的背景;转换可以实现元素 的变换，比如位移、缩放、旋转等;过渡可以实现简单的动画效果;而动画属性则可以实现 复杂的动画，可以实现逐帧制作动画。


- 什么是 CSS reset?

		CSS reset，又叫做 CSS 重写或者 CSS 重置，用于改写 HTML 标签的默认样式。
		
		有些 HTML 标签在浏览器里有默认的样式，例如 p 标签有上下边距，li 标签有列表 标识符号等。这些默认样式在不同浏览器之间也会有差别，例如 ul 默认带有缩进的样式， 在 IE 下，它的缩进是通过 margin 实现的，而 Firefox 下，它的缩进是由 padding 实现的。 这必然会带来浏览器兼容问题。
		
		因此，在 CSS 代码中，可以使用 CSS 代码去掉这些默认样式，即重新定义标签样式， 从而覆盖浏览器的 CSS 默认属性，即 CSS reset。
需要注意的是，在进行样式重写时，不建议使用 * 选择器进行重写，这样会降低效率， 影响性能。


- 请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？

		 .

- 用纯CSS创建一个三角形的原理是什么？

		把上、左、右三条边隐藏掉（颜色设为 transparent）
		#demo {
		  width: 0;
		  height: 0;
		  border-width: 20px;
		  border-style: solid;
		  border-color: transparent transparent red transparent;
		}

- 一个满屏 品 字布局 如何设计?

		简单的方式：
			上面的div宽100%，
			下面的两个div分别宽50%，
			然后用float或者inline使其不换行即可



- css hack原理及常用hack

		原理：利用不同浏览器对CSS的支持和解析结果不一样编写针对特定浏览器样式。
		常见的hack有：
			1）属性hack
			2）选择器hack
			3）IE条件注释
			
		•	IE条件注释：适用于[IE5, IE9]常见格式如下
		
			<!--[if IE 6]>
				Special instructions for IE 6 here
			<![endif]-->
			
		•	选择器hack：不同浏览器对选择器的支持不一样
		
			/***** Selector Hacks ******/

			/* IE6 and below */
			* html #uno  { color: red }

			/* IE7 */
			*:first-child+html #dos { color: red }

			/* IE7, FF, Saf, Opera  */
			html>body #tres { color: red }

			/* IE8, FF, Saf, Opera (Everything but IE 6,7) */
			html>/**/body #cuatro { color: red }

			/* Opera 9.27 and below, safari 2 */
			html:first-child #cinco { color: red }

			/* Safari 2-3 */
			html[xmlns*=""] body:last-child #seis { color: red }

			/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
			body:nth-of-type(1) #siete { color: red }

			/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
			body:first-of-type #ocho {  color: red }

			/* saf3+, chrome1+ */
			@media screen and (-webkit-min-device-pixel-ratio:0) {
			 #diez  { color: red  }
			}

			/* iPhone / mobile webkit */
			@media screen and (max-device-width: 480px) {
			 #veintiseis { color: red  }
			}

			/* Safari 2 - 3.1 */
			html[xmlns*=""]:root #trece  { color: red  }

			/* Safari 2 - 3.1, Opera 9.25 */
			*|html[xmlns*=""] #catorce { color: red  }

			/* Everything but IE6-8 */
			:root *> #quince { color: red  }

			/* IE7 */
			*+html #dieciocho {  color: red }

			/* Firefox only. 1+ */
			#veinticuatro,  x:-moz-any-link  { color: red }

			/* Firefox 3.0+ */
			#veinticinco,  x:-moz-any-link, x:default  { color: red  }
				•	属性hack：不同浏览器解析bug或方法
			/* IE6 */
			#once { _color: blue }

			/* IE6, IE7 */
			#doce { *color: blue; /* or #color: blue */ }

			/* Everything but IE6 */
			#diecisiete { color/**/: blue }

			/* IE6, IE7, IE8 */
			#diecinueve { color: blue\9; }

			/* IE7, IE8 */
			#veinte { color/*\**/: blue\9; }

			/* IE6, IE7 -- acts as an !important */
			#veintesiete { color: blue !ie; } /* string after ! can be anything */


- 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？

	    	* png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.

		* 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。

		* IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。

		  浮动ie产生的双倍距离 #box{ float:left; width:10px; margin:0 0 0 100px;}

	      这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

		  渐进识别的方式，从总体中逐渐排除局部。

		  首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。
		  接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

          	css
	          .bb{
		          background-color:#f1ee18;/*所有识别*/
		          .background-color:#00deff\9; /*IE6、7、8识别*/
		          +background-color:#a200ff;/*IE6、7识别*/
		          _background-color:#1e0bd1;/*IE6识别*/
	          }

		*  IE下,可以使用获取常规属性的方法来获取自定义属性,
		   也可以使用getAttribute()获取自定义属性;
           Firefox下,只能使用getAttribute()获取自定义属性。
           解决方法:统一通过getAttribute()获取自定义属性。

		*  IE下,even对象有x,y属性,但是没有pageX,pageY属性;
           Firefox下,event对象有pageX,pageY属性,但是没有x,y属性。

		*  解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

		*  Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
		   可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。

		超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
	    	L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}


- 谈谈你对浏览器兼容性问题的理解

		浏览器的类型及版本的不同会造成 CSS 效果不尽相同，因此需要实现浏览器兼容，也 可以针对不同的浏览器编写不同的 CSS。
		目前，各主流浏览器的新版本，对于 W3C 的标准支持很好，因此，首先保证代码符 合 W3C 的标准，这是解决浏览器兼容问题的前提。
		其次，对于某些支持受限的属性，针对不同的浏览器添加相应的前缀，比如-webkit-、 -o-、-moz-。
		第三，对于 IE 的低版本，可以编写带有特定前缀的代码，实现版本识别。比如:
		另外，对于特定的兼容性问题，特殊解决。常见的特殊问题有:
			1、使用 CSS reset:对于有些 HTML 标签，浏览器默认的 margin 和 padding 不同， 可以使用 CSS 代码改写默认的样式效果，从而实现统一;
			2、IE 低版本中，不能使用 auto 关键字实现块级元素居中显示，可以改用设置父元 素的 text-align;
			3、子元素设置上外边距时，父元素需要设置边框或者外边距; 4、外边距合并问题。

- li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
		
		行框的排列会受到中间空白（回车\空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。


- 为什么要初始化CSS样式。

		- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

		- 当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。

		最简单的初始化方法： * {padding: 0; margin: 0;} （强烈不建议）

		淘宝的样式初始化代码：
		body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
		body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
		h1, h2, h3, h4, h5, h6{ font-size:100%; }
		address, cite, dfn, em, var { font-style:normal; }
		code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
		small{ font-size:12px; }
		ul, ol { list-style:none; }
		a { text-decoration:none; }
		a:hover { text-decoration:underline; }
		sup { vertical-align:text-top; }
		sub{ vertical-align:text-bottom; }
		legend { color:#000; }
		fieldset, img { border:0; }
		button, input, select, textarea { font-size:100%; }
		table { border-collapse:collapse; border-spacing:0; }


- absolute的containing block(容器块)计算方式跟正常流有什么不同？

		无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：
		1、若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；
		2、否则,则由这个祖先元素的 padding box 构成。
		如果都找不到，则为 initial containing block。

		补充：
		1. static(默认的)/relative：简单说就是它的父元素的内容框（即去掉padding的部分）
		2. absolute: 向上找最近的定位为absolute/relative的元素
		3. fixed: 它的containing block一律为根元素(html/body)，根元素也是initial containing block

- CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？

- position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？

- 对BFC规范(块级格式化上下文：block formatting context)的理解？

		（W3C CSS 2.1 规范中的一个概念,它是一个独立容器，决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用。）
		 一个页面是由很多个 Box 组成的,元素的类型和 display 属性,决定了这个 Box 的类型。
		 不同类型的 Box,会参与不同的 Formatting Context（决定如何渲染文档的容器）,因此Box内的元素会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响。
		 
	       创建规则：
			1 根元素
			2 浮动元素（float不是none）
			3 绝对定位元素（position取值为absolute或fixed）
			4 display取值为inline-block,table-cell, table-caption,flex, inline-flex之一的元素
			5 overflow不是visible的元素
		作用：
			1 可以包含浮动元素
			2 不被浮动元素覆盖
			3 阻止父子元素的margin折叠
		 
- css定义的权重

		以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下例子是演示各种定义的权重值：

		/*权重为1*/
		div{
		}
		/*权重为10*/
		.class1{
		}
		/*权重为100*/
		#id1{
		}
		/*权重为100+1=101*/
		#id1 div{
		}
		/*权重为10+1=11*/
		.class1 div{
		}
		/*权重为10+10+1=21*/
		.class1 .class2 div{
		}

		如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现


- 内联元素可以实现浮动吗?

		在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种 元素。因此，对于内联元素，如果设置为浮动，会产生和块级框相同的效果。
		
		
- 请解释一下为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式

		*清除浮动的方式
		
			1 容器元素闭合标签前添加额外元素并设置clear: both
			2 父元素触发块级格式化上下文(见块级可视化上下文部分)
			3 设置容器元素伪元素进行清理推荐的清理浮动方法

			/**
			* 在标准浏览器下使用
			* 1 content内容为空格用于修复opera下文档中出现
			*   contenteditable属性时在清理浮动元素上下的空白
			* 2 使用display使用table而不是block：可以防止容器和
			*   子元素top-margin折叠,这样能使清理效果与BFC，IE6/7
			*   zoom: 1;一致
			**/

			.clearfix:before,
			.clearfix:after {
			    content: " "; /* 1 */
			    display: table; /* 2 */
			}

			.clearfix:after {
			    clear: both;
			}

			/**
			* IE 6/7下使用
			* 通过触发hasLayout实现包含浮动
			**/
			.clearfix {
			    *zoom: 1;
			}


- 如何清除浮动元素所带来的影响?

		浮动定位是指将元素排除在普通流之外，并且将它放置在包含框的左边或者右边，但是 依旧位于包含框之内。也就是说，浮动的框可以向左或向右移动，直到它的外边缘碰到包含 框或另一个浮动框的边框为止。
		
		由于浮动框不在文档的普通流中，所以元素浮动之后，其原有位置不再保留，其他元素 的位置会受到影响。
		
		如果需要清除左侧或者右侧浮动元素带来的影响，则可以使用 clear 属性来设置。另 外，包含框内的子元素浮动后，如果包含框没有设置具体的高度，则其高度会发生变化，此 时，可以使用 overflow 属性来清除子元素浮动后带来的影响。



- 移动端的布局用过媒体查询吗？

- CSS优化、提高性能的方法有哪些？

- 浏览器是怎样解析CSS选择器的？

- 在网页中的应该使用奇数还是偶数的字体？为什么呢？

- margin和padding分别适合什么场景使用？

- 抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

- 元素竖向的百分比设定是相对于容器的高度吗？

- 全屏滚动的原理是什么？用到了CSS的那些属性？

- 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？

- 视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）

- ::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。

- 如何修改chrome记住密码后自动填充表单的黄色背景 ？

- 你对line-height是如何理解的？

- 设置元素浮动后，该元素的display值是多少？（自动变成display:block）

- 怎么让Chrome支持小于12px 的文字？

- 让页面里的字体变清晰，变细用CSS怎么做？（-webkit-font-smoothing: antialiased;）

- font-style属性可以让它赋值为“oblique” oblique是什么意思？

- position:fixed;在android下无效怎么处理？

- 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）

		多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms


- display:inline-block 什么时候会显示间隙？(携程)

		移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing

- overflow: scroll时不能平滑滚动的问题怎么处理？

- 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。

- png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
	
		GIF:
			8位像素，256色
			无损压缩
			支持简单动画
			支持boolean透明
			适合简单动画
		JPEG：
			颜色限于256
			有损压缩
			可控制压缩质量
			不支持透明
			适合照片
		PNG：
			有PNG8和truecolor PNG
			PNG8类似GIF颜色上限为256，文件小，支持alpha透明度，无动画
			适合图标、背景、按钮


- 什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）

		如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，
		所以不如隔离开。

		因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，
		这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。

		同时这种方式不会将cookie传入Web Server，也减少了Web Server对cookie的处理分析环节，
		提高了webserver的http请求的解析速度。


- style标签写在body后与body前有什么区别？

- 使用 CSS 预处理器吗？喜欢那个？

		SASS (SASS、LESS没有本质区别，只因为团队前端都是用的SASS)


- 什么是CSS 预处理器 / 后处理器？

		- 预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less，增强了css代码的复用性，
		  还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。

		- 后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的
		  是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。

- IE6浏览器有哪些常见的bug,缺陷或者与标准不一致的地方,如何解决

		•IE6不支持min-height，解决办法使用css hack：
			.target {
			    min-height: 100px;
			    height: auto !important;
			    height: 100px;   // IE6下内容高度超过会自动扩展高度
			}
			
		•ol内li的序号全为1，不递增。解决方法：为li设置样式display: list-item;
		
		•未定位父元素overflow: auto;，包含position: relative;子元素，子元素高于父元素时会溢出。解决办法：
			1）子元素去掉position: relative;; 
			2）不能为子元素去掉定位时，父元素position: relative;
			
			<style type="text/css">
				.outer {
				    width: 215px;
				    height: 100px;
				    border: 1px solid red;
				    overflow: auto;
				    position: relative;  /* 修复bug */
				}
				.inner {
				    width: 100px;
				    height: 200px;
				    background-color: purple;
				    position: relative;
				}
			</style>

			<div class="outer">
			    <div class="inner"></div>
			</div>
			
			
		•IE6只支持a标签的:hover伪类，解决方法：使用js为元素监听mouseenter，mouseleave事件，添加类实现效果：
			<style type="text/css">
				.p:hover,
				.hover {
				    background: purple;
				}
			</style>

			<p class="p" id="target">aaaa bbbbb<span>DDDDDDDDDDDd</span> aaaa lkjlkjdf j</p>

			<script type="text/javascript">
			function addClass(elem, cls) {
			    if (elem.className) {
				elem.className += ' ' + cls;
			    } else {
				elem.className = cls;
			    }
			}
			function removeClass(elem, cls) {
			    var className = ' ' + elem.className + ' ';
			    var reg = new RegExp(' +' + cls + ' +', 'g');
			    elem.className = className.replace(reg, ' ').replace(/^ +| +$/, '');
			}

			var target = document.getElementById('target');
			if (target.attachEvent) {
			    target.attachEvent('onmouseenter', function () {
				addClass(target, 'hover');
			    });
			    target.attachEvent('onmouseleave', function () {
				removeClass(target, 'hover');
			    })
			}
			</script>
			
		•IE5-8不支持opacity，解决办法：
			.opacity {
			    opacity: 0.4
			    filter: alpha(opacity=60); /* for IE5-7 */
			    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 8*/
			}
		
		•IE6在设置height小于font-size时高度值为font-size，解决办法：font-size: 0;
		
		•IE6不支持PNG透明背景，解决办法: IE6下使用gif图片
		
		•IE6-7不支持display: inline-block解决办法：设置inline并触发hasLayout
		    display: inline-block;
		    *display: inline;
		    *zoom: 1;
		    
		•IE6下浮动元素在浮动方向上与父元素边界接触元素的外边距会加倍。解决办法： 
			1）使用padding控制间距。 
			2）浮动元素display: inline;
			这样解决问题且无任何副作用：css标准规定浮动元素display:inline会自动调整为block
		
		•通过为块级元素设置宽度和左右margin为auto时，IE6不能实现水平居中，解决方法：为父元素设置text-align: center;



## <a name='js'>JavaScript</a>


-  介绍js的基本数据类型。

		 Undefined、Null、Boolean、Number、String、Symbol(new in ECMAScript 2015)

-  介绍js有哪些内置对象？

		Object 是 JavaScript 中所有对象的父对象

		数据封装类对象：Object、Array、Boolean、Number 和 String
		其他对象：Function、Arguments、Math、Date、RegExp、Error

-  说几条写JavaScript的基本规范？

		1.不要在同一行声明多个变量。
		2.请使用 ===/!==来比较true/false或者数值
		3.使用对象字面量替代new Array这种形式
		4.不要使用全局函数。
		5.Switch语句必须带有default分支
		6.函数不应该有时候有返回值，有时候没有返回值。
		7.For循环必须使用大括号
		8.If语句必须使用大括号
		9.for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染。

-  JavaScript原型，原型链 ? 有什么特点？

		每个对象都会在其内部初始化一个属性，就是prototype(原型)，当我们访问一个对象的属性时，
		如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，
		于是就这样一直找下去，也就是我们平时所说的原型链的概念。
		关系：instance.constructor.prototype = instance.__proto__

		特点：
		JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。


		 当我们需要一个属性的时，Javascript引擎会先看当前对象中是否有这个属性， 如果没有的话，
		 就会查找他的Prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象。
			function Func(){}
			Func.prototype.name = "Sean";
			Func.prototype.getInfo = function() {
			  return this.name;
			}
			var person = new Func();//现在可以参考var person = Object.create(oldObject);
			console.log(person.getInfo());//它拥有了Func的属性和方法
			//"Sean"
			console.log(Func.prototype);
			// Func { name="Sean", getInfo=function()}


			

-  JavaScript有几种类型的值？，你能画一下他们的内存图吗？

		栈：原始数据类型（Undefined，Null，Boolean，Number、String） 
		堆：引用数据类型（对象、数组和函数）

		两种类型的区别是：存储位置不同；
		原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
		引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其
		在栈中的地址，取得地址后从堆中获得实体
		
	![Stated Clearly Image](http://www.w3school.com.cn/i/ct_js_value.gif)



-  Javascript如何实现继承？

		1、构造继承
		2、原型继承
		3、实例继承
		4、拷贝继承

		原型prototype机制或apply和call方法去实现较简单，建议使用构造函数与原型混合方式。
```javascript
		function Parent(){
        	this.name = 'wang';
		}
		
		function Child(){
			this.age = 28;
		}
		Child.prototype = new Parent();//继承了Parent，通过原型
		
		var demo = new Child();
		alert(demo.age);
		alert(demo.name);//得到被继承的属性

```
- JavaScript继承的几种实现方式？
  - 参考：[构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)，[非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)；


-  javascript创建对象的几种方式？

		javascript创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用JSON；但写法有很多种，也能混合使用。


		1、对象字面量的方式   

			person={firstname:"Mark",lastname:"Yun",age:25,eyecolor:"black"};

		2、用function来模拟无参的构造函数

			function Person(){}
			var person=new Person();//定义一个function，如果使用new"实例化",该function可以看作是一个Class
			person.name="Mark";
			person.age="25";
			person.work=function(){
			alert(person.name+" hello...");
			}
			person.work();

		3、用function来模拟参构造函数来实现（用this关键字定义构造的上下文属性）

			function Pet(name,age,hobby){
			   this.name=name;//this作用域：当前对象
			   this.age=age;
			   this.hobby=hobby;
			   this.eat=function(){
			      alert("我叫"+this.name+",我喜欢"+this.hobby+",是个程序员");
			   }
			}
			var maidou =new Pet("麦兜",25,"coding");//实例化、创建对象
			maidou.eat();//调用eat方法


		4、用工厂方式来创建（内置对象）
	
			 var wcDog =new Object();
			 wcDog.name="旺财";
			 wcDog.age=3;
			 wcDog.work=function(){
			   alert("我是"+wcDog.name+",汪汪汪......");
			 }
			 wcDog.work();


		5、用原型方式来创建

			function Dog(){
			
			 }
			 Dog.prototype.name="旺财";
			 Dog.prototype.eat=function(){
			 alert(this.name+"是个吃货");
			 }
			 var wangcai =new Dog();
			 wangcai.eat();


		5、用混合方式来创建

			function Car(name,price){
			  this.name=name;
			  this.price=price; 
			}
			 Car.prototype.sell=function(){
			   alert("我是"+this.name+"，我现在卖"+this.price+"万元");
			  }
			var camry =new Car("凯美瑞",27);
			camry.sell(); 

-  Javascript作用链域?

		全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
		当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，
		直至全局函数，这种组织形式就是作用域链。

-  谈谈This对象的理解。
- this总是指向函数的直接调用者（而非间接调用者）；
- 如果有new关键字，this指向new出来的那个对象；
- 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window；

-  eval是做什么的？

		它的功能是把对应的字符串解析成JS代码并运行；
		应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
		由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')');

-  什么是window对象? 什么是document对象?


-  null，undefined 的区别？

		null 		表示一个对象被定义了，值为“空值”；
		undefined 	表示不存在这个值。


	    typeof undefined
			//"undefined"
			undefined :是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但是还没有定义。当尝试读取时会返回 undefined； 
			例如变量被声明了，但没有赋值时，就等于undefined

		typeof null
			//"object"
			null : 是一个对象(空对象, 没有任何属性和方法)；
			例如作为函数的参数，表示该函数的参数不是对象；
	
		注意：
			在验证null时，一定要使用　=== ，因为 == 无法分别 null 和　undefined

		
		再来一个例子：

			null
			Q：有张三这个人么？
			A：有！
			Q：张三有房子么？
			A：没有！
	
			undefined
			Q：有张三这个人么？
			A：没有！
	
	参考阅读：[undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)


-  写一个通用的事件侦听器函数。

			// event(事件)工具集，来源：github.com/markyun
			markyun.Event = {
				// 页面加载完成后
				readyEvent : function(fn) {
					if (fn==null) {
						fn=document;
					}
					var oldonload = window.onload;
					if (typeof window.onload != 'function') {
						window.onload = fn;
					} else {
						window.onload = function() {
							oldonload();
							fn();
						};
					}
				},
				// 视能力分别使用dom0||dom2||IE方式 来绑定事件
				// 参数： 操作的元素,事件名称 ,事件处理程序
				addEvent : function(element, type, handler) {
					if (element.addEventListener) {
						//事件类型、需要执行的函数、是否捕捉
						element.addEventListener(type, handler, false);
					} else if (element.attachEvent) {
						element.attachEvent('on' + type, function() {
							handler.call(element);
						});
					} else {
						element['on' + type] = handler;
					}
				},
				// 移除事件
				removeEvent : function(element, type, handler) {
					if (element.removeEventListener) {
						element.removeEventListener(type, handler, false);
					} else if (element.datachEvent) {
						element.detachEvent('on' + type, handler);
					} else {
						element['on' + type] = null;
					}
				},
				// 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
				stopPropagation : function(ev) {
					if (ev.stopPropagation) {
						ev.stopPropagation();
					} else {
						ev.cancelBubble = true;
					}
				},
				// 取消事件的默认行为
				preventDefault : function(event) {
					if (event.preventDefault) {
						event.preventDefault();
					} else {
						event.returnValue = false;
					}
				},
				// 获取事件目标
				getTarget : function(event) {
					return event.target || event.srcElement;
				},
				// 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
				getEvent : function(e) {
					var ev = e || window.event;
					if (!ev) {
						var c = this.getEvent.caller;
						while (c) {
							ev = c.arguments[0];
							if (ev && Event == ev.constructor) {
								break;
							}
							c = c.caller;
						}
					}
					return ev;
				}
			};

-  ["1", "2", "3"].map(parseInt) 答案是多少？

		 [1, NaN, NaN] 因为 parseInt 需要两个参数 (val, radix)，
		 其中 radix 表示解析时用的基数。
		 map 传了 3 个 (element, index, array)，对应的 radix 不合法导致解析失败。

-  事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

		 1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。
		 2. 事件处理机制：IE是事件冒泡、Firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件；
		 3. ev.stopPropagation();（旧ie的方法 ev.cancelBubble = true;）


-  什么是闭包（closure），为什么要用它？

		闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。

		闭包的特性：

		1.函数内再嵌套函数
		2.内部函数可以引用外层的参数和变量
		3.参数和变量不会被垃圾回收机制回收

		//li节点的onclick事件都能正确的弹出当前被点击的li索引
		 <ul id="testUL">
	        <li> index = 0</li>
	        <li> index = 1</li>
	        <li> index = 2</li>
	        <li> index = 3</li>
	    </ul>
		<script type="text/javascript">
		    var nodes = document.getElementsByTagName("li");
		    for(i = 0;i<nodes.length;i+= 1){
		        nodes[i].onclick = function(){
		            console.log(i+1);//不用闭包的话，值每次都是4
		        }(i);
		    }
		</script>



		执行say667()后,say667()闭包内部变量会存在,而闭包内部函数的内部变量不会存在
		使得Javascript的垃圾回收机制GC不会收回say667()所占用的资源
		因为say667()的内部函数的执行需要依赖say667()中的变量
		这是对闭包作用的非常直白的描述

		  function say667() {
			// Local variable that ends up within closure
			var num = 666;
			var sayAlert = function() {
				alert(num);
			}
			num++;
			return sayAlert;
		}

		 var sayAlert = say667();
		 sayAlert()//执行结果应该弹出的667


-  javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？

		use strict是一种ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,

		使JS编码更加规范化的模式,消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为。
		默认支持的糟糕特性都会被禁用，比如不能用with，也不能在意外的情况下给全局变量赋值;
		全局变量的显示声明,函数必须声明在顶层，不允许在非函数代码块内声明函数,arguments.callee也不允许使用；
		消除代码运行的一些不安全之处，保证代码运行的安全,限制函数中的arguments修改，严格模式下的eval函数的行为和非严格模式的也不相同;

		提高编译器效率，增加运行速度；
		为未来新版本的Javascript标准化做铺垫。


-  如何判断一个对象是否属于某个类？

 		  使用instanceof （待完善）
	       if(a instanceof Person){
	           alert('yes');
	       }

-  new操作符具体干了什么呢?

			 1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
	  	  	 2、属性和方法被加入到 this 引用的对象中。
	 		 3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。

		var obj  = {};
		obj.__proto__ = Base.prototype;
		Base.call(obj);


-  用原生JavaScript的实现过什么功能吗？


-  Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

		hasOwnProperty

		javaScript中hasOwnProperty函数方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。
		使用方法：
		object.hasOwnProperty(proName)
		其中参数object是必选项。一个对象的实例。
		proName是必选项。一个属性名称的字符串值。

		如果 object 具有指定名称的属性，那么JavaScript中hasOwnProperty函数方法返回 true，反之则返回 false。

-  JSON 的了解？

		JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
		它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
        如：{"age":"12", "name":"back"}
        
        JSON字符串转换为JSON对象:
		var obj =eval('('+ str +')');
		var obj = str.parseJSON();
		var obj = JSON.parse(str);
		
		JSON对象转换为JSON字符串：
		var last=obj.toJSONString();
		var last=JSON.stringify(obj);

-  `[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})` 能解释一下这段代码的意思吗？


-  js延迟加载的方式有哪些？

		defer和async、动态创建DOM方式（用得最多）、按需异步载入js


-  Ajax 是什么? 如何创建一个Ajax？

		ajax的全称：Asynchronous Javascript And XML。
		异步传输+js+xml。
		所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验。

		(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象
		(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
		(3)设置响应HTTP请求状态变化的函数
		(4)发送HTTP请求
		(5)获取异步调用返回的数据
		(6)使用JavaScript和DOM实现局部刷新

-  同步和异步的区别?

	同步的概念应该是来自于OS中关于同步的概念:不同进程为协同完成某项工作而在先后次序上调整(通过阻塞,唤醒等方式).同步强调的是顺序性.谁先谁后.异步则不存在这种顺序性.
	
	
	
	同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。

	异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。

	
	
	（待完善）

-  如何解决跨域问题?

		jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面

-  页面编码和被请求的资源编码如果不一致如何处理？

-  模块化开发怎么做？

	 [ 立即执行函数](http://benalman.com/news/2010/11/immediately-invoked-function-expression/),不暴露私有成员

		    var module1 = (function(){
		    　　　　var _count = 0;
		    　　　　var m1 = function(){
		    　　　　　　//...
		    　　　　};
		    　　　　var m2 = function(){
		    　　　　　　//...
		    　　　　};
		    　　　　return {
		    　　　　　　m1 : m1,
		    　　　　　　m2 : m2
		    　　　　};
		    　　})();

	（待完善）

-  AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？

	> AMD 规范在这里：https://github.com/amdjs/amdjs-api/wiki/AMD

	> CMD 规范在这里：https://github.com/seajs/seajs/issues/242

		Asynchronous Module Definition，异步模块定义，所有的模块将被异步加载，模块加载不影响后面语句运行。所有依赖某些模块的语句均放置在回调函数中。

		 区别：

		    1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
		    2. CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：

		// CMD
		define(function(require, exports, module) {
		    var a = require('./a')
		    a.doSomething()
		    // 此处略去 100 行
		    var b = require('./b') // 依赖可以就近书写
		    b.doSomething()
		    // ...
		})

		// AMD 默认推荐
		define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
		    a.doSomething()
		    // 此处略去 100 行
		    b.doSomething()
		    // ...
		})


-  requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何
缓存的？）

-  谈一谈你对ECMAScript6的了解？

-  ECMAScript6 怎么写class么，为什么会出现class这种东西? 

-  异步加载JS的方式有哪些？

	      (1) defer，只支持IE

	      (2) async：

	      (3) 创建script，插入到DOM中，加载完毕后callBack

- documen.write和 innerHTML的区别

		document.write只能重绘整个页面

		innerHTML可以重绘页面的一部分

- DOM操作——怎样添加、移除、移动、复制、创建和查找节点?

		（1）创建新节点
		  createDocumentFragment()    //创建一个DOM片段
		  createElement()   //创建一个具体的元素
		  createTextNode()   //创建一个文本节点
		（2）添加、移除、替换、插入
		  appendChild()
		  removeChild()
		  replaceChild()
		  insertBefore() //在已有的子节点前插入一个新的子节点
		（3）查找
		  getElementsByTagName()    //通过标签名称
		  getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
		  getElementById()    //通过元素Id，唯一性

-  .call() 和 .apply() 的区别？


		  例子中用 add 来替换 sub，add.call(sub,3,1) == add(3,1) ，所以运行结果为：alert(4);

		  注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。

			function add(a,b)
			{
			    alert(a+b);
			}

			function sub(a,b)
			{
			    alert(a-b);
			}

			add.call(sub,3,1);



-  数组和对象有哪些原生方法，列举一下？

-  JS 怎么实现一个类。怎么实例化这个类

-  JavaScript中的作用域与变量声明提升？

-  如何编写高性能的Javascript？

-  那些操作会造成内存泄漏？

-  JQuery的源码看过吗？能不能简单概况一下它的实现原理？

-  jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？

-  jquery中如何将数组转化为json字符串，然后再转化回来？

-  jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？ 

-  jquery.extend 与 jquery.fn.extend的区别？

-  jQuery 的队列是如何实现的？队列可以用在哪些地方？

-  谈一下Jquery中的bind(),live(),delegate(),on()的区别？

-  JQuery一个对象可以同时绑定多个事件，这是如何实现的？

-  是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？

-  jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）

-  针对 jQuery性能的优化方法？

-  Jquery与jQuery UI 有啥区别？


		*jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等。

		*jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。
         提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等


-  JQuery的源码看过吗？能不能简单说一下它的实现原理？

-  jquery 中如何将数组转化为json字符串，然后再转化回来？

jQuery中没有提供这个功能，所以你需要先编写两个jQuery的扩展：

		$.fn.stringifyArray = function(array) {
		    return JSON.stringify(array)
		}

		$.fn.parseArray = function(array) {
		    return JSON.parse(array)
		}

		然后调用：
		$("").stringifyArray(array)

-  jQuery和Zepto的区别？各自的使用场景？

-  针对 jQuery 的优化方法？

		*基于Class的选择性的性能相对于Id选择器开销很大，因为需遍历所有DOM元素。

		*频繁操作的DOM，先缓存起来再操作。用Jquery的链式调用更好。
         比如：var str=$("a").attr("href");

		*for (var i = size; i < arr.length; i++) {}
         for 循环每一次循环都查找了数组 (arr) 的.length 属性，在开始循环的时候设置一个变量来存储这个数字，可以让循环跑得更快：
         for (var i = size, length = arr.length; i < length; i++) {}



-  Zepto的点透问题如何解决？

-  jQueryUI如何自定义组件?

-  需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

- 如何判断当前脚本运行在浏览器还是node环境中？（阿里）

		通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中

-  移动端最小触控区域是多大？

-  jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?

-  把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？

-  移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）

-  知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?

-  Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？

-  解释JavaScript中的作用域与变量声明提升？

-  那些操作会造成内存泄漏？

	    内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
        垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

        setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
		闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

-  JQuery一个对象可以同时绑定多个事件，这是如何实现的？

-  Node.js的适用场景？

-  (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?

-  解释一下 Backbone 的 MVC 实现方式？

- 什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?

- 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?

- 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?

- 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?

- 简述一下 Handlebars 的基本用法？

- 简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

- 用js实现千位分隔符?(来源：[前端农民工](http://div.io/topic/744)，提示：正则+replace)

		function commafy(num) {
			 num = num + '';
			 var reg = /(-?d+)(d{3})/;
			
			if(reg.test(num)){
			 num = num.replace(reg, '$1,$2');
			}
			return num;
		}

	
- 检测浏览器版本版本有哪些方式？

		功能检测、userAgent特征检测

		比如：navigator.userAgent
		//"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36
		  (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36"


- What is a Polyfill? 

		polyfill 是“在旧版浏览器上复制标准 API 的 JavaScript 补充”,可以动态地加载 JavaScript 代码或库，在不支持这些标准 API 的浏览器中模拟它们。
		例如，geolocation（地理位置）polyfill 可以在 navigator 对象上添加全局的 geolocation 对象，还能添加 getCurrentPosition 函数以及“坐标”回调对象，
		所有这些都是 W3C 地理位置 API 定义的对象和函数。因为 polyfill 模拟标准 API，所以能够以一种面向所有浏览器未来的方式针对这些 API 进行开发，
		一旦对这些 API 的支持变成绝对大多数，则可以方便地去掉 polyfill，无需做任何额外工作。

- 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？

		比如： html5shiv、Geolocation、Placeholder 

- 我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？


#### <a name='other'>ECMAScript6 相关</a>

- Object.is() 与原来的比较操作符“ ===”、“ ==”的区别？ 
		
		两等号判等，会在比较时进行类型转换；
		三等号判等(判断严格)，比较时不进行隐式类型转换,（类型不同则会返回false）； 

		Object.is 在三等号判等的基础上特别处理了 NaN 、-0 和 +0 ，保证 -0 和 +0 不再相同，
		但 Object.is(NaN, NaN) 会返回 true.

 		Object.is 应被认为有其特殊的用途，而不能用它认为它比其它的相等对比更宽松或严格。




#### <a name='other'>前端框架相关</a>

- react-router 路由系统的实现原理？

- React中如何解决第三方类库的问题?


## <a name='other'>其他问题</a>

- 原来公司工作流程是怎么样的，如何与其他人协作的？如何夸部门合作的？

- 你遇到过比较难的技术问题是？你是如何解决的？

- 设计模式 知道什么是singleton, factory, strategy, decrator么?

- 常使用的库有哪些？常用的前端开发工具？开发过什么应用或组件？

- HTTP method

		1	一台服务器要与HTTP1.1兼容，只要为资源实现GET和HEAD方法即可
		2	GET是最常用的方法，通常用于请求服务器发送某个资源。
		3	HEAD与GET类似，但服务器在响应中值返回首部，不返回实体的主体部分
		4	PUT让服务器用请求的主体部分来创建一个由所请求的URL命名的新文档，或者，如果那个URL已经存在的话，就用干这个主体替代它
		5	POST起初是用来向服务器输入数据的。实际上，通常会用它来支持HTML的表单。表单中填好的数据通常会被送给服务器，然后由服务器将其发送到要去的地方。
		6	TRACE会在目的服务器端发起一个环回诊断，最后一站的服务器会弹回一个TRACE响应并在响应主体中携带它收到的原始请求报文。TRACE方法主要用于诊断，用于验证请求是否如愿穿过了请求/响应链。
		7	OPTIONS方法请求web服务器告知其支持的各种功能。可以查询服务器支持哪些方法或者对某些特殊资源支持哪些方法。
		8	DELETE请求服务器删除请求URL指定的资源


- 页面重构怎么操作？

		网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。
		也就是说是在不改变UI的情况下，对网站进行优化，在扩展的同时保持一致的UI。

		对于传统的网站来说重构通常是：

		表格(table)布局改为DIV+CSS
		使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的)
		对于移动平台的优化
		针对于SEO进行优化
		深层次的网站重构应该考虑的方面

		减少代码间的耦合
		让代码保持弹性
		严格按规范编写代码
		设计可扩展的API
		代替旧有的框架、语言(如VB)
		增强用户体验
		通常来说对于速度的优化也包含在重构中

		压缩JS、CSS、image等前端资源(通常是由服务器来解决)
		程序的性能优化(如数据读写)
		采用CDN来加速资源加载
		对于JS DOM的优化
		HTTP服务器的文件缓存

- 列举IE与其他浏览器不一样的特性？
		

		1、事件不同之处：

		   	触发事件的元素被认为是目标（target）。而在 IE 中，目标包含在 event 对象的 srcElement 属性；
			
			获取字符代码、如果按键代表一个字符（shift、ctrl、alt除外），IE 的 keyCode 会返回字符代码（Unicode），DOM 中按键的代码和字符是分离的，要获取字符代码，需要使用 charCode 属性；

			阻止某个事件的默认行为，IE 中阻止某个事件的默认行为，必须将 returnValue 属性设置为 false，Mozilla 中，需要调用 preventDefault() 方法；

			停止事件冒泡，IE 中阻止事件进一步冒泡，需要设置 cancelBubble 为 true，Mozzilla 中，需要调用 stopPropagation()；
		

- 99%的网站都需要被重构是那本书上写的？

		网站重构：应用web标准进行设计（第2版）

- 什么叫优雅降级和渐进增强？

		优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会针对旧版本的IE进行降级处理了,使之在旧式浏览器上以某种形式降级体验却不至于完全不能用。
		如：border-shadow

		渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新版本浏览器才支持的功能,向页面增加不影响基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。
		如：默认使用flash上传，但如果浏览器支持 HTML5 的文件上传功能，则使用HTML5实现更好的体验；

- 是否了解公钥加密和私钥加密。

		一般情况下是指私钥用于对数据进行签名，公钥用于对签名进行验证;
		HTTP网站在浏览器端用公钥加密敏感数据，然后在服务器端再用私钥解密。


- WEB应用从服务器主动推送Data到客户端有那些方式？

	    html5提供的Websocket
	    不可见的iframe
	    WebSocket通过Flash
	    XHR长时间连接
	    XHR Multipart Streaming
	    <script>标签的长时间连接(可跨域)

- 对Node的优点和缺点提出了自己的看法？


		*（优点）因为Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求，
          因此构建在Node上的代理服务器相比其他技术实现（如Ruby）的服务器表现要好得多。
		  此外，与Node代理服务器交互的客户端代码是由javascript语言编写的，
	      因此客户端和服务器端都用同一种语言编写，这是非常美妙的事情。

		*（缺点）Node是一个相对新的开源项目，所以不太稳定，它总是一直在变，
          而且缺少足够多的第三方库支持。看起来，就像是Ruby/Rails当年的样子。


- 前端需要注意哪些SEO

	  1 合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；keywords列举出重要关键词即可
	  2 语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
	  3 重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
	  4 重要内容不要用js输出：爬虫不会执行js获取内容
	  5 少用iframe：搜索引擎不会抓取iframe中的内容
	  6 非装饰性图片必须加alt
	  7 提高网站速度：网站速度是搜索引擎排序的一个重要指标
	
	
- 你有用过哪些前端性能优化的方法？

		（1） 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
		（2） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
		（3） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
		（4） 当需要设置的样式很多时设置className而不是直接操作style。
		（5） 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
		（6） 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
		（7） 图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。
		（8） 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。
		
		  对普通的网站有一个统一的思路，就是尽量向前端优化、减少数据库操作、减少磁盘IO。向前端优化指的是，在不影响功能和体验的情况下，能在浏览器执行的不要在服务端执行，能在缓存服务器上直接返回的不要到应用服务器，程序能直接取得的结果不要到外部取得，本机内能取得的数据不要到远程取，内存能取到的不要到磁盘取，缓存中有的不要去数据库查询。减少数据库操作指减少更新次数、缓存结果减少查询次数、将数据库执行的操作尽可能的让你的程序完成（例如join查询），减少磁盘IO指尽量不使用文件系统作为缓存、减少读写文件次数等。程序优化永远要优化慢的部分，换语言是无法“优化”的。

- 如何进行网站性能优化

		•content方面
			i	减少HTTP请求：合并文件、CSS精灵、inline Image
			ii	减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
			iii	避免重定向：多余的中间访问
			iv	使Ajax可缓存
			v	非必须组件延迟加载
			vi	未来所需组件预加载
			vii	减少DOM元素数量
			viii	将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
			ix	减少iframe数量
			x	不要404
		•Server方面
			i	使用CDN
			ii	添加Expires或者Cache-Control响应头
			iii	对组件使用Gzip压缩
			iv	配置ETag
			v	Flush Buffer Early
			vi	Ajax使用GET进行请求
			vii	避免空src的img标签
		•Cookie方面
			i	减小cookie大小
			ii	引入资源的域名不要包含cookie
		•css方面
			i	将样式表放到页面顶部
			ii	不使用CSS表达式
			iii	使用不使用@import
			iv	不使用IE的Filter
		•Javascript方面
			i	将脚本放到页面底部
			ii	将javascript和css从外部引入
			iii	压缩javascript和css
			iv	删除不需要的脚本
			v	减少DOM访问
			vi	合理设计事件监听器
		•图片方面
			i	优化图片：根据实际颜色需要选择色深、压缩
			ii	优化css精灵
			iii	不要在HTML中拉伸图片
			iv	保证favicon.ico小并且可缓存
		•移动方面
			i	保证组件小于25k
			ii	Pack Components into a Multipart Document



- http状态码有那些？分别代表是什么意思？

			简单版
			[
				100  Continue	继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
				200  OK 		正常返回信息
				201  Created  	请求成功并且服务器创建了新的资源
				202  Accepted 	服务器已接受请求，但尚未处理
				301  Moved Permanently  请求的网页已永久移动到新位置。
				302 Found  		临时性重定向。
				303 See Other  	临时性重定向，且总是使用 GET 请求新的 URI。
				304  Not Modified 自从上次请求后，请求的网页未修改过。

				400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
				401 Unauthorized 请求未授权。
				403 Forbidden  	禁止访问。
				404 Not Found  	找不到如何与 URI 相匹配的资源。

				500 Internal Server Error  最常见的服务器端错误。
				503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
			]

		  完整版
		  1**(信息类)：表示接收到请求并且继续处理
			100——客户必须继续发出请求
			101——客户要求服务器根据请求转换HTTP协议版本

		  2**(响应成功)：表示动作被成功接收、理解和接受
			200——表明该请求被成功地完成，所请求的资源发送回客户端
			201——提示知道新文件的URL
			202——接受和处理、但处理未完成
			203——返回信息不确定或不完整
			204——请求收到，但返回信息为空
			205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件
			206——服务器已经完成了部分用户的GET请求

		  3**(重定向类)：为了完成指定的动作，必须接受进一步处理
			300——请求的资源可在多处得到
			301——本网页被永久性转移到另一个URL
			302——请求的网页被转移到一个新的地址，但客户访问仍继续通过原始URL地址，重定向，新的URL会在response中的Location中返回，浏览器将会使用新的URL发出新的Request。
			303——建议客户访问其他URL或访问方式
			304——自从上次请求后，请求的网页未修改过，服务器返回此响应时，不会返回网页内容，代表上次的文档已经被缓存了，还可以继续使用
			305——请求的资源必须从服务器指定的地址得到
			306——前一版本HTTP中使用的代码，现行版本中不再使用
			307——申明请求的资源临时性删除

		  4**(客户端错误类)：请求包含错误语法或不能正确执行
			400——客户端请求有语法错误，不能被服务器所理解
			401——请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
			HTTP 401.1 - 未授权：登录失败
			　　HTTP 401.2 - 未授权：服务器配置问题导致登录失败
			　　HTTP 401.3 - ACL 禁止访问资源
			　　HTTP 401.4 - 未授权：授权被筛选器拒绝
			HTTP 401.5 - 未授权：ISAPI 或 CGI 授权失败
			402——保留有效ChargeTo头响应
			403——禁止访问，服务器收到请求，但是拒绝提供服务
			HTTP 403.1 禁止访问：禁止可执行访问
			　　HTTP 403.2 - 禁止访问：禁止读访问
			　　HTTP 403.3 - 禁止访问：禁止写访问
			　　HTTP 403.4 - 禁止访问：要求 SSL
			　　HTTP 403.5 - 禁止访问：要求 SSL 128
			　　HTTP 403.6 - 禁止访问：IP 地址被拒绝
			　　HTTP 403.7 - 禁止访问：要求客户证书
			　　HTTP 403.8 - 禁止访问：禁止站点访问
			　　HTTP 403.9 - 禁止访问：连接的用户过多
			　　HTTP 403.10 - 禁止访问：配置无效
			　　HTTP 403.11 - 禁止访问：密码更改
			　　HTTP 403.12 - 禁止访问：映射器拒绝访问
			　　HTTP 403.13 - 禁止访问：客户证书已被吊销
			　　HTTP 403.15 - 禁止访问：客户访问许可过多
			　　HTTP 403.16 - 禁止访问：客户证书不可信或者无效
			HTTP 403.17 - 禁止访问：客户证书已经到期或者尚未生效
			404——一个404错误表明可连接服务器，但服务器无法取得所请求的网页，请求资源不存在。eg：输入了错误的URL
			405——用户在Request-Line字段定义的方法不允许
			406——根据用户发送的Accept拖，请求资源不可访问
			407——类似401，用户必须首先在代理服务器上得到授权
			408——客户端没有在用户指定的饿时间内完成请求
			409——对当前资源状态，请求不能完成
			410——服务器上不再有此资源且无进一步的参考地址
			411——服务器拒绝用户定义的Content-Length属性请求
			412——一个或多个请求头字段在当前请求中错误
			413——请求的资源大于服务器允许的大小
			414——请求的资源URL长于服务器允许的长度
			415——请求资源不支持请求项目格式
			416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
			417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求长。

		  5**(服务端错误类)：服务器不能正确执行一个正确的请求
			HTTP 500 - 服务器遇到错误，无法完成请求
			　　HTTP 500.100 - 内部服务器错误 - ASP 错误
			　　HTTP 500-11 服务器关闭
			　　HTTP 500-12 应用程序重新启动
			　　HTTP 500-13 - 服务器太忙
			　　HTTP 500-14 - 应用程序无效
			　　HTTP 500-15 - 不允许请求 global.asa
			　　Error 501 - 未实现
		  HTTP 502 - 网关错误
		  HTTP 503：由于超载或停机维护，服务器目前无法使用，一段时间后可能恢复正常

- 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）

		  注：这题胜在区分度高，知识点覆盖广，再不懂的人，也能答出几句，
		  而高手可以根据自己擅长的领域自由发挥，从URL规范、HTTP协议、DNS、CDN、数据库查询、
		  到浏览器流式解析、CSS规则构建、layout、paint、onload/domready、JS执行、JS API绑定等等；

		  详细版：
			1 在浏览器地址栏输入URL
			2 浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤
				i   如果资源未缓存，发起新请求
				ii  如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。
				iii 检验新鲜通常有两个HTTP头进行控制Expires和Cache-Control：
					▪HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期
					▪HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间
			3 浏览器解析URL获取协议，主机，端口，path
			4 浏览器组装一个HTTP（GET）请求报文
			5 浏览器获取主机ip地址，过程如下：
				i   浏览器缓存
				ii  本机缓存
				iii hosts文件
				iv  路由器缓存
				v   ISP DNS缓存
				vi  DNS递归查询（可能存在负载均衡导致每次IP不一样）
			6 打开一个socket与目标IP地址，端口建立TCP链接，三次握手如下：
				i   客户端发送一个TCP的SYN=1，Seq=X的包到服务器端口
				ii  服务器发回SYN=1， ACK=X+1， Seq=Y的响应包
				iii 客户端发送ACK=Y+1， Seq=Z
			7 TCP链接建立后发送HTTP请求
			8 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
			9 服务器检查HTTP请求头是否包含缓存验证信息如果验证缓存新鲜，返回304等对应状态码
			10 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
			11 服务器将响应报文通过TCP连接发送回浏览器
			12 浏览器接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下：
				i   主动方发送Fin=1， Ack=Z， Seq= X报文
				ii  被动方发送ACK=X+1， Seq=Z报文
				iii 被动方发送Fin=1， ACK=X， Seq=Y报文
				iv  主动方发送ACK=Y， Seq=X报文
			13 浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同
			14 如果资源可缓存，进行缓存
			15 对响应进行解码（例如gzip压缩）
			16 根据资源类型决定如何处理（假设资源为HTML文档）
			17 解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本，这些操作没有严格的先后顺序，以下分别解释
			18 构建DOM树：
			 	i   Tokenizing：根据HTML规范将字符流解析为标记
				ii  Lexing：词法分析将标记转换为对象并定义属性和规则
				iii DOM construction：根据HTML标记关系将对象组成DOM树
			19 解析过程中遇到图片、样式表、js文件，启动下载
			20 构建CSSOM树：
				i   Tokenizing：字符流转换为标记流
				ii  Node：根据标记创建节点
				iii CSSOM：节点创建CSSOM树
			21根据DOM树和CSSOM树构建渲染树:
				i   从DOM树的根节点遍历所有可见节点，不可见节点包括：1）script,meta这样本身不可见的标签。2)被css隐藏的节点，如display: none
				ii  对每一个可见节点，找到恰当的CSSOM规则并应用
				iii 发布可视节点的内容和计算样式
			22 js解析如下：
				i   浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时document.readystate为loading
				ii  HTML解析器遇到没有async和defer的script时，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容
				iii 当解析器遇到设置了async属性的script时，开始下载脚本并继续解析文档。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用document.write()，它们可以访问自己script和之前的文档元素
				iv  当文档完成解析，document.readState变成interactive
				v   所有defer脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用document.write()
				vi  浏览器在Document对象上触发DOMContentLoaded事件
				vii 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些内容完成载入并且所有异步脚本完成载入和执行，document.readState变为complete,window触发load事件
			23显示页面（HTML解析过程中会逐步显示页面）

		  简洁版：
			浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求；
			服务器交给后台处理完成后返回数据，浏览器接收文件（HTML、JS、CSS、图象等）；
			浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）；
			载入解析到的资源文件，渲染页面，完成。

- HTTP request报文结构是怎样的

		rfc2616中进行了定义：
			1	首行是Request-Line包括：请求方法，请求URI，协议版本，CRLF
			2	首行之后是若干行请求头，包括general-header，request-header或者entity-header，每个一行以CRLF结束
			3	请求头和消息实体之间有一个CRLF分隔
			4	根据实际请求需要可能包含一个消息实体 一个请求报文例子如下：
			
		GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
		Host: www.w3.org
		Connection: keep-alive
		Cache-Control: max-age=0
		Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
		User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
		Referer: https://www.google.com.hk/
		Accept-Encoding: gzip,deflate,sdch
		Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
		Cookie: authorstyle=yes
		If-None-Match: "2cc8-3e3073913b100"
		If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

		name=qiu&age=25
		

- HTTP response报文结构是怎样的

		rfc2616中进行了定义：
			1	首行是状态行包括：HTTP版本，状态码，状态描述，后面跟一个CRLF
			2	首行之后是若干行响应头，包括：通用头部，响应头部，实体头部
			3	响应头部和响应实体之间用一个CRLF空行分隔
			4	最后是一个可能的消息实体 响应报文例子如下：
			
		HTTP/1.1 200 OK
		Date: Tue, 08 Jul 2014 05:28:43 GMT
		Server: Apache/2
		Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT
		ETag: "40d7-3e3073913b100"
		Accept-Ranges: bytes
		Content-Length: 16599
		Cache-Control: max-age=21600
		Expires: Tue, 08 Jul 2014 11:28:43 GMT
		P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
		Content-Type: text/html; charset=iso-8859-1

		{"name": "qiu", "age": 25}

- 部分地区用户反应网站很卡，请问有哪些可能性的原因，以及解决方法？

- 从打开app到刷新出内容，整个过程中都发生了什么，如果感觉慢，怎么定位问题，怎么解决?

- 除了前端以外还了解什么其它技术么？你最最厉害的技能是什么？

- 你用的得心应手用的熟练地编辑器&开发环境是什么样子？

		Sublime Text 3 + 相关插件编写前端代码
		Google chrome 、Mozilla Firefox浏览器 +firebug 兼容测试和预览页面UI、动画效果和交互功能
		Node.js+Gulp
		git 用于版本控制和Code Review

- 对前端工程师这个职位是怎么样理解的？它的前景会怎么样？

	    前端是最贴近用户的程序员，比后端、数据库、产品经理、运营、安全都近。
		1、实现界面交互
		2、提升用户体验
		3、有了Node.js，前端可以实现服务端的一些事情


		前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分，甚至更好，

		参与项目，快速高质量完成实现效果图，精确到1px；

		与团队成员，UI设计，产品经理的沟通；

		做好的页面结构，页面重构和用户体验；

		处理hack，兼容、写出优美的代码格式；

		针对服务器的优化、拥抱最新前端技术。

- 你怎么看待Web App 、hybrid App、Native App？

- 你移动端前端开发的理解？（和 Web 前端开发的主要区别是什么？）

- 你对加班的看法？


   		加班就像借钱，原则应当是------救急不救穷



- 平时如何管理你的项目？

		先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等；

		编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；

		标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；

		页面进行标注（例如 页面 模块 开始和结束）；

		CSS跟HTML 分文件夹并行存放，命名都得统一（例如style.css）；

		JS 分文件夹存放 命名以该JS功能为准的英文翻译。

		图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理

- 如何设计突发大规模并发架构？


- 当团队人手不足，把功能代码写完已经需要加班的情况下，你会做前端代码的测试吗？

- 说说最近最流行的一些东西吧？常去哪些网站？

			ES6\WebAssembly\Node\MVVM\Web Components\React\React Native\Webpack 组件化

- 知道什么是SEO并且怎么优化么? 知道各种meta data的含义么?


- 移动端（Android IOS）怎么做好用户体验?

		清晰的视觉纵线、
		信息的分组、极致的减法、
		利用选择代替输入、
		标签及文字的排布方式、
		依靠明文确认密码、
		合理的键盘利用、

- 简单描述一下你做过的移动APP项目研发流程？

- 你在现在的团队处于什么样的角色，起到了什么明显的作用？

- 你认为怎样才是全端工程师（Full Stack developer）？

- 介绍一个你最得意的作品吧？

- 你有自己的技术博客吗，用了哪些技术？

- 对前端安全有什么看法？

- 是否了解Web注入攻击，说下原理，最常见的两种攻击（XSS 和 CSRF）了解到什么程度？

- 项目中遇到国哪些印象深刻的技术难题，具体是什么问题，怎么解决？。

- 最近在学什么东西？

- 你的优点是什么？缺点是什么？

- 如何管理前端团队?

- 最近在学什么？能谈谈你未来3，5年给自己的规划吗？
