# JavaScript 闭包


## 简单介绍

***

### 什么是闭包？

* 闭包是一种特殊的对象，简单讲，闭包就是指有权访问另一个函数作用域中的变量的函数。<br>
* 它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。

### 如何创建闭包

* 创建闭包最常见方式，就是在一个函数内部创建另一个函数。下面例子中的 closure 就是一个闭包：

```
function func(){
  var a = 1,b = 2;
  
  function closure(){
    return a+b;
  }
  return closure;
}
```
闭包的作用域链包含着它自己的作用域，以及包含它的函数的作用域和全局作用域。

### 闭包使用中应注意的问题

* 通常，函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止。

```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2));  // 7
console.log(add10(2)); // 12
// 释放对闭包的引用
add5 = null;
add10 = null;
```

add5 和 add10 都是闭包。它们共享相同的函数定义，但是保存了不同的环境。在 add5 的环境中，x 为 5。而在 add10 中，x 则为 10。最后通过 null 释放了 add5 和 add10 对闭包的引用。

> 注：<br/>
在javascript中，如果一个对象不再被引用，那么这个对象就会被垃圾回收机制回收；<br/>
如果两个对象互相引用，而不再被第3者所引用，那么这两个互相引用的对象也会被回收。

* 闭包只能取得包含函数中任何变量的最后一个值，这是因为闭包所保存的是整个变量对象，而不是某个特殊的变量。

```
function test(){
  var arr = [];
  for(var i = 0;i < 10;i++){
    arr[i] = function(){
      return i;
    };
  }
  for(var a = 0;a < 10;a++){
    console.log(arr[a]());
  }
}
test(); // 连续打印 10 个 10
```

对于上面的情况，如果我们改变代码如下：

```
function test(){
  var arr = [];
  for(let i = 0;i < 10;i++){  // 仅在这里作出了改动
    arr[i] = function(){
      return i;
    };
  }
  for(var a = 0;a < 10;a++){
    console.log(arr[a]());
  }
}
test(); // 打印 0 到 9
```

> 为什么把上面第三行代码的 var i = 0 改为 let i = 0 后，调用 test() ，就会打印 1到9 了呢？<br/>
> javascript 闭包是如何处理父函数中 let 形成的块级作用域中的变量呢？<br/>
> 解释如下：

```
当你用var的时候，如下：


函数1作用域
for(var i = 0; i < 10; i++) { 函数1作用域
        我在函数1作用域中
        arr[i] = function() { 函数2作用域
          我在函数2作用域中
          return i;
        };
}
函数1作用域
console.log(i); 毫无疑问，执行到这里的时候，i是10，既然这里是10
                那么在函数2作用域中访问i也是10也就不足为奇了
                因为函数2作用域中没有，向上去函数1作用域中找
                同一作用域中同一变量名的变量值肯定是相同的(未修改的情况下)
```

--------------------------------------分界线-------------------------------------

```
当你用let的时候，如下：

块1作用域
for(let i = 0; i < 10; i++) { 块2作用域
    我在块2作用域中
    console.log(i); // 毫无疑问，这里的i从0依次增加到10  
    arr[i] = function() { 块3作用域
      我在块3作用域中
      return i;
    };
}
块1作用域
当你换成let的时候，读取i的时候，在当前作用域（块3）中没有找到，向上一个作用域（块2）寻找，在块2中发现i，于是拿到值。
```

### 闭包中的this对象

```
var name = "The Window";
var obj = {
  name: "My Object",
  
  getName: function(){
    return function(){
      return this.name;
    };
  }
};
console.log(obj.getName()());  // The Window
```

obj.getName()()实际上是在全局作用域中调用了匿名函数，this指向了window。这里要理解函数名与函数功能（或者称函数值）是分割开的，不要认为函数在哪里，其内部的this就指向哪里。**匿名函数的执行环境具有全局性，因此其 this 对象通常指向 window。**

```
var name = "The Window";
var obj = {
  name: "My Object",
  
  getName: function(){
    var that = this;
    return function(){
      return that.name;
    };
  }
};
console.log(obj.getName()());  // My Object
```

### 闭包的简单应用

应用闭包的主要场合是：设计私有的方法和变量。<br/>
任何在函数中定义的变量，都可以认为是私有变量，因为不能在函数外部访问这些变量。私有变量包括函数的参数、局部变量和函数内定义的其他函数。<br/>
把有权访问私有变量的公有方法称为**特权方法（privileged method）**。

```
function Animal(){
  
  // 私有变量
  var series = "哺乳动物";
  function run(){
    console.log("Run!!!");
  }
  
  // 特权方法
  this.getSeries = function(){
    return series;
  };
}
```

* **模块模式（The Module Pattern）**：为单例创建私有变量和方法。<br/>
* **单例（singleton）**：指的是只有一个实例的对象。JavaScript 一般以对象字面量的方式来创建一个单例对象。

```
var singleton = {
  name: "percy",
  speak:function(){
    console.log("speaking!!!");
  },
  getName: function(){
    return this.name;
  }
};
```

* 上面是普通模式创建的单例，下面使用模块模式创建单例：

```
var singleton = (function(){
  
  // 私有变量
  var age = 22;
  var speak = function(){
    console.log("speaking!!!");
  };
  
  // 特权（或公有）属性和方法
  return {
    name: "percy",
    getAge: function(){
      return age;
    }
  };
})();
```

**匿名函数最大的用途是创建闭包**，并且还可以构建命名空间，以减少全局变量的使用。从而使用闭包模块化代码，减少全局变量的污染。

```
var objEvent = objEvent || {};
(function(){ 
    var addEvent = function(){ 
      // some code
    };
    function removeEvent(){
      // some code
    }
    objEvent.addEvent = addEvent;
    objEvent.removeEvent = removeEvent;
})();
```
在这段代码中函数 addEvent 和 removeEvent 都是局部变量，但我们可以通过全局变量 objEvent 使用它，这就大大减少了全局变量的使用，增强了网页的安全性。<br/>

### 一个闭包计数器

```
var countNumber = (function(){
  var num = 0;
  return function(){
    return ++num;
  };
})();
```

### 闭包的缺陷

> 闭包的缺点就是常驻内存会增大内存使用量，并且使用不当很容易造成内存泄露。<br/>
> 如果不是因为某些特殊任务而需要闭包，在没有必要的情况下，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。

### 来一些有关闭包的面试题

```
function fun(n,o){
  console.log(o);
  return {
    fun: function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0);  // ?
a.fun(1);        // ?        
a.fun(2);        // ?
a.fun(3);        // ?
var b = fun(0).fun(1).fun(2).fun(3);  // ?
var c = fun(0).fun(1);  // ?
c.fun(2);        // ?
c.fun(3);        // ?
```

* 答案：

```
undefined
0
0
0
undefined, 0, 1, 2
undefined, 0
1
1
```
* 你答对了么？
