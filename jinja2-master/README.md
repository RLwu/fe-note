### 模板转换(从DTL到Jinja2)

### 一、 三方包依赖 ( Node.js 和 npm )

####    1 安装Node.js： https://nodejs.org/en/

####    2 安装npm： https://nodejs.org/en/download/

####    3 安装完成后在终端输入命令检查是否安装成功；
        $node -v            
        $npm -v

### 二、从DTL到Jinja2--正则匹配和替换 （）

####    1 生成匹配正则表达式

#####     工具：webstorm (可选)

#####     文档参考： JSVerbalExpressions 
        https://github.com/VerbalExpressions/JSVerbalExpressions/blob/master/test/tests.js#L183

#####      编写范例-1
######     source：{% static 'js/pages/pace.min.js'  %}
######     To    ：{{ static('js/pages/pace.min.js')}}

######      在webstorm中运行如下代码：
          var VerEx = require('verbal-expressions');
          // Create an example of how to test for correctly formed URLs
          var tester = VerEx()
              .startOfLine()
              .then('{%')
              .then(' ')
              .oneOrMore()
              .then('static')
              .then(' ')
              .oneOrMore()
              .then('\'')
              .anythingBut('\' ')
              .then('\'')
              .then(' ')
              .oneOrMore()
              .then('%}')
              .endOfLine();

          // Create an example URL
          var testMe = "{% static 'js/pages/pace.min.js'  %}";

          // Use RegExp object's native test() function
          if (tester.test(testMe)) {
               console.log('We have a correct URL '); // This output will fire}
          } else {
               console.log('The URL is incorrect');
          }

          console.log(tester); // Outputs the actual expression used: /^(http)(s)?(\:\/\/)(www\.)?([^\ ]*)$/

######      运行结果：{ /^(?:\{%)(?: )+(?:static)(?: )+(?:')(?:[^' ]*)(?:')(?: )+(?:%\})$/gm

######      运行结果去掉()外的内容部分和()内部的?:，得到：
               (\{%)( )+(static)( )+(')([^' ]*)(')( )+(%\})


######      注意：
               1  替换过程中原地不变的()部分用$n代替，n取值1 2 3...
               2  单双引号分别替换

######      在pycharm中使用Replace in Path进行全局替换，替换为：

          {{ static('$6')}}

#####      编写范例-2 (步骤省略)

######     source：{% static 'js/pages/pace.min.js'  %}
######     To    ：{{ static('js/pages/pace.min.js')}}

######      在webstorm中运行如下代码：
           var VerEx = require('verbal-expressions');
           // Create an example of how to test for correctly formed URLs
           var tester = VerEx()
               .startOfLine()
               .then('{%')
               .then(' ')
               .oneOrMore()
               .then('trans')
               .then(' ')
               .oneOrMore()
               .then('"')
               .anythingBut('"')
               .then('"')
               .then(' ')
               .oneOrMore()
               .then('%}')
               .endOfLine();

               // Create an example URL
               var testMe = '{%  trans  " Home home" %}';

               // Use RegExp object's native test() function
               if (tester.test(testMe)) {
                     console.log('We have a correct URL '); // This output will fire}
               } else {
                     console.log('The URL is incorrect');
               }

              console.log(tester); // Outputs the actual expression used: /^(http)(s)?(\:\/\/)(www\.)?([^\ ]*)$/
######      运行结果：{ /^(?:\{%)(?: )+(?:trans)(?: )+(?:")(?:[^"]*)(?:")(?: )+(?:%\})$/gm

######      运行结果去掉()外的内容部分和()内部的?:，得到：
             (\{%)( )+(trans)( )+(")([^"]*)(")( )+(%\})

######      在pycharm中使用Replace in Path进行全局替换，替换为：
          {% trans %}$6{% endtrans %}
