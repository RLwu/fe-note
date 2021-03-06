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
