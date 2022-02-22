let startEl = $('#quizStart');
let quizEl = $('#question-block');
let startBtn = $('.start-button');
let Q = 0;

let choiceA = $('#a')
let choiceB = $('#b')
let choiceC = $('#c')
let choiceD = $('#d')

let quizQuestions = [
    {
        question: "What does HTML do?",
        choices: {
            a: 'Creates the skeleton-code for websites',
            b: 'Allows computer programs to talk to each other',
            c: 'Creates high-speed internet traffic',
            d: 'Teaches you how to make bread'
        },
        answer: 'a'
    },
    {
        question: "What does CSS do?",
        choices: {
            a:'A program that teaches you how to bake cookies',
            b:'A complex language that governs logic',
            c:'A styling language used to modify HTML documents',
            d:'A robot language that is used by skynet',
        },
        answer: 'c',
    },
    {
        question: "What is Javascript",
        choices: {
            a:'Isnt it the exact same as java but in italics?',
            b:'The logic behind HTML and CSS documentss and much more',
            c:'A new kind of cursive handwriting',
            d:'A program that teaches you how to bake cake',
        },
        answer: 'b',
    },
    {
        question: "What would you use to contrain a website for mobile format",
        choices: {
            a:'Media Query',
            b:'Flex-Boxes',
            c:'Container-Class and grids',
            d:'All of the Above',
        },
        answer: 'd',
    },
]

startBtn.onClick(function(){

})