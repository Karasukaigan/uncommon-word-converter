# 生僻字转换器
将输入的汉字转换为同音字。  
使用JavaScript编写，运行在Node.js+Express搭建的本地服务器上。  
拼音库来自[sxei](https://github.com/sxei)的储存库[pinyinjs](https://github.com/sxei/pinyinjs)。  
<img src="https://github.com/Karasukaigan/uncommon-word-converter/blob/main/public/img/screenshot.png" alt="生僻字转换器" style="width: 700px;">
## 原理
输入的文本由浏览器通过JQuery的ajax()方法向服务器发送AJAX请求，服务器接收到文本后利用拼音库逐字解析、替换（会忽略不能被解析的字符，例如数字），然后将结果返回给浏览器，最后由浏览器把结果渲染到页面上。  
## 安装方法
1.安装Node.js  
2.安装cnpm  
3.运行**install.bat**安装Express  
4.运行**run.bat**启动  
