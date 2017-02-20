angular.module('app')
    .factory('dataStore', function ()
{

    this.tabs = localStorage.getItem('allTabs') ? JSON.parse(localStorage.getItem('allTabs')) : [
        {
            id: 1,
            title: 'tab 1 title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita impedit tempora voluptas? Animi atque blanditiis cupiditate  dicta doloribus, dolorum earum ex facilis, illum mollitia officia quasi quia',
            categories: [
                {
                    category_name: 'first category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'add_1' ]
                },
                {
                    category_name: 'seconde category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'sub_category_3', 'sub_category_4', 'add_1']
                }
            ],
            labels: ['first label'],
            background: 'default'
        },
        {
            id: 2,
            title: 'tab 2 title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita impedit tempora voluptas? Animi atque blanditiis cupiditate  dicta doloribus, dolorum earum ex facilis, illum mollitia officia quasi quia',
            categories: [
                {
                    category_name: 'first category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'add_2' ]
                },
                {
                    category_name: 'seconde category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'sub_category_3', 'sub_category_4']
                }
            ],
            labels: ['first label', 'seconde label', 'third label'],
            background: 'red'
        },
        {
            id: 3,
            title: 'tab 3 title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita impedit tempora voluptas? Animi atque blanditiis cupiditate  dicta doloribus, dolorum earum ex facilis, illum mollitia officia quasi quia',
            categories: [
                {
                    category_name: 'third category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'add_6' ]
                },
                {
                    category_name: 'seconde category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'sub_category_3', 'sub_category_4', 'add_5']
                }
            ],
            labels: ['first label', 'seconde label'],
            background: 'brown'
        }
    ];

    this.colors = ['default', 'red', 'blue', 'green', 'yellow', 'violet', 'brown'];

    this.categories = localStorage.getItem('allCategories') ? JSON.parse(localStorage.getItem('allCategories')) : [
        {
            category_name: 'first category',
            subcategory: ['sub_category_1', 'sub_category_2', 'add_6', 'add_2',  'add_1']
        },
        {
            category_name: 'seconde category',
            subcategory: ['sub_category_1', 'sub_category_2', 'sub_category_3', 'sub_category_4',  'add_5', 'add_1']
        },
        {
            category_name: 'third category',
            subcategory: ['sub_category_1', 'sub_category_2', 'sub_category_3', 'sub_category_4', 'add_6']
        }
    ];

    this.labels = localStorage.getItem('allLabels') ? JSON.parse(localStorage.getItem('allLabels')) : ['first label', 'seconde label', 'third label'];

    this.filtersObject = {
        background: [],
        labels: [],
        categories: {}
    };


    return {
        allTabs: this.tabs,
        allColors: this.colors,
        allCategory: this.categories,
        allLabels: this.labels,
        filterSettings: this.filtersObject,
        saveAllTabs: function (tabs)
        {
            localStorage.setItem('allTabs', JSON.stringify(tabs))
        },
        saveAllCategories: function (categories)
        {
            localStorage.setItem('allCategories', JSON.stringify(categories))
        },
        saveAllLabels: function (labels)
        {
            localStorage.setItem('allLabels', JSON.stringify(labels))
        }

    }
});
