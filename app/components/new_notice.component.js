angular.module('app')
    .component('newNotice', {
        templateUrl: "app/components/new_notice.component.html",
        controller: newNoticeCtrl
    });

function newNoticeCtrl(dataStore, $location, $stateParams)
{
    var self = this;

    var id = $stateParams.id;
    self.theTab = id !== undefined ? JSON.parse(JSON.stringify(dataStore.allTabs[id])) : {
            title: '',
            text: '',
            categories:[],
            labels: [],
            background: 'default'
            };
console.log(self.theTab)
    self.addNewCategory = addNewCategory;
    self.addSubCategory =addSubCategory;
    self.deleteCategory = deleteCategory;
    self.deleteSubcategory = deleteSubcategory;
    self.addLabel = addLabel;
    self.deleteLAbel = deleteLAbel;
    self.colorChange = colorChange;
    self.addTabCategory = addTabCategory;
    self.addTabSubcategory = addTabSubcategory;
    self.addTabLabel = addTabLabel;
    self.saveTab = saveTab;
    self.isChecked = isChecked;

    self.allCategories = dataStore.allCategory;
    self.allLabels = dataStore.allLabels;
    self.allColors = dataStore.allColors;

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

    function addTabCategory(category_name, flag)
    {

        if (flag){
            for (var i = 0; i < self.theTab.categories.length; i++){
                if (category_name === self.theTab.categories[i].category_name){
                    return;
                }
            }
            self.theTab.categories.push({category_name: category_name, subcategory: []});
        } else {
            self.theTab.categories = self.theTab.categories.filter(function (item)
            {
                return item.category_name !== category_name
            })
        }
    }

    function addTabSubcategory(cat, index, flag)
    {
        self.theTab.categories.forEach(function (item)
        {
            if(cat.category_name === item.category_name){
                flag ? item.subcategory.push(cat.subcategory[index]) : item.subcategory = item.subcategory.filter(function (sub)
                    {
                        return sub !== cat.subcategory[index]
                    })
            }
        })
    }

    function addTabLabel(label, flag)
    {
        flag ? self.theTab.labels.push(label) : self.theTab.labels.indexOf(label) >= 0 && self.theTab.labels.splice(self.theTab.labels.indexOf(label), 1);
    }

    function saveTab()
    {
        id ? dataStore.allTabs.splice(id, 1, self.theTab) : dataStore.allTabs.push(self.theTab);
        $location.path('main')
    }

    function isChecked(name, label, catName)
    {
        if (name === 'label'){
            return self.theTab.labels.indexOf(label) >= 0
        }
        if (name === 'category'){
            for (var i = 0; i < self.theTab.categories.length; i++){
                if (self.theTab.categories[i].category_name === label){
                    return true
                }
            }
        }
        if (name === 'subcat'){
            for (var j = 0; j < self.theTab.categories.length; j++){
                if (self.theTab.categories[j].category_name === catName){
                    return self.theTab.categories[j].subcategory.indexOf(label) >= 0

                }
            }

        }
    }
}