module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Установить',
      items: [
        'Установить', 
        {
          type: 'category',
          label: 'Автоматическая установка',
          items: [
            'Автоматическая_установка', 
            'Разработка_авто', 
            'Выполнение_авто', 
          ]
        },
        {
          type: 'category',
          label: 'Ручная установка',
          items: [
            'Ручная_установка', 
            'Разработка_ручная', 
            'Выполнение_ручная', 
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Изучить',
      items: [
        'Изучить', 
        {
          type: 'category',
          label: 'Парадигма',
          items: [
            'Парадигма', 
            {
              type: 'category',
              label: 'Логическая модель',
              items: [
                'Логическая_модель', 
                {
                  type: 'category',
                  label: 'Логика предметной области',
                  items: [
                    'Логика_предметной_области', 
                    {
                      type: 'category',
                      label: 'Свойства',
                      items: [
                        'Свойства', 
                        {
                          type: 'category',
                          label: 'Операторы',
                          items: [
                            'Операторы', 
                            'Первичные_свойства_DATA', 
                            'Композиция_JOIN', 
                            'Константа', 
                            {
                              type: 'category',
                              label: 'Операции с примитивами',
                              items: [
                                'Операции_с_примитивами', 
                                'Арифметические_операторы_+_-_...', 
                                'Логические_операторы_AND_OR_NOT_XOR', 
                                'Операторы_сравнения_=_...', 
                                'Экстремумы_MAX_MIN', 
                                'Строковые_операторы_+_CONCAT_SUBSTRING', 
                                'Операции_со_структурами_STRUCT', 
                                'Преобразование_типа', 
                              ]
                            },
                            {
                              type: 'category',
                              label: 'Операции с классами',
                              items: [
                                'Операции_с_классами', 
                                'Классификация_IS_AS', 
                                'Сигнатура_свойства_CLASS', 
                              ]
                            },
                            'Выбор_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE', 
                            {
                              type: 'category',
                              label: 'Операции с множествами',
                              items: [
                                'Операции_с_множествами', 
                                'Группировка_GROUP', 
                                'Разбиение_Упорядочивание_PARTITION_..._ORDER', 
                                'Рекурсия_RECURSION', 
                                'Распределение_UNGROUP', 
                              ]
                            },
                          ]
                        },
                      ]
                    },
                    {
                      type: 'category',
                      label: 'Действия',
                      items: [
                        'Действия', 
                        'Сессии_изменений', 
                        {
                          type: 'category',
                          label: 'Оператоpы',
                          items: [
                            'Оператоpы', 
                            {
                              type: 'category',
                              label: 'Порядок выполнения',
                              items: [
                                'Порядок_выполнения', 
                                'Последовательность_...', 
                                'Вызов_EXEC', 
                                'Цикл_FOR', 
                                'Ветвление_CASE_IF_MULTI', 
                                'Рекурсивный_цикл_WHILE', 
                                'Прерывание_BREAK', 
                                'Выход_RETURN', 
                                'Создание_потоков_NEWTHREAD_NEWEXECUTOR', 
                                'Обработка_исключений_TRY', 
                              ]
                            },
                            {
                              type: 'category',
                              label: 'Изменение состояния',
                              items: [
                                'Изменение_состояния', 
                                'Изменение_свойства_CHANGE', 
                                'Добавление_объектов_NEW', 
                                'Изменение_класса_CHANGECLASS_DELETE', 
                              ]
                            },
                            {
                              type: 'category',
                              label: 'Управление сессиями',
                              items: [
                                'Управление_сессиями', 
                                'Применение_изменений_APPLY', 
                                'Отмена_изменений_CANCEL', 
                                'Создание_сессий_NEWSESSION_NESTEDSESSION', 
                                'Предыдущее_значение_PREV', 
                                'Операторы_изменений_SET_CHANGED_...', 
                              ]
                            },
                            {
                              type: 'category',
                              label: 'Взаимодействие с пользователем / ИС',
                              items: [
                                'Взаимодействие_с_пользователем_ИС', 
                                'Показ_сообщения_MESSAGE_ASK', 
                                {
                                  type: 'category',
                                  label: 'Работа с файлами',
                                  items: [
                                    'Работа_с_файлами', 
                                    'Чтение_файла_READ', 
                                    'Запись_файла_WRITE', 
                                    'Импорт_данных_IMPORT', 
                                    'Экспорт_данных_EXPORT', 
                                  ]
                                },
                                'Отправка_почты_EMAIL', 
                              ]
                            },
                          ]
                        },
                      ]
                    },
                    {
                      type: 'category',
                      label: 'События',
                      items: [
                        'События', 
                        'Простые_события', 
                        'Вычисляемые_события', 
                      ]
                    },
                    {
                      type: 'category',
                      label: 'Ограничения',
                      items: [
                        'Ограничения', 
                        'Простые_ограничения', 
                        {
                          type: 'category',
                          label: 'Классы',
                          items: [
                            'Классы', 
                            'Встроенные_классы', 
                            'Пользовательские_классы', 
                            'Статические_объекты', 
                          ]
                        },
                        'Агрегации', 
                      ]
                    },
                  ]
                },
                {
                  type: 'category',
                  label: 'Логика представлений',
                  items: [
                    'Логика_представлений', 
                    {
                      type: 'category',
                      label: 'Формы',
                      items: [
                        'Формы', 
                        {
                          type: 'category',
                          label: 'Структура формы',
                          items: [
                            'Структура_формы', 
                            'Группы_свойств_и_действий', 
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Представления формы',
                          items: [
                            'Представления_формы', 
                            {
                              type: 'category',
                              label: 'Интерактивное представление',
                              items: [
                                'Интерактивное_представление', 
                                'Дизайн_формы', 
                                'События_формы', 
                                {
                                  type: 'category',
                                  label: 'Операторы формы',
                                  items: [
                                    'Операторы_формы', 
                                    {
                                      type: 'category',
                                      label: 'Ввод значения',
                                      items: [
                                        'Ввод_значения', 
                                        'Ввод_примитива_INPUT', 
                                        'Запрос_значения_REQUEST', 
                                      ]
                                    },
                                    {
                                      type: 'category',
                                      label: 'Операции с группами объектов',
                                      items: [
                                        'Операции_с_группами_объектов', 
                                        'Поиск_SEEK', 
                                        'Фильтр_FILTER', 
                                        'Порядок_ORDER', 
                                        'Отображение_VIEW', 
                                      ]
                                    },
                                    {
                                      type: 'category',
                                      label: 'Управление фокусом',
                                      items: [
                                        'Управление_фокусом', 
                                        'Активация_ACTIVATE', 
                                        'Активность_ACTIVE', 
                                      ]
                                    },
                                  ]
                                },
                              ]
                            },
                            {
                              type: 'category',
                              label: 'Статичное представление',
                              items: [
                                'Статичное_представление', 
                                {
                                  type: 'category',
                                  label: 'Печатное представление',
                                  items: [
                                    'Печатное_представление', 
                                    'Дизайн_отчетов', 
                                  ]
                                },
                                'Структурированное_представление', 
                              ]
                            },
                          ]
                        },
                        {
                          type: 'category',
                          label: 'Открытие формы',
                          items: [
                            'Открытие_формы', 
                            'В_интерактивном_представлении_SHOW_DIALOG', 
                            'В_печатном_представлении_PRINT', 
                            'В_структурированном_представлении_EXPORT_IMPORT', 
                          ]
                        },
                      ]
                    },
                    {
                      type: 'category',
                      label: 'Навигатор',
                      items: [
                        'Навигатор', 
                        'Дизайн_навигатора', 
                      ]
                    },
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Физическая модель',
              items: [
                'Физическая_модель', 
                {
                  type: 'category',
                  label: 'Разработка',
                  items: [
                    'Разработка', 
                    {
                      type: 'category',
                      label: 'Идентификация элементов',
                      items: [
                        'Идентификация_элементов', 
                        'Именование', 
                        'Поиск', 
                      ]
                    },
                    {
                      type: 'category',
                      label: 'Модульность',
                      items: [
                        'Модульность', 
                        'Модули', 
                        'Проекты', 
                        {
                          type: 'category',
                          label: 'Расширения',
                          items: [
                            'Расширения', 
                            'Расширение_классов', 
                            'Расширение_свойств', 
                            'Расширение_действий', 
                            'Расширение_форм', 
                          ]
                        },
                      ]
                    },
                    'Метапрограммирование', 
                    {
                      type: 'category',
                      label: 'Интеграция',
                      items: [
                        'Интеграция', 
                        'Обращение_из_внешней_системы', 
                        'Обращение_из_внутренней_системы', 
                        'Обращение_к_внешней_системе_EXTERNAL', 
                        {
                          type: 'category',
                          label: 'Обращение к внутренней системе (INTERNAL, FORMULA)',
                          items: [
                            'Обращение_к_внутренней_системе_INTERNAL_FORMULA', 
                            'Внутренний_вызов_INTERNAL', 
                            'Пользовательская_формула_FORMULA', 
                          ]
                        },
                        'Выполнение_программного_кода_EVAL', 
                      ]
                    },
                    'Миграция', 
                    'Интернационализация', 
                  ]
                },
                {
                  type: 'category',
                  label: 'Выполнение',
                  items: [
                    'Выполнение', 
                    'Материализации', 
                    'Индексы', 
                    'Таблицы', 
                  ]
                },
                {
                  type: 'category',
                  label: 'Управление',
                  items: [
                    'Управление', 
                    {
                      type: 'category',
                      label: 'Системные параметры',
                      items: [
                        'Системные_параметры', 
                        {
                          type: 'category',
                          label: 'Параметры запуска',
                          items: [
                            'Параметры_запуска', 
                            'События_запуска', 
                          ]
                        },
                        'Параметры_работы', 
                      ]
                    },
                    'Пользовательский_интерфейс', 
                    'Интерпретатор', 
                    'Политика_безопасности', 
                    'Монитор_процессов', 
                    'Планировщик', 
                    'Журналы_и_логи', 
                    'Профайлер', 
                    'Чат', 
                  ]
                },
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Язык',
          items: [
            'Язык', 
            'Лексемы', 
            'Идентификаторы', 
            'Литералы', 
            {
              type: 'category',
              label: 'Инструкции',
              items: [
                'Инструкции', 
                'Заголовок_модуля', 
                {
                  type: 'category',
                  label: 'Инструкция =',
                  items: [
                    'Инструкция_=', 
                    {
                      type: 'category',
                      label: 'Выражения',
                      items: [
                        'Выражения', 
                        'Приоритет_операторов', 
                      ]
                    },
                    {
                      type: 'category',
                      label: 'Операторы-свойства',
                      items: [
                        'Операторы-свойства', 
                        'Арифметические_операторы', 
                        'Оператор', 
                        'Оператор_ABSTRACT', 
                        'Оператор_ACTIVE_TAB', 
                        'Оператор_AGGR', 
                        'Оператор_CASE', 
                        'Оператор_CLASS', 
                        'Оператор_CONCAT', 
                        'Оператор_DATA', 
                        'Оператор_EXCLUSIVE', 
                        'Оператор_FORMULA', 
                        'Оператор_GROUP', 
                        'Оператор_IF', 
                        'Оператор_IF_..._THEN', 
                        'Оператор_JOIN', 
                        'Оператор_MAX', 
                        'Оператор_MIN', 
                        'Оператор_MULTI', 
                        'Оператор_OVERRIDE', 
                        'Оператор_PARTITION', 
                        'Оператор_PREV', 
                        'Оператор_RECURSION', 
                        'Оператор_STRUCT', 
                        'Оператор_UNGROUP', 
                        'Операторы_групп_объектов', 
                        'Оператор_преобразования_типа', 
                        'Операторы_AND_OR_NOT_XOR', 
                        'Операторы_IS_AS', 
                        'Операторы_изменений', 
                        'Операторы_сравнения', 
                      ]
                    },
                    'Опции_свойства', 
                  ]
                },
                {
                  type: 'category',
                  label: 'Инструкция ACTION',
                  items: [
                    'Инструкция_ACTION', 
                    {
                      type: 'category',
                      label: 'Операторы-действия',
                      items: [
                        'Операторы-действия', 
                        'Оператор_...', 
                        'Оператор_ABSTRACT_д', 
                        'Оператор_ACTIVATE', 
                        'Оператор_ACTIVE_FORM', 
                        'Оператор_APPLY', 
                        'Оператор_ASK', 
                        'Оператор_CHANGE', 
                        'Оператор_BREAK', 
                        'Оператор_CANCEL', 
                        'Оператор_CASE_д', 
                        'Оператор_CHANGECLASS', 
                        'Оператор_INTERNAL', 
                        'Оператор_DELETE', 
                        'Оператор_DIALOG', 
                        'Оператор_EMAIL', 
                        'Оператор_EVAL', 
                        'Оператор_EXEC', 
                        'Оператор_EXPORT', 
                        'Оператор_EXTERNAL', 
                        'Оператор_FOR', 
                        'Оператор_IF_..._THEN_д', 
                        'Оператор_IMPORT', 
                        'Оператор_INPUT', 
                        'Оператор_MESSAGE', 
                        'Оператор_MULTI_д', 
                        'Оператор_NEW', 
                        'Оператор_NESTEDSESSION', 
                        'Оператор_NEWEXECUTOR', 
                        'Оператор_NEWSESSION', 
                        'Оператор_NEWTHREAD', 
                        'Оператор_PRINT', 
                        'Оператор_READ', 
                        'Оператор_REQUEST', 
                        'Оператор_RETURN', 
                        'Оператор_SEEK', 
                        'Оператор_SHOW', 
                        'Оператор_TRY', 
                        'Оператор_WHILE', 
                        'Оператор_WRITE', 
                      ]
                    },
                    'Опции_действия', 
                  ]
                },
                'Инструкция_GROUP', 
                {
                  type: 'category',
                  label: 'Инструкция ON',
                  items: [
                    'Инструкция_ON', 
                    'Блок_описания_события', 
                  ]
                },
                'Инструкция_WHEN', 
                'Инструкция_-_WHEN', 
                'Инструкция_CONSTRAINT', 
                'Инструкция_=', 
                'Инструкция_CLASS', 
                {
                  type: 'category',
                  label: 'Инструкция FORM',
                  items: [
                    'Инструкция_FORM', 
                    'Блоки_объектов', 
                    'Блок_свойств_и_действий', 
                    'Блоки_фильтров_и_сортировок', 
                    'Блок_событий', 
                  ]
                },
                'Инструкция_DESIGN', 
                'Инструкция_NAVIGATOR', 
                'Инструкция_WINDOW', 
                'Инструкция_EXTEND_CLASS', 
                'Инструкция_EXTEND_FORM', 
                'Инструкция_+=', 
                'Инструкция_ACTION+', 
                'Инструкция_META', 
                'Инструкция', 
                'Инструкция_TABLE', 
                'Инструкция_INDEX', 
                'Инструкция_BEFORE', 
                'Инструкция_AFTER', 
                'Пустая_инструкция', 
              ]
            },
            'Политика_оформления_кода', 
          ]
        },
        'IDE', 
        {
          type: 'category',
          label: 'Примеры',
          items: [
            'Примеры', 
            'Турнирная_таблица', 
            'Управление_материальными_потоками', 
            {
              type: 'category',
              label: 'How-to',
              items: [
                'How-to', 
                {
                  type: 'category',
                  label: 'How-to: Вычисления',
                  items: [
                    'How-to_Вычисления', 
                    'How-to_GROUP_SUM', 
                    'How-to_GROUP_MAX_MIN_AGGR', 
                    'How-to_CASE_IF_OVERRIDE', 
                    'How-to_GROUP_LAST', 
                    'How-to_GROUP_CONCAT', 
                    'How-to_PARTITION', 
                  ]
                },
                {
                  type: 'category',
                  label: 'How-to: GUI',
                  items: [
                    'How-to_GUI', 
                    {
                      type: 'category',
                      label: 'How-to: Интерактивные формы',
                      items: [
                        'How-to_Интерактивные_формы', 
                        'How-to_CRUD', 
                        'How-to_Документы_со_строками', 
                        'How-to_Фильтрация_и_сортировка', 
                        'How-to_Дизайн', 
                        'How-to_Деревья', 
                        'How-to_Ввод_данных', 
                        'How-to_Навигатор', 
                        'How-to_Матрица', 
                        'How-to_Состояние_таблиц', 
                      ]
                    },
                    'How-to_Отчеты', 
                  ]
                },
                {
                  type: 'category',
                  label: 'How-to: Императивная логика',
                  items: [
                    'How-to_Императивная_логика', 
                    {
                      type: 'category',
                      label: 'How-to: Действия',
                      items: [
                        'How-to_Действия', 
                        'How-to_CHANGE', 
                        'How-to_EXEC', 
                        'How-to_NEW', 
                        'How-to_DELETE', 
                        'How-to_FOR', 
                        'How-to_IF_CASE', 
                        'How-to_WHILE', 
                        'How-to_NEWSESSION', 
                        'How-to_SEEK', 
                      ]
                    },
                    'How-to_События', 
                  ]
                },
                {
                  type: 'category',
                  label: 'How-to: Декларативная логика',
                  items: [
                    'How-to_Декларативная_логика', 
                    'How-to_Ограничения', 
                    'How-to_Наследование_и_агрегации', 
                  ]
                },
                {
                  type: 'category',
                  label: 'How-to: Поиск элементов',
                  items: [
                    'How-to_Поиск_элементов', 
                    'How-to_Пространства_имен', 
                    'How-to_Явная_типизация', 
                  ]
                },
                {
                  type: 'category',
                  label: 'How-to: Расширения',
                  items: [
                    'How-to_Расширения', 
                    'How-to_Расширение_классов', 
                    'How-to_Расширение_свойств', 
                    'How-to_Расширение_действий', 
                    'How-to_Расширение_форм', 
                  ]
                },
                {
                  type: 'category',
                  label: 'How-to: Интеграция',
                  items: [
                    'How-to_Интеграция', 
                    {
                      type: 'category',
                      label: 'How-to: Работа с внешними форматами',
                      items: [
                        'How-to_Работа_с_внешними_форматами', 
                        'How-to_Экспорт_данных', 
                        'How-to_Импорт_данных', 
                      ]
                    },
                    'How-to_Взаимодействие_через_HTTP-протокол', 
                    'How-to_Фронтенд', 
                    {
                      type: 'category',
                      label: 'How-to: Обращение к внутренним системам',
                      items: [
                        'How-to_Обращение_к_внутренним_системам', 
                        'How-to_FORMULA', 
                        'How-to_INTERNAL', 
                      ]
                    },
                  ]
                },
                {
                  type: 'category',
                  label: 'How-to: Use Cases',
                  items: [
                    'How-to_Use_Cases', 
                    'How-to_Работа_с_документами', 
                    'How-to_Регистры', 
                    'How-to_Нумерация', 
                    'How-to_Создание_на_основе', 
                    'How-to_Переопределение_значений', 
                    'How-to_Связывание_свойств', 
                  ]
                },
                'How-to_Метапрограммирование', 
                'How-to_Физическая_модель', 
                'How-to_Интернационализация', 
              ]
            },
          ]
        },
        'Онлайн_демо', 
      ]
    },
  ]
};