---
title: 'В структурированном представлении (EXPORT, IMPORT)'
---

Этот оператор создает действие, которое [открывает форму](Open_form.md) в [структурированном](Structured_view.md) представлении.

### Формат {#format}

В этом операторе можно задать формат, в который будут преобразованы данные формы :  **XML**, **JSON**, **DBF, CSV, XLS**, после чего сформированный файл (ы) в этом формате записывается в заданное свойство.

Экспорт формы является общим случаем оператора [экспорта данных](Data_export_EXPORT_.md).

### Импорт формы {#importForm}

Импорт формы - операция обратная открытию формы в структурированном представлении. Оператор импорта принимает на вход файл (ы) в структурированном формате, после чего разбирает его (их) и записывает полученные данные в свойства заданной формы, таким образом, чтобы при экспорте этой формы назад в импортируемый формат получить исходный файл.

Так как оператор импорта это по сути "оператор ввода", на импортируемую форму накладываются следующие ограничения:

-   Все объекты формы должны быть [числовых](Built-in_classes.md#inheritance) или [конкретных](Static_objects.md#abstract) [пользовательских](Static_objects.md) классов, причем группы объектов должны состоять ровно из одного объекта (это ограничение вытекает из того что все используемые форматы это по сути списки, то есть отображения чисел на значения).

-   Свойства на форме и [фильтры](Form_structure.md#filters) должны иметь возможность [изменения](Property_change_CHANGE_.md) на заданное значение (то есть, как правило, быть [первичными](Data_properties_DATA_.md)). Перед импортом все существующие изменения импортируемых свойств в текущей сессии отменяются.

Фильтры при импорте изменяются на значения по умолчанию классов значений этих фильтров.

При импорте данных в объекты числовых классов используется 0-based нумерация, причем в [иерархичных](Structured_view.md#hierarchy) форматах она "сквозная" (то есть когда импортируемая группа объектов встречается второй и последующий разы, нумерация объектов в ней начинается с того числа, на котором закончилась предыдущая).

При импорте из XLS и CSV без заголовков (с опцией **NOHEADER**), платформа пытается автоматически преобразовать данные к требуемому типу. Если это не удается, в свойство записывается значение **NULL**. Импорты из остальных форматов требуют правильные типы. Например, если при импорте из JSON требуется строка, а в JSON будет число (то есть не будет кавычек), платформа выдаст ошибку.

Если при импорте свойство (группа объектов) не найдено, оно игнорируется (то есть его значение остается равным **NULL**).

Импорт формы является общим случаем оператора [импорта данных](Data_import_IMPORT_.md).

### Язык

Синтаксис оператора открытия формы в структурированном представлении описывается [оператором **EXPORT**](EXPORT_operator.md). Для импорта формы используется [оператор **IMPORT**](IMPORT_operator.md).

### Примеры

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=export"/>

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=importForm"/>
