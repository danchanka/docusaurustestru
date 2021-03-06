---
title: 'Оператор ASK'
---

Оператор **ASK **- создание действия, которое показывает пользователю сообщение в [диалоговой форме](Show_message_MESSAGE_ASK_.md#dialog).

### Синтаксис

    ASK expression 
    [[alias =] YESNO]
    [DO actionOperator [ELSE elseOperator]]

### Описание

Оператор **ASK** создает действие, которое запрашивает у пользователя подтверждение / задает пользователю вопрос.

### Параметры

*expression*

Выражение, значением которого является строка сообщения. Если значение равняется **NULL**, то вопрос не будет задан, но действие будет выполнено.

*YESNO*

Если указано, пользователю задается вопрос (Да / Нет)

*alias*

Имя локального параметра, в который будет записан ответ пользователя на задаваемый вопрос (Да - **TRUE**, Нет - **NULL**). [Простой идентификатор](IDs.md#id-broken).

*actionOperator*

[Контекстно-зависимый оператор-действие](Action_operator.md), выполняется, если ввод был успешно завершен. В качестве параметров можно использовать как верхние параметры, так и параметр ответа пользователя (если вопрос был Да/Нет)

*elseActionOperator*

[Контекстно-зависимый оператор-действие](Action_operator.md), выполняется, если ввод был отменен. В качестве параметров можно использовать только верхние параметры.

### Пример


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=ask"/>

  
