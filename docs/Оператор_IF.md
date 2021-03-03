---
title: 'Оператор IF'
---

Оператор **IF** - создание [свойства](Свойства.md), реализующего [выбор](Выбор_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE.md) значения по условию (одиночная форма). 

### Синтаксис

    result IF condition 

### Описание

Оператор **IF **создает свойство, которое возвращает заданное значение при выполнении некоторого условия. Если условие не выполняется, свойство возвращает **NULL**.

### Параметры

*result*

[Выражение](Выражения.md), значение которого определяет результат.

*condition*

Выражение, значение которого определяет условие.

### Примеры


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=if"/>

**  
**
