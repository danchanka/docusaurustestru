---
title: 'Активность (ACTIVE)'
---

Оператор *активности* создает свойство, которое определяет, является ли активным один из следующих элементов формы:

-   Свойство - находится ли фокус на заданном [свойстве](Свойства.md) на форме.
-   Закладка - является ли одна из закладок активной в заданной [панели закладок](Дизайн_формы.md#tab-broken).
-   Форма - определяет активна ли у пользователя заданная [форма](Формы.md).

### Язык

Для создания свойства, определяющего активность закладки, используется [оператор **ACTIVE TAB**](Оператор_ACTIVE_TAB.md). Определение активности формы реализуется путем создания действия с использованием [оператора **ACTIVE FORM**](Оператор_ACTIVE_FORM.md).

### Примеры

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=activetab"/>


<CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample&block=activeform"/>

  
