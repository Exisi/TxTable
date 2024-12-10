<div align=center>
  <img style="text-align:center" src=https://raw.githubusercontent.com/Exisi/TxTable/main/favicon.ico width=15% />
  <h1>TxTable</h1>

<p>TxTable is a utility designed to quickly generate table for HTML and Markdown from any string separated by a delimiter.</p>

<p>It eliminates the need to manually create rows and columns for table, ensuring real-time conversion.</p>

Demo: [TxTable](exisi.github.io/TxTable/)

Docs: English | [中文](https://github.com/Exisi/TxTable/blob/main/README-CN.md)

</div>

## Feature

The theme of the interface corresponds to the color of the function, and different table generation methods are used by switching buttons.

- HTML
- Markdown

## HTML

![HTML](https://raw.githubusercontent.com/Exisi/TxTable/main/doc/en/1.jpg)

### Markdown

![Markdown](https://raw.githubusercontent.com/Exisi/TxTable/main/doc/en/2.jpg)

## Advanced Settings

By default, text is split using a single space, but the delimiter can also be customized through advanced settings.

Available settings include:

- Custom delimiter
- Delimiter supports regular expressions
- Remove leading and trailing whitespaces
- Remove empty lines

![Advanced Settings](https://raw.githubusercontent.com/Exisi/TxTable/main/doc/en/3.jpg)

## Using Regular Expressions for Delimiters

A regular expression delimiter splitting feature is provided, which is disabled by default.

When the regular expression feature is enabled, it will default to adding `/ /`, and you only need to input the regular expression.

![Regular Expression Settings](https://raw.githubusercontent.com/Exisi/TxTable/main/doc/en/4.jpg)

By using regular expressions, you can add spaces to the original text for alignment without affecting the table generation.

![Result](https://raw.githubusercontent.com/Exisi/TxTable/main/doc/en/5.jpg)
