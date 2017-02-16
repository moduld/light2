angular.module('app')
    .factory('dataStore', function ()
{
    this.tabs = [
        {
            title: 'tab 1 title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita impedit tempora voluptas? Animi atque blanditiis cupiditate  dicta doloribus, dolorum earum ex facilis, illum mollitia officia quasi quia',
            categories: [
                {
                    category_name: 'first_category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'add_1' ]
                },
                {
                    category_name: 'seconde_category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'sub_category_3', 'sub_category_4', 'add_1']
                }
            ],
            labels: ['first label', 'seconde label', 'third label'],
            background: 'default'
        },
        {
            title: 'tab 2 title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita impedit tempora voluptas? Animi atque blanditiis cupiditate  dicta doloribus, dolorum earum ex facilis, illum mollitia officia quasi quia',
            categories: [
                {
                    category_name: 'first_category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'add_2' ]
                },
                {
                    category_name: 'seconde_category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'sub_category_3', 'sub_category_4']
                }
            ],
            labels: ['first label', 'seconde label', 'third label', 'first label', 'seconde label'],
            background: 'red'
        },
        {
            title: 'tab 3 title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita impedit tempora voluptas? Animi atque blanditiis cupiditate  dicta doloribus, dolorum earum ex facilis, illum mollitia officia quasi quia',
            categories: [
                {
                    category_name: 'first_category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'add_6' ]
                },
                {
                    category_name: 'seconde_category',
                    subcategory: ['sub_category_1', 'sub_category_2', 'sub_category_3', 'sub_category_4', 'add_5']
                }
            ],
            labels: ['first label', 'seconde label', 'third label', 'first label', 'seconde label'],
            background: 'brown'
        }
    ];

    this.colors = ['default', 'red', 'blue', 'green', 'yellow', 'violet', 'brown'];
    return {
        allTabs: this.tabs,
        allColors: this.colors
    }
});
