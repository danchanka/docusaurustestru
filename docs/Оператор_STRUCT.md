---
title: 'Оператор STRUCT'
---

Оператор **STRUCT** - создание [свойства](Свойства.md), которое создает [структуру](Операции_со_структурами_STRUCT.md).

### Синтаксис

    STRUCT(expr1, ..., exprN)   

### Описание

Оператор **STRUCT** создает свойство, значением которого будет структура, созданная из переданных объектов. 

### Параметры

*expr1, ..., exprN*

Список [выражений](Выражения.md), значения которых будут являться элементами структуры. Список не может быть пустым.

### Примеры


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=struct"/>

**  
**
