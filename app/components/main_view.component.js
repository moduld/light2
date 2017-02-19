angular.module('app')
    .component('mainView', {
        templateUrl: "app/components/main_view.component.html",
        controller: mainViewCtrl
    });

function mainViewCtrl(dataStore)
{
    var self = this;

    self.tabs = dataStore.allTabs;
    self.allCategories = dataStore.allCategory;
    self.allLabels = dataStore.allLabels;
    self.allColors = dataStore.allColors;
    self.filtersData = {
        background: [],
        labels: [],
        categories: {}
    };

    self.filterOutput = filterOutput;
    self.fillFilterData = fillFilterData;
    self.fillCategoriesData = fillCategoriesData;

    function fillFilterData(flag, filtering, data)
    {
            if (filtering.color || filtering.label){
                self.filtersData[flag].push(data)
            } else {
                self.filtersData[flag].splice(self.filtersData[flag].indexOf(data), 1)
            }


    }

    function fillCategoriesData(key, filtering)
    {
        filtering ? self.filtersData.categories[key] = [] : delete self.filtersData.categories[key]
        console.log( self.filtersData)

    }

    function filterOutput(item)
    {
        if(findColors(item) && findLabels(item)){
            console.log(item)
            return true
        } else { return false }

    }

    function findColors(item)
    {
       if(self.filtersData.background.length){
           if (self.filtersData.background.indexOf(item.background) >= 0){return true}
       } else {
           return true
       }
    }

    function findLabels(item)
    {
        if (self.filtersData.labels.length){
            for (var i = 0; i < item.labels.length; i++){
                if (self.filtersData.labels.indexOf(item.labels[i]) >= 0){return true}
            }
        } else {
            return true
        }
    }

}