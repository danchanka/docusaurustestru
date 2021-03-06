---
title: 'Экспорт данных (EXPORT)'
---

Оператор *экспорта данных* создает [действие](Actions.md), которое для всех наборов объектов, для которых значение заданного свойства (*условия*) не равно **NULL**, читает значения других заданных свойств, после чего сохраняет их в файл в заданном [формате](Structured_view.md). 

Условие в этом операторе можно не задавать, в этом случае оно считается равным [дизьюнкции](Logical_operators_AND_OR_NOT_XOR_.md) всех экспортируемых свойств (то есть хотя бы одно из экспортируемых свойств должно быть не **NULL**). 

Как и для других [операций со множествами](Set_operations.md), условие должно быть таким, чтобы операция была [корректной](Set_operations.md).

### Общий случай

Стоит отметить, что экспорт данных является частным случаем (синтаксическим сахаром) [экспорта форм](In_a_structured_view_EXPORT_IMPORT_.md), в котором экспортируемая форма создается автоматически с именем **export** и состоит из:

-   одной [группы объектов](Form_structure.md) с именем **value**, объекты которой соответствуют параметрам экспортируемых свойств (не создается, если все параметры экспортируемых свойств являются фиксированными значениями).
-   экспортируемых свойств. В качестве [группы свойств](Form_structure.md#propertygroup-broken) для создаваемых свойств на форме при этом используется [встроенная](Groups_of_properties_and_actions.md#builtin) группа **System.private**, а в качестве [группы отображения](Form_structure.md#drawgroup-broken) - созданная группа объектов. Если экспортируемое свойство одно и не имеет имени, соответствующее свойство на форме создается с именем **value**.
-   фильтра равного заданному условию.
-   заданных порядков

Соответственно, поведение оператора экспорта данных (например, определение имен результирующих колонок / ключей, [обработка значений **value**](Structured_view.md) и т.п.) полностью определяется поведением оператора экспорта формы (как если бы ему параметром передали вышеописанную форму).

### Язык

Для объявления действия, экспортирующего данные, используется [оператор **EXPORT**](EXPORT_operator.md).

### Примеры


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=exportplain"/>

  
