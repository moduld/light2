angular.module('app')
    .component('newNotice', {
        templateUrl: "app/components/new_notice.component.html",
        controller: newNoticeCtrl
    });

function newNoticeCtrl(dataStore)
{
    var self = this;

    self.addNewCategory = addNewCategory;
    self.addSubCategory =addSubCategory;
    self.deleteCategory = deleteCategory;
    self.deleteSubcategory = deleteSubcategory;
    self.addLabel = addLabel;
    self.deleteLAbel = deleteLAbel;
    self.colorChange = colorChange;

    self.allCategories = dataStore.allCategory;
    self.allLabels = dataStore.allLabels;
    self.allColors = dataStore.allColors;

    self.theTab = {
        background: 'default'
    };

    function addNewCategory(data)
    {
        if (data.name && data.name.trim()){
            for(var i = 0; i < dataStore.allCategory.length; i++){
                if (data.name === dataStore.allCategory[i].category_name){
                    return
                }
            }
            dataStore.allCategory.push({category_name: data.name, subcategory: []});
            data.name = '';
        }

    }

    function addSubCategory(category)
    {
        if (category.newCategory && category.newCategory.trim() && category.subcategory.indexOf(category.newCategory) < 0){
            category.subcategory.push(category.newCategory);
            category.newCategory = '';
        }
    }

    function deleteCategory(index)
    {
        dataStore.allCategory.splice(index, 1)
    }

    function deleteSubcategory(index, array)
    {
        array.splice(index, 1)
    }

    function addLabel(newLabel)
    {
        if(newLabel.name && newLabel.name.trim() && dataStore.allLabels.indexOf(newLabel.name) < 0){
            dataStore.allLabels.push(newLabel.name);
            newLabel.name = '';
        }
    }

    function deleteLAbel(index)
    {
        dataStore.allLabels.splice(index, 1)
    }

    function colorChange(color)
    {
        self.theTab.background = color;
    }
}