
## 简要说明

> 原型和闭包--是javascript中最难理解、最常犯错的地方，也是和其他主流面向对象语言区别最大的两个知识点，这里面肯定少不了原型链和作用域链。学习这样的设计，有助于开阔眼界，帮助你了解编程语言的设计思路。

## 学习目录

* [深入理解javascript原型和闭包（1）——一切都是对象](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%881%EF%BC%89%E2%80%94%E2%80%94%E4%B8%80%E5%88%87%E9%83%BD%E6%98%AF%E5%AF%B9%E8%B1%A1)

* [深入理解javascript原型和闭包（2）——函数和对象的关系](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%882%EF%BC%89%E2%80%94%E2%80%94%E5%87%BD%E6%95%B0%E5%92%8C%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%85%B3%E7%B3%BB)

* [深入理解javascript原型和闭包（3）——prototype原型](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%883%EF%BC%89%E2%80%94%E2%80%94prototype%E5%8E%9F%E5%9E%8B)

* [深入理解javascript原型和闭包（4）——隐式原型](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%884%EF%BC%89%E2%80%94%E2%80%94%E9%9A%90%E5%BC%8F%E5%8E%9F%E5%9E%8B)

* [深入理解javascript原型和闭包（5）——instanceof](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%885%EF%BC%89%E2%80%94%E2%80%94instanceof)

* [深入理解javascript原型和闭包（6）——继承](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%886%EF%BC%89%E2%80%94%E2%80%94%E7%BB%A7%E6%89%BF)

* [深入理解javascript原型和闭包（7）——原型的灵活性](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%887%EF%BC%89%E2%80%94%E2%80%94%E5%8E%9F%E5%9E%8B%E7%9A%84%E7%81%B5%E6%B4%BB%E6%80%A7)

* [深入理解javascript原型和闭包（8）——简述【执行上下文】上](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%888%EF%BC%89%E2%80%94%E2%80%94%E7%AE%80%E8%BF%B0%E3%80%90%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E3%80%91%E4%B8%8A)

* [深入理解javascript原型和闭包（9）——简述【执行上下文】下](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%889%EF%BC%89%E2%80%94%E2%80%94%E7%AE%80%E8%BF%B0%E3%80%90%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E3%80%91%E4%B8%8B)

* [深入理解javascript原型和闭包（10）——this](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%8810%EF%BC%89%E2%80%94%E2%80%94this)

* [深入理解javascript原型和闭包（11）——执行上下文栈](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%8811%EF%BC%89%E2%80%94%E2%80%94%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E6%A0%88)

* [深入理解javascript原型和闭包（12）——简介【作用域】](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%8812%EF%BC%89%E2%80%94%E2%80%94%E7%AE%80%E4%BB%8B%E3%80%90%E4%BD%9C%E7%94%A8%E5%9F%9F%E3%80%91)

* [深入理解javascript原型和闭包（13）-【作用域】和【上下文环境】](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%8813%EF%BC%89-%E3%80%90%E4%BD%9C%E7%94%A8%E5%9F%9F%E3%80%91%E5%92%8C%E3%80%90%E4%B8%8A%E4%B8%8B%E6%96%87%E7%8E%AF%E5%A2%83%E3%80%91)

* [深入理解javascript原型和闭包（14）——从【自由变量】到【作用域链】](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%8814%EF%BC%89%E2%80%94%E2%80%94%E4%BB%8E%E3%80%90%E8%87%AA%E7%94%B1%E5%8F%98%E9%87%8F%E3%80%91%E5%88%B0%E3%80%90%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE%E3%80%91)

* [深入理解javascript原型和闭包（15）——闭包](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%8815%EF%BC%89%E2%80%94%E2%80%94%E9%97%AD%E5%8C%85)

* [深入理解javascript原型和闭包（16）——完结](https://github.com/RLwu/JavaScript-prototype-Closures/wiki/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E5%8E%9F%E5%9E%8B%E5%92%8C%E9%97%AD%E5%8C%85%EF%BC%8816%EF%BC%89%E2%80%94%E2%80%94%E5%AE%8C%E7%BB%93)
