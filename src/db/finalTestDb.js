export const data = [ 
    {
        title: 'Добро пожаловать в компанию Exceed-Team.',
        description:`Ниже приведены Теория и Практика на время твоего обучения, их нужно проходить одновременно.
В конце обучения тебя ждет Тестовое Задание которое должно быть выполнено до конца двухнедельного обучения.
По любым вопросам ты можешь обращаться к своему наставнику или тимлиду(если наставника нет на месте).

Дорогу осилит идущий. Удачи.`
    },
    {
        title: 'Теория',
        items: [
            {
                name: 'UNIX',
                description: `linux terminal, переходы между папок, создание папок, удаление папок, убить процесс`,
                links: [
                    {
                        name: 'Linux Terminal',
                        url: 'https://www.comss.ru/page.php?id=2443',
                    },
                ]
            },
            {
                name: 'VSCode',
                description: `Code Editor`,
                links: [
                    {
                        name: 'VSCode',
                        url: 'https://medium.com/@p1t1ch/visual-studio-code-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%B8-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-7f1a26806522',
                    },
                ]
            },
            {
                name: 'Git',
                description: `Работа с репозиторием,создание/удаление ветки, коммиты, пул реквесты, мерж, конфликты.`,
                links: [
                    {
                        name: 'Git',
                        url: 'https://javarush.ru/groups/posts/2683-nachalo-rabotih-s-git-podrobnihy-gayd-dlja-novichkov',
                    },
                ]
            },
            {
                name: 'Вёрстка и Flex-box',
                description: `общие понятия`,
                links: [
                    {
                        name: 'HTML/CSS/Вёрстка общие понятия Flex-box',
                        url: 'http://htmlbook.ru/content/osnovy-verstki',
                    },
                ]
            },
            {
                name: 'HTML',
                description: `общие понятия`,
                links: [
                    {
                        name: 'HTML',
                        url: 'http://htmlbook.ru/samhtml',
                    },
                    {
                        name: 'HTML5',
                        url: 'http://htmlbook.ru/samlayout/verstka-na-html5',
                    },
                ]
            },
            {
                name: 'CSS',
                description: `общие понятия`,
                links: [
                    {
                        name: 'CSS',
                        url: 'http://htmlbook.ru/samcss',
                    },
                    {
                        name: 'CSS3',
                        url: 'http://htmlbook.ru/css3',
                    },
                ]
            },
            {
                name: 'Javascript',
                description: `общие понятия, работа с переменными, массивами, обьектами их свойствами и методами`,
                links: [
                    {
                        name: 'Javascript введение',
                        url: 'https://learn.javascript.ru/intro',
                    },
                    {
                        name: 'Javascript консоль разработчика',
                        url: 'https://learn.javascript.ru/devtools',
                    },
                    {
                        name: 'Javascript основы',
                        url: 'https://learn.javascript.ru/first-steps',
                    },
                    {
                        name: 'Javascript обьекты',
                        url: 'https://learn.javascript.ru/object-basics',
                    },
                    {
                        name: 'Javascript типы данных',
                        url: 'https://learn.javascript.ru/data-types',
                    },
                    {
                        name: 'Javascript DOM',
                        url: 'https://learn.javascript.ru/document',
                    },
                ]
            },
            {
                name: 'AJAX',
                description: `работа с запросами с помощью fetch или axios`,
                links: [
                    {
                        name: 'Javascript fetch',
                        url: 'https://learn.javascript.ru/fetch',
                    },
                    {
                        name: 'Javascript Axios',
                        url: 'https://github.com/axios/axios',
                    },
                ]
            }
        ]
    },
    {
        title: 'Практика',
        description: `GIT
Cоздать новый репозиторий и залить туда файл READ.ME со строкой Hello World!.

VSCode
Скачать
Установить
Использовать

Вёрстка/Flex-box/HTML/CSS
https://p.w3layouts.com/demos/user_icon_login_form/web/
Сверстать страницу используя Flex-box для разметки. Страница должна быть адаптивной.
Фото можно вставить свое или любое другое на выбор.
Делать все в отдельной папке, которая будет содержать все необходимые файлы, в конце рабочего дня заливать все изменения на GIT созданный заранее.

Javascript
Выполнять все задания в конце каждой темы, создавая для каждого задания отдельный файл, в конце рабочего дня заливать все изменения на GIT созданный заранее.

AJAX
Написать AJAX запрос (используя fetch || axios) на weather API , получить погоду Таганрога и вывести на страницу в любом виде.
* Продумать дизайн и сверстать красивый виджет. 
`,
    },
    {
        title: 'Тестовое задание',
        link: 'https://swapi.dev/',
        description:`Используя Javascript | HTML | CSS создать приложение для отображения списка персонажей из здвездных войн.
Главная страница приложения должна содержать в себе список всех персонажей которых можно получить отсюда (​https://swapi.dev/)​. Данный сервис не предоставляет фотографии персонажей, но их легко можно найти в интернете на подобных ресурсах(​https://starwars.ru/universe/characters/)​
При выборе персонажа должно открываться модальное окно с дополнительной информацией о нем. Дизайн может быть абсолютно любой. Приложение нужно залить на github.com и прислать мне ссылку на репозиторий.
Использовать любые технологии из списка:
-Javascript
-React`
    },
]

export default data;    