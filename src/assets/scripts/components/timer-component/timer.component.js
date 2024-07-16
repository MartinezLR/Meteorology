angular.module('rootModule').component('timerComponent', {
    templateUrl: 'src/assets/scripts/components/timer-component/timer.component.html',
    controller: timerController,
    controllerAs: 'ctrl'
});

// Start the refresh time interval when the component is initialized
timerController.$inject = ['dateTimeService'];

function timerController(dateTimeService) {
    this.completeTime = dateTimeService.getCompleteTime();
}