---
title: 'Оператор ACTIVATE'
---

Оператор **ACTIVATE **- создание [действия](Действия.md), [активирующего](Активация_ACTIVATE.md) указанную [форму](Формы.md), закладку, свойство или действие на форме

### Синтаксис 

    ACTIVATE FORM formName
    ACTIVATE TAB formName.componentSelector
    ACTIVATE PROPERTY formPropertyId

### Описание

Оператор **ACTIVATE** создает действие, которое активизирует форму, закладку, свойство или действие на форме.

### Параметры

*formName*

Имя формы. [Составной идентификатор](Идентификаторы.md#cid-broken).

*componentSelector*

[Селектор](Инструкция_DESIGN.md#selector-broken) компонента дизайна. Компонент должен быть закладкой на панели вкладок.

*formPropertyId*

Глобальный [идентификатор свойства или действия на форме](Идентификаторы.md#formpropertyid-broken), на которое должен перейти фокус.

### Примеры

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample&block=activate"/>

  
