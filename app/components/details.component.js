angular.module('app')
    .component('detailsComponent', {
        templateUrl: "app/components/details.component.html",
        controller: detailsCtrl
    });

function detailsCtrl(dataStore, $stateParams)
{
    var self = this;
    var id = $stateParams.id;
    self.tab = dataStore.allTabs[id];
    console.log( self.tab)
}