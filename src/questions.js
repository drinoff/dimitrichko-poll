export const questions = [
    {
        id: 0,
        label: 'Никнейм в Групата',
        type: 'textField',
        abbreviation: 'nickname'
    },
    {
        id: 1,
        label: 'Работите ли в момента в ИТ сектора?',
        type: 'autoComplete',
        multiple: false,
        options: [{id:1,name:'Да'}, {id:2,name:'Не'}, {id:3,name:'Все още уча'}],
        abbreviation: 'workInIT'
    },
    
    {
        id: 2,
        label: 'В коя компания работите?',
        type: 'textField',
        abbreviation: 'company'
    },
    {
        id: 3,
        label: 'Държава на компанията?',
        type: 'autoComplete',
        multiple: false,
        options: [{id:1,name:'България'}, {id:2,name:'САЩ'}, {id:3,name:'Германия'}, {id:4,name:'Великобритания'}, {id:5,name:'Друга'}],
        abbreviation: 'companyCountry'
    },
    {
        id: 4,
        label: 'Позиция в компанията',
        type: 'autoComplete',
        multiple: false,
        options: [{id:1,name:'Front end developer'}, {id:2,name:'Back end developer'}, {id:3,name:'Full stack developer'}, {id:4,name:'QA'}, {id:5,name:'DevOps'}, {id:6,name:'Друга'}],
        abbreviation: 'position'
    },
    {
        id: 5,
        label: 'Сениорити в компанията',
        type: 'autoComplete',
        multiple: false,
        options: [{id:1,name:'Trainee'}, {id:2,name:'Junior'}, {id:3,name:'Mid'}, {id:4,name:'Senior'}, {id:5,name:'Lead'}, {id:6,name:'Нямаме строго определена йерархия в компанията'}],
        abbreviation: 'seniority'
    },
    {
        id: 6,
        label: 'Време в Компанията',
        type: 'autoComplete',
        multiple: false,
        options: [{id:1,name:'Под 1 година'}, {id:2,name:'1-2 години'}, {id:3, name: 'Над 2 години'}],
        abbreviation: 'timeInCompany'
    },
    {
        id: 7,
        label: 'Доволни ли сте',
        type: 'autoComplete',
        multiple: false,
        options: [{id:1,name:'Да'}, {id:2,name:'Не'}, {id:3,name:'Не мога да преценя'}],
        abbreviation: 'satisfied'
    },
    {
        id: 8,
        label: 'Технологиите с които работите са:',
        type: 'autoComplete',
        multiple: true,
        options: [
            {id:1,name:'HTML'},
            {id:2,name:'CSS'},
            {id:3,name:'JavaScript'},
            {id:4,name:'React'},
            {id:5,name:'Angular'},
            {id:6,name:'Vue'},
            {id:7,name:'Node.js'},
            {id:8,name:'PHP'},
            {id:9,name:'Java'},
            {id:10,name:'C#'},
            {id:11,name:'Python'},
            {id:12,name:'Ruby'},
            {id:13,name:'SQL'},
            {id:14,name:'NoSQL'},
            {id:15,name:'.NET'},
            {id:16,name:'Django'},
            {id:17,name:'Spring'},
            {id:18,name:'Laravel'},
            {id:19,name:'Symfony'},
            {id:20,name:'ASP.NET'},
            {id:21,name:'Express'},
            {id:22,name:'Flask'},
            {id:23,name:'Други'}
        ],
        abbreviation: 'technologies'
    },
    {
        id:9,
        label: 'Заплата',
        type: 'autoComplete',
        multiple: false,
        options: [{id:1,name:'Под 1000 лв'}, {id:2,name:'1000-2000 лв'}, {id:3,name:'2000-3000 лв'}, {id:4,name:'3000-4000 лв'}, {id:5,name:'4000-5000 лв'}, {id:6,name:'Над 5000 лв'}],
        abbreviation: 'salary'
    }
];
