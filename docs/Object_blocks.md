---
title: 'Блоки объектов'
---

Блоки объектов [инструкции FORM](FORM_instruction.md) - добавление [объектов](#objects) (в том числе групп объектов) в структуру формы, а также [деревьев объектов](#tree) в интерактивное представление формы.

### Блок объектов {#objects}

### Синтаксис

    OBJECTS groupDeclaration1 [groupOptions1], ...., groupDeclarationN [groupOptionsN]

Каждый *groupDeclaration *является объявлением группы объектов из нескольких объектов:

    [groupName =] (objectDeclaration1, ..., objectDeclarationK)

 либо группы объектов, состоящей из одиночного объекта:

    objectDeclaration

Каждый *objectDeclaration*, объявляющий объект, имеет следующий синтаксис:

    [[name] [caption] =] classId [ON CHANGE actionId(param1, ..., paramM) | { actionOperator } ]

После объявления каждой группы объектов может быть указан набор опций *groupOptions*:

    viewType
    INIT | FIXED
    PAGESIZE pageSize 
    AFTER groupName
    BEFORE groupName
    defaultObjectsType
    IN propertyGroup
    EXTID extID
    SUBREPORT [subReportExpression]

### Описание

Один блок **OBJECTS** может содержать несколько объявлений [групп объектов](Interactive_view.md#objects), разделенных запятой. Группа объектов может содержать как несколько объектов, так и одиночный объект. В случае с объявлением одиночного объекта может использоваться упрощенный синтаксис без указания имени группы объектов и скобок. После объявления группы объектов могут указываются опции этой группы, они перечисляются друг за другом в произвольном порядке.

### Параметры

*groupName*

Имя группы объектов. [Простой идентификатор](IDs.md#id-broken). Должно быть задано, если необходимо обращаться к группе объектов, состоящей из нескольких объектов. В случае группы объектов, состоящей из одиночного объекта, имя группы объектов будет равняться имени объекта и не задается.

*name*

Имя объекта. Простой идентификатор. Должно быть задано, если класс объекта является [встроенным классом](Built-in_classes.md). В случае, когда класс объекта является [пользовательским классом](Static_objects.md), имя может не задаваться. В этом случае оно будет равняться имени класса объекта. 

*classId*

[Идентификатор класса](IDs.md#classid-broken) объекта. 

*caption*

Заголовок добавляемого объекта. [Строковый литерал](Literals.md#strliteral-broken). Если заголовок не задан, то заголовком объекта будет являться заголовок класса.

*ON CHANGE actionName(param1, ..., paramM) | { actionOperator }*

Указание [действия](Actions.md), которое будет вызываться при изменении текущего значения объекта.

*actionID*

[Идентификатор действия](IDs.md#propertyid-broken).

*param1, ..., paramM*

Список имен объектов на форме, которые будут использованы в качестве параметров действия. Количество этих объектов должно совпадать с количеством параметров действия. Имя объекта задается [простым идентификатором](IDs.md).

*actionOperator*

[Контекстно-зависимый оператор-действие](Action_operator.md#contextdependent). В качестве параметров можно использовать имена уже объявленных объектов на форме.

### *Опции группы объектов*

*viewType*

Вид [представления по умолчанию](Interactive_view.md#defaultPropertyView-broken) для группы объектов. Задается одним из ключевых слов:

-   **PANEL** - вид отображения *панель*.
-   **TOOLBAR** - вид отображения тулбар.
-   **GRID*** - *вид отображения *колонка* *таблицы*. Используется по умолчанию.

*PAGESIZE* pageSize

Указание количества считываемых объектов в таблице. По умолчанию количество определяется динамически в зависимости от размера компонента в пользовательском интерфейсе и равняется 3 \* <количество видимых строк в таблице\>. Значение 0 обозначает, что должны быть считаны все объекты.

*pageSize*

Количество считываемых объектов. [Целочисленный литерал](Literals.md#intliteral-broken).

*AFTER* groupName

*BEFORE* groupName

Указание того, что группа объектов должна быть добавлена в структуру формы непосредственно перед (ключевое слово **BEFORE**) или после (ключевое слово **AFTER**) заданной группы объектов. Чаще всего используется вместе с механизмом [расширения форм](Form_extension.md). Если группа, перед (после) которой надо добавлять, находится в дереве, она должна быть первой (последней) в этом дереве.

*groupName*

[Имя группы объектов](#groupName-broken). 

*defaultObjectsType*

Указание того, какой из наборов объектов создаваемой группы объектов будет являться текущим после изменения активных фильтров:

-   **FIRST** - указывает на то, что [объектами по умолчанию](Interactive_view.md#defaultobject) будет первый набор объектов
-   **LAST** - последний
-   **PREV** - предыдущий

Если опция не указана, то платформа определяет какую опцию использовать в зависимости от текущих фильтров.

*IN** **propertyGroup*

Указание [группы свойств и действий](Groups_of_properties_and_actions.md), которой принадлежит группа объектов. Используется только в [иерархическом](Structured_view.md#hierarchy) представлении.

**propertyGroup* - *имя группы свойств. [Составной идентификатор](IDs.md#cid-broken).

*EXTID extID*

Указание имени, которое будет использоваться для [экспорта / импорта](Structured_view.md#extid) этой группы объектов. Используется только в [структурированном](Structured_view.md) представлении.

*extId*

Строковый литерал.

*SUBREPORT*

Указание того, что при [построении иерархии отчетов](Print_view.md#buildhierarchy) для данной группы объектов нужно создавать отдельный файл [отчета](Print_view.md).

*subReportExpression*

Выражение, значение которого будет использовано в качестве имени файла [отчета](Print_view.md) для создаваемой группы объектов. В качестве параметров можно использовать имена уже объявленных объектов на форме. Предполагается, что значения этих объектов будут [переданы](Open_form.md#params) при открытии формы [в печатном представлении](In_a_print_view_PRINT_.md) (если этого не будет сделано, они будут считаться равными **NULL**).

### Примеры


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=FormSample&block=objects"/>


<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=FormSample&block=view"/>

  

### **Блок дерева объектов** {#tree}

### Синтаксис

    TREE [name] groupDeclaration1 [parentBlock1], ...., groupDeclarationN [parentBlockN] [treeOptions]

Каждый g*roupDeclaration* является объявлением группы объектов, полностью аналогичным объявлению в блоке объектов, описанном выше. Каждый *parentBlock* может быть описан одним из двух вариантов:

    PARENT propertyId
    (PARENT propertyId1, ..., propertyIdK)

Первый вариант используется если группа объектов, для который указывается этот блок, состоит из одного объекта, второй - из нескольких.

После объявления каждого дерева объектов может быть указан набор опций tree*Options*:

    AFTER groupName
    BEFORE groupName

### Описание

*Блок дерева объектов* позволяет создавать [дерево объектов](Interactive_view.md#tree). Первая указанная группа объектов будет формировать список объектов верхнего уровня, у каждого из которых будет дочерний список объектов второй указанной группы объектов и т. д.

С помощью блока **PARENT** можно создавать [иерархические группы объектов](Interactive_view.md#treegroup-broken). Для этого указывается свойство, которое для объекта (либо нескольких объектов, в случае, если группа объектов содержит несколько объектов) определяет его родительский элемент.

### Параметры

*name*

Имя создаваемого дерева объектов*.* [Простой идентификатор](IDs.md#id-broken). 

*propertyId*

[Идентификатор свойства](IDs.md#propertyid-broken), определяющего иерархию для группы объектов, состоящей из одиночного объекта. Указанное свойство должно иметь ровно один параметр, и возвращать в качестве значения родительский объект передаваемого объекта (либо **NULL** если передаваемый объект - самый верхний)

*propertyId1, ..., propertyIdK*

Список идентификаторов свойств, определяющих иерархию для группы объектов, состоящей из нескольких объектов. Все указанные свойства должны иметь такое же количество параметров, как и количество объектов в группе объектов. Каждое из этих свойств должно возвращать в качестве значения один из родительских объектов передаваемых объектов (либо **NULL** если передаваемый набор объектов - самый верхний). Первое свойство должно возвращать первый родительский объект, второе свойство - второй объект, и т. д.

### *Опции дерева объектов*

AFTER groupName

BEFORE groupName

Указание того, что дерево объектов должно быть добавлена в структуру формы непосредственно перед (ключевое слово **BEFORE**) или после (ключевое слово **AFTER**) заданной группы объектов. Чаще всего используется вместе с механизмом [расширения форм](Form_extension.md). Если группа, перед (после) которой надо добавлять, находится в дереве, она должна быть первой (последней) в этом дереве.

*groupName*

[Имя группы объектов](#groupName-broken). 

### Примеры


<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=FormSample&block=tree"/>

  
