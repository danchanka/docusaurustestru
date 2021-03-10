---
title: 'Оператор ACTIVE TAB'
---

Оператор **ACTIVE TAB **- создание [свойства](Свойства.md), реализующего проверку [активности](Активность_ACTIVE.md) закладки.

### Синтаксис 

    ACTIVE TAB formName.componentSelector

### Описание

Оператор **ACTIVE TAB** создает свойство, которое возвращает **TRUE**, если указанная закладка активна на [форме](Формы.md). 

### Параметры

*formName*

Имя формы. [Составной идентификатор](Идентификаторы.md#cid-broken).

**componentSelector*  
*

[Селектор](Инструкция_DESIGN.md) компонента дизайна. Компонент должен быть закладкой на панели вкладок.

### Примеры

  

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=OperatorPropertySample&block=activetab"/>
