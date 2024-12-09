<div align=center>
  <img style="text-align:center" src=https://raw.githubusercontent.com/Exisi/TxTable/main/favicon.ico width=15% />
  <h1>TxTable</h1>

<p>文本转表格工具，用于为 HTML 和 Markdown 快速生成表格</p>

<p>TxTable 允许通过任意字符串间隔创建表格，而无需再为表格创建新的行和列，表格的转换始终是实时的。</p>

<!-- Demo: [TxTable]() -->

Docs: English | [中文](https://github.com/Exisi/TxTable/blob/main/README-CN.md)

</div>

# TxTable

## 功能

界面的主题对应了功能的颜色，通过切换按钮使用不同的表格生成方式。

- HTML
- Markdown

## HTML

![HTML](https://raw.githubusercontent.com/Exisi/TxTable/main/doc/zh/1.jpg)

### Markdown

![Markdown](https://raw.githubusercontent.com/Exisi/TxTable/main/img/zh/2.jpg)

## 高级设置

默认使用单个空格对文本进行分割，也可以通过高级设置对分隔符进行自定义。

提供的设置：

- 自定义分隔符
- 分隔符支持正则表达式
- 去除前后空白
- 去除空行

![高级设置](https://raw.githubusercontent.com/Exisi/TxTable/main/doc/zh/3.jpg)

## 为分割符使用正则表达式

提供了正则表达式的分割功能，需要将其启用，默认关闭。

启用正则表达式功能后会默认添加 `/ /` ，仅需要输入正则

![正则设置](https://raw.githubusercontent.com/Exisi/TxTable/main/doc/zh/4.jpg)

通过使用正则，您可以增加空格的对原有的文本进行对齐而不影响表格的生成。

![结果](https://raw.githubusercontent.com/Exisi/TxTable/main/doc/zh/5.jpg)
