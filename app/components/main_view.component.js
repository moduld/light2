angular.module('app')
    .component('mainView', {
        templateUrl: "app/components/main_view.component.html",
        controller: mainViewCtrl
    });

function mainViewCtrl(dataStore)
{
    var self = this;

    self.tabs = dataStore.allTabs;
    self.allCategories = [];

    var tempCategoryArray = [];

    dataStore.allTabs.forEach(function (tab)
    {
        if (tab.categories.length){
            for(var i = tab.categories.length; i--; tempCategoryArray.push(tab.categories[i])){}
        }
    });
    // var temp = tempCategoryArray.slice()

    // self.allCategories = tempCategoryArray.filter(function (item, i, arr)
    // {
    //     var current = tempCategoryArray.slice(i, 1)
    //     console.log(current)
    // })

    console.log(tempCategoryArray)
    while(tempCategoryArray.length){
        var last = tempCategoryArray.pop();

        for(var i = 0; i < tempCategoryArray.length; i++){
            if (last.category_name === tempCategoryArray[i].category_name){

                for (var j = 0; j < tempCategoryArray[i].subcategory.length; j++){
                    last.subcategory.indexOf(tempCategoryArray[i].subcategory[j]) < 0 && last.subcategory.push(tempCategoryArray[i].subcategory[j])
                }
                tempCategoryArray.splice(i, 1)
                console.log(last.category_name === tempCategoryArray[i].category_name)
            }
        }

        self.allCategories.push(last)
    }
    console.log(self.allCategories)
    // for (var i = 0; i < tempCategoryArray.length; i++){
    //     var last = tempCategoryArray.pop()
    //     console.log(last)
    // }
}