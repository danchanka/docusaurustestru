---
title: 'Заголовок модуля'
---

В начале каждого [модуля](Modules.md) находится *заголовок.*

### Синтаксис

    MODULE name;
    [REQUIRE moduleName1, ..., moduleNameN;]
    [PRIORITY namespaceName1, ..., namespaceNameM;]
    [NAMESPACE namespaceName;]

### Описание

Заголовок модуля может состоять из четырех специальных инструкций, следующих в определенном порядке:

Инструкция **MODULE** задает имя модуля и является обязательной. Все модули в рамках одного [проекта](Projects.md) должны иметь уникальные имена.

Инструкция **REQUIRE** задает список модулей, от которых [зависит](Modules.md#depends) текущий модуль. Если инструкция **REQUIRE** отсутствует, то это эквивалентно зависимости только от модуля **System**.

Инструкция **PRIORITY** задает список дополнительных [пространств имен](Naming.md#namespace), которые будут иметь приоритет при [поиске](Search.md) [элементов системы](Element_identification.md).

Инструкция **NAMESPACE** задает пространство имен модуля.  

**  
**

### Параметры

*name*

Имя модуля. [Простой идентификатор](IDs.md#id-broken). Имена модулей не могут содержать символ подчеркивания.

*moduleName1, ..., moduleNameN*

Список имен модулей, от которых зависит текущий модуль. Каждое имя является простым идентификатором. 

*namespaceName1, ..., namespaceNameM*

Список имен пространств имен. Каждое имя является простым идентификатором. 

*namespaceName*

Имя пространства имен модуля. Простой идентификатор, который не может содержать символ подчеркивания. Если инструкция **NAMESPACE** не используется в заголовке, то имя пространства имен текущего модуля будет равно имени модуля. ** **

###### **Примеры**

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ModuleSample"/>