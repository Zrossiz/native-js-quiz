const DATA = [
    {
        question: 'В детстве вы мечтали стать:',
        answers: [
            {
                id: '1',
                value: 'Математиком',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '2',
                value: 'Бизнесменом',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '3',
                value: 'Художником',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '4',
                value: 'Космонавтом',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '5',
                value: 'Актером',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '6',
                value: 'Полицейским',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '7',
                value: 'Президентом',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '8',
                value: 'Директором магазина',
                direction: 'procurement',
                quality: 'prudence'
            },
        ]
    },
    {
        question: 'В школе вы:',
        answers: [
            {
                id: '1',
                value: 'Решали задачи и примеры по математике',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '2',
                value: 'Были старостой',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '3',
                value: 'Болтали на переменах',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '4',
                value: 'Рисовали',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '5',
                value: 'Занимались в классе информатики',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '6',
                value: 'Принимали участие в субботниках',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '7',
                value: 'Покупали еду в столовой',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '8',
                value: 'Писали сочинения',
                direction: 'management',
                quality: 'determination'
            },
        ]
    },
    {
        question: 'Вам нужно организовать мероприятие, что вы предпочтете делать?',
        answers: [
            {
                id: '1',
                value: 'Распределять задачи, координировать всех',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '2',
                value: 'Нарисовать приглашения, делать фото',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '3',
                value: 'Знакомиться, общаться, рассказывать истории',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '4',
                value: 'Анализировать расходы и рассчитывать бюджет',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '5',
                value: 'Закупаться едой',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '6',
                value: 'Продумать сценарий, общий досуг',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '7',
                value: 'Организовывать доставку людей на мероприятие',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '8',
                value: 'Составлять подробный чек-лист задач и дел',
                direction: 'economy',
                quality: 'perseverance'
            },
        ]
    },
    {
        question: 'Вам проще всего:',
        answers: [
            {
                id: '1',
                value: 'Придумать маршрут и логистику для своего путешествия',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '2',
                value: 'Понять кому и какие задачи или поручения можно дать',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '3',
                value: 'Быстро собрать людей в одном месте',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '4',
                value: 'Выполнять поручения',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '5',
                value: 'Спланировать личный бюджет',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '6',
                value: 'Придумать кому что можно подарить на праздник',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '7',
                value: 'Нарисовать что-то',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '8',
                value: 'Составить план выступлений',
                direction: 'management',
                quality: 'determination'
            },
        ]
    },
    {
        question: 'Выберите то, что вам нравится больше всего:',
        answers: [
            {
                id: '1',
                value: 'Читать, писать, работать над текстом',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '2',
                value: 'Вести подсчеты, доверять только цифрам',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '3',
                value: 'Быть инициатором дела',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '4',
                value: 'Общаться с людьми, помогать им',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '5',
                value: 'Помогать с перевозкой вещей',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '6',
                value: 'Помогать с организацией закупок',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '7',
                value: 'Отвечать за организацию закупок',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '8',
                value: 'Проводить финансовый анализ',
                direction: 'economy',
                quality: 'perseverance'
            },
        ]
    },
    {
        question: 'При просмотре фильма в кинотеатре вы обращаете внимание на:',
        answers: [
            {
                id: '1',
                value: 'Поступки и поведение героев',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '2',
                value: 'Чувства, диалоги героев',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '3',
                value: 'Реклама в начале фильма',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '4',
                value: 'То как герои строят отношения с другими людьми',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '5',
                value: 'Рейтинг',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '6',
                value: 'Кассовые сборы',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '7',
                value: 'Количество купленной еды',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '8',
                value: 'Как долго будет длиться фильм',
                direction: 'transport',
                quality: 'prudence'
            },
        ]
    },
    {
        question: 'Выберите что-то одно:',
        answers: [
            {
                id: '1',
                value: 'Всю жизнь считать деньги',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '2',
                value: 'Находиться в одном городе не больше недели',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '3',
                value: 'Совершать покупки только в одном магазине',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '4',
                value: 'Месяц управлять одним городом на выбор',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '5',
                value: 'Каждый день видеть новые лица',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '6',
                value: 'Жить в фильме',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '7',
                value: 'Анализировать рынок труда',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '8',
                value: 'Создать город с нуля',
                direction: 'management',
                quality: 'determination'
            },
        ]
    },
    {
        question: 'Как вы проводите свободное время?',
        answers: [
            {
                id: '1',
                value: 'Наводите порядок в документах и счетах',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '2',
                value: 'Организовываете что-то',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '3',
                value: 'Продумываете маршрут путешествия',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '4',
                value: 'Встречаетесь с друзьями или находите новых',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '5',
                value: 'Творите и создаете что-то новое',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '6',
                value: 'Ездите по магазинам',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '7',
                value: 'Читаете статьи в интернете',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '8',
                value: 'Делаете что-то своими руками',
                direction: 'management',
                quality: 'determination'
            },
        ]
    },
    {
        question: 'Что вы предпочитаете делать, когда собираетесь с друзьями?',
        answers: [
            {
                id: '1',
                value: 'Организовывать маршрут прогулки',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '2',
                value: 'Мечтаете сколько будете зарабатывать через пять лет',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '3',
                value: 'Рассказываете истории',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '4',
                value: 'Ходите в кафе',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '5',
                value: 'Играете в стратегические игры',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '6',
                value: 'Собираете всех друзей у себя дома',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '7',
                value: 'Придумываете истории',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '8',
                value: 'Ходите на форумы',
                direction: 'management',
                quality: 'determination'
            },
        ]
    },
    {
        question: 'В какой области вы бы хотели получить премию?',
        answers: [
            {
                id: '1',
                value: 'Букеровская премия (литературная)',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '2',
                value: 'Премия Киото (фундманетальные науки, передовые технологии, философия и искусство)',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '3',
                value: 'Абелевская премия (математика)',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '4',
                value: 'Нобелевская премия (все отрасли, кроме математики)',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '5',
                value: 'Кинопремия Оскар',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '6',
                value: 'Грэмми (музыкальная)',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '7',
                value: 'Премия РАСО (менеджмент)',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '8',
                value: 'Премия Тьюринга (в области информатики)',
                direction: 'procurement',
                quality: 'prudence'
            },
        ]
    },
    {
        question: 'На что в первую очередь, вы обращаете внимание находясь в магазине?',
        answers: [
            {
                id: '1',
                value: 'Ассортимент, понятность ценников',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '2',
                value: 'Скидки, акции',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '3',
                value: 'Правильно ли расположены отделы',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '4',
                value: 'Поведение продавцов и консультантов',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '5',
                value: 'Рекламные объявления',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '6',
                value: 'Проверяете сроки годности',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '7',
                value: 'Оформление витрины, магазина',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '8',
                value: 'Как выстроена работа с покупателями',
                direction: 'gmu',
                quality: 'determination'
            },
        ]
    },
    {
        question: 'Выберите из перечисленного ниже то, что вам нравится больше:',
        answers: [
            {
                id: '1',
                value: 'Управлять людьми',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '2',
                value: 'Спокойно заниматься свои делом',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '3',
                value: 'Много общаться с людьми',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '4',
                value: 'Придумывать стратегии, разрабатывать процессы',
                direction: 'marketing',
                quality: 'determination'
            },
            {
                id: '5',
                value: 'Считать, заниматься математическими исчислениями',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '6',
                value: 'Анализировать и делать выводы',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '7',
                value: 'Придумывать логистику',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '8',
                value: 'Изучать документацию',
                direction: 'procurement',
                quality: 'prudence'
            },
        ]
    },
    {
        question: 'Если бы вам подарили сертификат на любой курс, кокой бы вы выбрали?',
        answers: [
            {
                id: '1',
                value: 'Курс «Основы эффективной коммуникации»',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '2',
                value: 'Углубленный курс Excel',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '3',
                value: 'Копирайтинг с нуля',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '4',
                value: 'Курс MBA Finance (Master of Business Administration)',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '5',
                value: 'Курс «Операционная деятельность в логистике»',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '6',
                value: 'Курс «Эффективные переговоры»',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '7',
                value: 'Курс Sоft Skils (Навыки мышления, управления, коммуникации)',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '8',
                value: 'Иностранный язык B1-C1',
                direction: 'international',
                quality: 'initiative'
            },
        ]
    },
    {
        question: 'Чем бы вы занялись, если бы вам не нужно было думать о деньгах?',
        answers: [
            {
                id: '1',
                value: 'Займусь своим бизнесом',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '2',
                value: 'Пойду на курсы театрального мастерства',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '3',
                value: 'Займусь благотворительностью',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '4',
                value: 'Начну писать статьи, рассказы',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '5',
                value: 'Буду путешествовать',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '6',
                value: 'Инвестирую деньги в активы',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '7',
                value: 'Буду делать что-то своими руками',
                direction: 'procurement',
                quality: 'prudence'
            },
            {
                id: '8',
                value: 'Буду делегировать обязанности',
                direction: 'economy',
                quality: 'perseverance'
            },
        ]
    },
    {
        question: 'Если бы вы писали книгу, о чем бы она была?',
        answers: [
            {
                id: '1',
                value: 'Анализ рынка труда',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '2',
                value: 'История политики России',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '3',
                value: 'Финансы и вычисления',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '4',
                value: 'Текст и его сила',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '5',
                value: 'Психология',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '6',
                value: 'Путешествия по миру',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '7',
                value: 'Как стать хорошим лидером',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '8',
                value: 'Инвестиции и их возможности',
                direction: 'procurement',
                quality: 'prudence'
            },
        ]
    },
    {
        question: 'Как вы лучше всего запоминаете информацию?',
        answers: [
            {
                id: '1',
                value: 'Нужно анализировать информацию',
                direction: 'economy',
                quality: 'perseverance'
            },
            {
                id: '2',
                value: 'Через дробление информации',
                direction: 'gmu',
                quality: 'determination'
            },
            {
                id: '3',
                value: 'Через числовые эквиваленты',
                direction: 'accounting',
                quality: 'perseverance'
            },
            {
                id: '4',
                value: 'С помощью визуализации',
                direction: 'marketing',
                quality: 'initiative'
            },
            {
                id: '5',
                value: 'Через ассоциации',
                direction: 'international',
                quality: 'initiative'
            },
            {
                id: '6',
                value: 'Чтобы лучше запомнить, мне нужно понять логику, разобраться',
                direction: 'transport',
                quality: 'prudence'
            },
            {
                id: '7',
                value: 'Вникая в суть',
                direction: 'management',
                quality: 'determination'
            },
            {
                id: '8',
                value: 'Через интервальные повторения',
                direction: 'procurement',
                quality: 'prudence'
            },
        ]
    },
]

const DATA_COURSES = [
    {
        direction: 'gmu',
        courses: [
            {
                id: 1,
                title: 'Государственная и муниципальная служба',
                href: 'https://manepa.ru/instituty-i-fakultety/institut-gosudarstvennoj-sluzhby/gosudarstvennaya-i-munitsipalnaya-sluzhba/'
            },
            {
                id: 2,
                title: 'Государственное частное партнерство',
                href: 'https://manepa.ru/instituty-i-fakultety/institut-gosudarstvennoj-sluzhby/gosudarstvenno-chastnoe-partnerstvo-/'
            }
        ]
    },
    {
        direction: 'economy',
        courses: [
            {
                id: 1,
                title: 'Экономика и управление на предприятии',
                href: 'https://google.com'
            },
            {
                id: 2,
                title: 'Управление и экономика в здравоохранении',
                href: 'https://google.com'
            },
            {
                id: 3,
                title: 'Менеджмент и экономика в образовательном учреждении',
                href: 'https://google.com'
            }
        ]
    },
    {
        direction: 'management',
        courses: [
            {
                id: 1,
                title: 'Финансовый менеджмент',
                href: 'https://manepa.ru/instituty-i-fakultety/institut-vysshaya-shkola-ekonomiki-i-finansov/finansovyy-menedzhment-2/'
            },
            {
                id: 2,
                title: 'Стратегический менеджмент',
                href: 'https://manepa.ru/instituty-i-fakultety/institut-menedzhmenta-i-upravleniya/strategicheskiy-menedzhment/'
            },
            {
                id: 2,
                title: 'Управление персоналом',
                href: 'https://google.com'
            }
        ]
    },
    {
        direction: 'procurement',
        courses: [
            {
                id: 1,
                title: 'Эксперт в сфере закупок',
                href: 'https://google.com'
            },
            {
                id: 2,
                title: 'Специалист по закупкам',
                href: 'https://google.com'
            }
        ]
    },
    {
        direction: 'accounting',
        courses: [
            {
                id: 1,
                title: 'Бухгалтерский учет',
                href: 'https://manepa.ru/instituty-i-fakultety/fakultet-ekonomiko-socialnyx-nauk/bukhgalterskiy-uchet/'
            },
            {
                id: 2,
                title: 'Бухгалтерский учет, анализ и аудит',
                href: 'https://manepa.ru/instituty-i-fakultety/fakultet-ekonomiko-socialnyx-nauk/bukhgalterskiy-uchet-i-ekonomicheskiy-analiz/'
            },
            {
                id: 3,
                title: 'Экономика и бухгалтерский учет',
                href: 'https://manepa.ru/instituty-i-fakultety/fakultet-ekonomiko-socialnyx-nauk/ekonomika-i-bukhgalterskiy-uchet/'
            }
        ]
    },
    {
        direction: 'transport',
        courses: [
            {
                id: 1,
                title: 'Контроллер технического состояния',
                href: 'https://manepa.ru/instituty-i-fakultety/inzhenerno-texnicheskij-institut/kontroler-tekhnicheskogo-sostoyaniya-avtotransportnykh-sredstv/'
            },
            {
                id: 2,
                title: 'Логистика',
                href: 'https://manepa.ru/instituty-i-fakultety/fakultet-upravleniya-i-marketinga/logistika/'
            }
        ]
    },
    {
        direction: 'international',
        courses: [
            {
                id: 1,
                title: 'Международные отношения',
                href: 'https://manepa.ru/instituty-i-fakultety/institut-delovogo-administrirovaniya/mezhdunarodnye-otnosheniya/'
            },
            {
                id: 2,
                title: 'Международный менеджмент',
                href: 'https://manepa.ru/instituty-i-fakultety/institut-delovogo-administrirovaniya/mezhdunarodnyj-menedzhment/'
            }
        ]
    },
    {
        direction: 'marketing',
        courses: [
            {
                id: 1,
                title: 'Маркетинг',
                href: 'https://manepa.ru/instituty-i-fakultety/fakultet-upravleniya-i-marketinga/marketing_2/'
            },
            {
                id: 2,
                title: 'Реклама и связи с общественностью',
                href: 'https://manepa.ru/instituty-i-fakultety/institut-obshhestvenno-socialnyx-nauk/reklama-i-svyazi-s-obshchestvennostyu/'
            },
        ]
    }
]

let localResults = {
    gmu: 0,
    accounting: 0,
    management: 0,
    economy: 0,
    procurement: 0,
    transport: 0,
    international: 0,
    marketing: 0
}

let qualityResults = {
    determination: 0,
    perseverance: 0,
    prudence: 0,
    initiative: 0
}

const quiz = document.getElementById('quiz')
const questions = document.getElementById('questions')
const indicator = document.getElementById('indicator')
const results = document.getElementById('results')
const btnNext = document.getElementById('btn-next')
const btnRestart = document.getElementById('btn-restart')

let currentAnswer;

let currentQuality;


const renderQuestions = (index) => {
    renderIndicator(index + 1)

    questions.dataset.currentStep = index

    const renderAnswers = () => DATA[index].answers.map((answer) => `
             <li>
                <div class="answer-wrapper">
                    <label class="answer-label">
                        <input class="answer-input" type="radio" name=${index} value=${answer.id} data-quality=${answer.quality} data-direction=${answer.direction}>
                        <span class="answer-fake"></span>
                        <span class="answer-title">${answer.value}</span>
                    </label>
                </div>
            </li>
        `
      ).join('')

    questions.innerHTML = `
        <div class="quiz-questions-item">
            <div class="quiz-quesitons-item__question">${DATA[index].question}</div>
            <ul class="quiz-questions-item__answers">
                ${renderAnswers()}
            </ul>
        </div>
    `
}

const renderResults = () => {

    console.log(localResults)
    console.log(qualityResults)

    let resultTest = Object.entries(localResults).reduce((max, n) => n[1] > max[1] ? n : max)

    const renderQuality = () => {
        const determinationPercent = qualityResults.determination * 99 / DATA.length
        const perseverancePercent = qualityResults.perseverance * 99 / DATA.length
        const prudencePercent = qualityResults.prudence * 99 / DATA.length
        const initiativePercent = qualityResults.initiative * 99 / DATA.length

        return `
            <div class="quality-item">
                <span class="quality-item__percent">${determinationPercent.toFixed(1) + 1}%</span>
                <span class="quality-item__title">Целеустремленность</span>
            </div>
            <div class="quality-item">
                <span class="quality-item__percent">${perseverancePercent.toFixed(1)}%</span>
                <span class="quality-item__title">Усидчивость</span>
            </div>
            <div class="quality-item">
                <span class="quality-item__percent">${prudencePercent.toFixed(1)}%</span>
                <span class="quality-item__title">Рассудительность</span>
            </div>
            <div class="quality-item">
                <span class="quality-item__percent">${initiativePercent.toFixed(1)}%</span>
                <span class="quality-item__title">Инициативность</span>
            </div>
        `
    }

    const renderCourses = (direction) => {

        let data

        const filteredCourses = DATA_COURSES.map((item) => {
            if (direction === item.direction) {
                data = item.courses
            }
        })

        let recommendedCourses = data.map((item, index) => `
            <li class="results-courses__item">
                <a target="_blank" href=${item.href}>
                    ${item.title}  
                </a>      
            </li>
        `).join('')

        return recommendedCourses
    }

     return results.innerHTML = `
        <div>
            <div class="results-title-wrapper">
                <span class="results-title title">Мы проанлизировали ваши ответы - смотрите, что получилось</span>
                <div class="results-quality">${renderQuality()}</div>
            </div>
            <div class="results-courses-wrapper">
                <span class="title">Рекомендуем обратить внимание на следующие профессии</span>
                <div>
                    <ul class="results-courses__list">
                        ${renderCourses(resultTest[0])}
                    </ul>
                </div>
            </div>
        </div>
     `

}

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`
}

quiz.addEventListener('change', (e) => {
    if (e.target.classList.contains('answer-input')) {
        currentAnswer = e.target.dataset.direction
        currentQuality = e.target.dataset.quality
        btnNext.disabled = false
    }
})

quiz.addEventListener('click', (e) => {

    if (e.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1

        localResults[String(currentAnswer)] = localResults[String(currentAnswer)] + 1;
        qualityResults[String(currentQuality)] = qualityResults[String(currentQuality)] + 1;

        currentAnswer = '';
        currentQuality= '';

        if (DATA.length === nextQuestionIndex) {
            questions.classList.add('questions--hidden')
            indicator.classList.add('indicator--hidden')
            results.classList.add('results--visible')
            btnNext.classList.add('btn-next--hidden')
            btnRestart.classList.add('btn-restart--visible')
            renderResults()
        } else {
            renderQuestions(nextQuestionIndex)
        }

        btnNext.disabled = true
    }

    if (e.target.classList.contains('btn-restart')) {

        questions.classList.remove('questions--hidden')
        indicator.classList.remove('indicator--hidden')
        results.classList.remove('results--visible')
        btnNext.classList.remove('btn-next--hidden')
        btnRestart.classList.remove('btn-restart--visible')

        results.innerHTML = ''
        localResults = {
            gmu: 0,
            accounting: 0,
            management: 0,
            economy: 0,
            procurement: 0,
            transport: 0,
            international: 0,
            marketing: 0
        }
        qualityResults = {
            determination: 0,
            perseverance: 0,
            prudence: 0,
            initiative: 0
        }
        currentAnswer = '';
        currentQuality= '';

        renderQuestions(0)
    }
})

renderQuestions(0)