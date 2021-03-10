---
title: 'Оператор ACTIVE FORM'
---

Оператор **ACTIVE FORM **- создание [действия](Действия.md), проверяющего [активность](Активность_ACTIVE.md) [формы](Формы.md).

### Синтаксис

    ACTIVE FORM formName

### Описание

Оператор **ACTIVE FORM** создает действие, которое записывает в свойство **System.isActiveForm\[\]** значение активности указанной формы. Если форма активна, то записывается **TRUE**.

### Параметры

*formName*

Имя формы. [Составной идентификатор](Идентификаторы.md#cid-broken).

### Примеры


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=activeform"/>

  
