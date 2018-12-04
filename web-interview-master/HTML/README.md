## <a name='html'>HTML</a>

- Doctype作用？标准模式与兼容模式各有什么区别?

		（1）、<!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

		（2）、标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

- HTML5 为什么只需要写 !DOCTYPE HTML ？

		 HTML5 不基于 SGML，因此不需要对DTD（文档类型定义(Document Type Definition)）进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；

		 而HTML4.01基于SGML（标准通用标记语言）,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。


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
		
		1、介绍visibilityState
		
			这是一个HTML5新提供的一个api，主要作用就是记录当前标签页在浏览器中的激活状态。所谓“激活状态”指的是当前标签是否正在被用户浏览。
		2、应用场景
		
			监控用户行为，当用户的视角不在当前页面时，暂停加载广告，幻灯片、停止加载视频、开始加载小动画等。减少对用户宽带的占用，减少服务器压力，节省用户内存，以及到达更好的播放效果。
		
		3、属性与事件
		
			HTML5中专门为document元素添加了相关属性和事件：
			属性：document.visibilityState
			事件：document.addEventListener( "visibilitychange" , function(){})
		
		4、实例
		
			当用户在浏览器标签页间切换时，监控当前页面的状态，是否为最上层标签，决定是否开始or暂停视频：

			<!DOCTYPE html>
			<html>
			   <head>
				<meta charset="UTF-8">
				<title></title>
			   </head>
			   <body>
				<div class="con"></div>

			   </body>

			   <script src="jquery/jquery-2.2.3.js"></script>
			   <script type="text/javascript">

				document.addEventListener("visibilitychange",function(){

				if(document.visibilityState=="visible"){
				   console.log("欢迎回来！")
				   //do something
				   //继续视频播放
				}
				if(document.visibilityState=="hidden"){
				   console.log("不要走！")
				   //do something else
			   	   //暂停视频播放
				}
			})
			</script>
			</html>


- 如何在页面上实现一个圆形的可点击区域？

		1、map+area或者svg
			
			<img src="task6.jpg" width="1366" height="768" border="0" usemap="#Map" />  
			<map name="Map" id="Map">  
			 <area shape="circle" coords="100,100,50" href="https://www.baidu.com" target="_blank" />  
			</map>  

		2、border-radius
			<style>
			    .disc{
				width:100px;
				height:100px;
				background-color:dimgray;
				border-radius: 50%;
				cursor: pointer;
				position: absolute;
				left:50px;
				top:50px;
				line-height: 100px;
				text-align: center;
				color: white;
			    }
			</style>

			<div class="disc">点击区域</div>
			
			
		3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等
		
			<script>
				document.onclick = function(e){
				    var r = 50;  //圆的半径
				    var x1 = 100,  y1 = 100;  
				    var x2 = e.clientX,
					y2 = e.clientY;
				    var len=Math.abs(Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)));  
				    if(len<=50){
					console.log("Inner");
				    }else{
					console.log("Outer");
				    }
				}
			 </script>

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
		
		
-  img的title和alt有什么区别

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

