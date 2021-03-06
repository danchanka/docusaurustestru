---
title: 'Метапрограммирование'
---

*Метапрограммирование* - это вид программирования, связанный с написанием программного кода, который в качестве результата порождает другой программный код. Метапрограммирование используется для повторной используемости кода и ускорения времени разработки.  

### Метакод {#metacode}

В языке l**sFusion **в качестве средства метапрограммирования используется *метакод*, который описывается [инструкцией **META**](META_instruction.md). Метакод состоит из заголовка и блока кода на языке **lsFusion**, описывающего последовательность [инструкций](Instructions.md).** **Этот блок кода должен завершаться ключевым словом **END**. Рассмотрим пример метакода, который позволяет добавить на произвольную [форму](Forms.md) два [действия](Actions.md):

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=MetaSample&block=definemeta1"/>

В первой строке приведенного примера находится заголовок метакода. Он состоит из ключевого слова **META**, имени метакода и списка параметров. В данном примере метакод **addActions** имеет один параметр **formName**. Это имя формы, на которую будут добавлены действия. Рассмотрим возможные варианты использования этого метакода, которые описываются [инструкцией @](Instruction_.md). 

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=MetaSample&block=implementmeta1"/>

Инструкция использования метакода обозначается специальным символом @, затем идет имя метакода и передаваемые параметры. При генерации кода каждый параметр метакода будет заменен на значение, передаваемое в качестве параметра инструкции @, во всех местах использования параметра метакода. В данном примере параметр метакода **formName** будет заменяться на **documentForm** и на **orderForm**. Приведенные выше использования метакода порождают следующий блок кода:

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=MetaSampleResult&block=resultmeta1"/>

### Объединение лексем  {#concat}

Простой подстановки идентификатора вместо параметра метакода часто бывает недостаточно. Например, при создании большого количества новых [элементов системы](Element_identification.md) внутри метакода нужно иметь возможность задавать эти новые имена. Передавать все имена в качестве параметров метакода бывает неудобно. Поэтому в метакоде существует специальная операция \#\#, которая работает на уровне [лексем](Tokens.md). Эта операция может объединить две соседние лексемы в одну. Если же одна из объединяемых лексем является [строковым литералом](Literals.md#strliteral-broken), то результатом объединения будет один строковый литерал.

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=MetaSample&block=definemeta2"/>

Результатом использования метакода **objectProperties** будет следующий код:

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=MetaSampleResult&block=resultmeta2"/>

Также существует специальная операция \#\#\#, эквивалентная операции \#\#, за исключением того, что во втором из объединяемых литералов первый символ, если он является буквой, переводится в верхний регистр.

### Примеры

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=InstructionSample&block=meta"/>
