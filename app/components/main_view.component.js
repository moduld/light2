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
    self.allLabels = [];
    self.allColors = dataStore.allColors;

    var tempCategoryArray = [];
    var tempLabelsArray = [];

    dataStore.allTabs.forEach(function (tab)
    {
        if (tab.categories.length){
            for(var i = tab.categories.length; i--; tempCategoryArray.push(tab.categories[i])){}
        }

        if (tab.labels.length){
            for(var j = tab.labels.length; j--; tempLabelsArray.push(tab.labels[j])){}
        }
    });

    while(tempLabelsArray.length){
        var label = tempLabelsArray.pop();
        tempLabelsArray.indexOf(label) < 0 && self.allLabels.push(label)
    }

    console.log(self.allLabels)
    while(tempCategoryArray.length){
        var last = tempCategoryArray.pop();

        tempCategoryArray = tempCategoryArray.filter(function (item, i)
        {
            if (last.category_name === tempCategoryArray[i].category_name){
                for (var j = 0; j < tempCategoryArray[i].subcategory.length; j++){
                    last.subcategory.indexOf(tempCategoryArray[i].subcategory[j]) < 0 && last.subcategory.push(tempCategoryArray[i].subcategory[j])
                }
                return false
            }
            return true
        })

        self.allCategories.push(last)
    }
    console.log(self.allCategories)

}