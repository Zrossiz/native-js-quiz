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
    }
]

const DATA_COURSES = [
    {
        direction: 'gmu',
        courses: [
            {
                id: 1,
                title: 'ГМУ',
                href: 'https://google.com'
            },
            {
                id: 2,
                title: 'Государственное частное партнерство',
                href: 'https://google.com'
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
                href: 'https://google.com'
            },
            {
                id: 2,
                title: 'Стратегический менеджмент',
                href: 'https://google.com'
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
                href: 'https://google.com'
            },
            {
                id: 2,
                title: 'Бухгалтерский учет, анализ и аудит',
                href: 'https://google.com'
            },
            {
                id: 3,
                title: 'Бухгалтерский учет и налогооблажение. Аудит экономической деятельности предприятия',
                href: 'https://google.com'
            }
        ]
    },
    {
        direction: 'transport',
        courses: [
            {
                id: 1,
                title: 'Контроллер технического состояния',
                href: 'https://google.com'
            },
            {
                id: 2,
                title: 'Специалист, ответственный за обеспечение БДД',
                href: 'https://google.com'
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
                title: '???',
                href: 'https://google.com'
            }
        ]
    },
    {
        direction: 'marketing',
        courses: [
            {
                id: 1,
                title: 'Маркетинг',
                href: 'https://google.com'
            },
            {
                id: 2,
                title: 'SMM - менеджмент',
                href: 'https://google.com'
            },
            {
                id: 2,
                title: 'Специалист по интернет-маркетингу',
                href: 'https://n-t-u.ru/professionalnaya-perepodgotovka/transport-dorogi/logistika/'
            }
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
                    <input id="radio-${answer.id}" class="answer-input" type="radio" name=${index} value=${answer.id} data-quality=${answer.quality} data-direction=${answer.direction}>
                    <label for="radio-${answer.id}">
                        ${answer.value}
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

    let resultTest = Object.entries(localResults).reduce((max, n) => n[1] > max[1] ? n : max)

    const renderQuality = () => {
        const determinationPercent = qualityResults.determination * 99 / DATA.length
        const perseverancePercent = qualityResults.perseverance * 99 / DATA.length
        const prudencePercent = qualityResults.prudence * 99 / DATA.length
        const initiativePercent = qualityResults.initiative * 99 / DATA.length

        return `
            Целеустремеленность: ${determinationPercent}%
            Усидчивость: ${perseverancePercent}%
            Рассудительность: ${prudencePercent}%
            Инициативность: ${initiativePercent}%
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
            <li>
                <a href=${item.href}>
                    ${item.title}  
                </a>      
            </li>
        `).join('')

        return recommendedCourses
    }

     return results.innerHTML = `
        <div>
            Больше всего ответов по направлению ${resultTest[0]}
            Количество ответов: ${resultTest[1]}
            ${renderQuality()}
            Рекомендуемые курсы:
            ${renderCourses(resultTest[0])}
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