---
title: 'Инструкция EXTEND FORM'
---

Инструкция **EXTEND FORM** - [расширение](Расширение_форм.md) существующей [формы](Формы.md).

### Синтаксис

    EXTEND FORM formName 
        formBlock1
        ...
        formBlockN
    ;

### Описание

Инструкция **EXTEND FORM** позволяет расширять существующую форму дополнительными [блоками формы](Инструкция_FORM.md#blocks-broken).

### Параметры

*formName*

Имя расширяемой формы. [Составной идентификатор](Идентификаторы.md#cid-broken).

*formBlock1 ... formBlockN *

Блоки формы.

### Пример


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=FormSample&block=extendform"/>

  
