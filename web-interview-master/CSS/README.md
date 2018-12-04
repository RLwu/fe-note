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


- 怎么让Chrome支持小于12px 的文字？

		可以使用Webkit 的内核的 -webkit-text-size-adjust 的私有 CSS 属性来解决：
			-webkit-text-size-adjust:none;
		
		在谷歌现在的新版本里已经无效。那么我们应该如何设置谷歌下的字体呢？我们可以使用到 css3里的一个属性：transform:scale()
			font-size:10px;
			-webkit-transform:scale(0.8);

		
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

			伪元素由双冒号和伪元素名称组成。双冒号是在当前规范中引入的，用于区分伪类和伪元素。但是伪类兼容现存样式，浏览器需要同时支持旧的伪类，比如:first-line、:first-letter、:before、:after等。


			那么现在就可以完整的回答标题中的问题了，对于CSS2之前已有的伪元素，比如:before，单冒号和双冒号的写法::before作用是一样的。


			所以，如果你的网站只需要兼容webkit、firefox、opera等浏览器，建议对于伪元素采用双冒号的写法，如果不得不兼容IE浏览器，还是用CSS2的单冒号写法比较安全。


- 如何修改chrome记住密码后自动填充表单的黄色背景 ？
			
			chrome 表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的input表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：
			input : -webkit-autofill {
			background-color : #FAFFBD ;
			background-image : none ;
			color : #000 ;
			}
			在有些情况下，这个黄色的背景会影响到我们界面的效果，尤其是在我们给input文本框使用图片背景的时候，原来的圆角和边框都被覆盖了：
			情景一：input文本框是纯色背景的
			可以对input:-webkit-autofill使用足够大的纯色内阴影来覆盖input输入框的黄色背景；如：
			input : -webkit-autofill {
			-webkit-box-shadow : 0 0 0px 1000px white inset ;
			border : 1px solid #CCC !important ;
			}
			如果你有使用圆角等属性，或者发现输入框的长度高度不太对，可以对其进行调整，除了chrome默认定义的background-color，background-image，color不能用!important提升其优先级以外，其他的属性均可使用!important提升其优先级，如：
			input : -webkit-autofill {
			-webkit-box-shadow : 0 0 0px 1000px white inset ;
			border : 1px solid #CCC !important ;
			height : 27px !important ;
			line-height : 27px !important ;
			border-radius : 0 4px 4px 0 ;
			}
			情景二：input文本框是使用图片背景的
			这个比较麻烦，目前还没找到完美的解决方法，有两种选择：
			1、如果你的图片背景不太复杂，只有一些简单的内阴影，那个人觉得完全可以使用上面介绍的方法用足够大的纯色内阴影去覆盖掉黄色背景，此时只不过是没有了原来的内阴影效果罢了。
			2、如果你实在想留住原来的内阴影效果，那就只能牺牲chrome自动填充表单的功能，使用 js 去实现，例如：
			$ ( function () {
			if ( navigator . userAgent . toLowerCase (). indexOf ( "chrome" ) >= 0 ) {
			$ ( window ). load ( function (){
			$ ( 'ul input:not(input[type=submit])' ). each ( function (){
			var outHtml = this . outerHTML ;
			$ ( this ). append ( outHtml );
			});
			});
			}
			});
			遍历的对象可能要根据你的需求去调整。如果你不想使用js，好吧，在form标签上直接关闭了表单的自动填充功能：autocomplete="off"。
			上面是在网上找到的一些方法，我是用的图片背景，经过实验如果用js的方法会导致提交表单的时候重置而无法将value传过去，没办法只能是将自动填充的功能关闭了，虽然影响了部分用户的体验，但是解决了黄色背景影响整体UI的问题。
			
		

- 你对line-height是如何理解的？

- 设置元素浮动后，该元素的display值是多少？	
		
		（自动变成display:block）
		

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
