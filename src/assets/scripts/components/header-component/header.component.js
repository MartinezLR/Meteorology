angular.module('rootModule').component('headerComponent', {
    templateUrl: 'src/assets/scripts/components/header-component/header.component.html',
    controller: headerController,
    controllerAs: 'ctrl'
});

// Start the refresh time interval when the component is initialized
headerController.$inject = ['dateTimeService'];

function headerController(dateTimeService) {
    this.completeDateDate = dateTimeService.getCompleteDate();
}
