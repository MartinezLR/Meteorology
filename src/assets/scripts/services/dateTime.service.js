angular.module('rootModule').service('dateTimeService', [function () {

    this.getDay = function () {
        let day = new Date().getDate();
        return day < 10 ? `0${day}` : day;
    };

    this.getMonth = function () {
        let month = new Date().getMonth() + 1;
        return month < 10 ? `0${month}` : month;
    };

    this.getYear = function () {
        return new Date().getFullYear();
    };

    this.getCompleteDate = function () {
        return `${this.getDay()}/${this.getMonth()}/${this.getYear()}`;
    };

    this.getHours = function () {
        let hours = new Date().getHours() % 12;
        hours = hours ? hours : 12;
        return hours < 10 ? `0${hours}` : hours;
    };

    this.getMinutes = function () {
        let minutes = new Date().getMinutes();
        return minutes < 10 ? `0${minutes}` : minutes;
    };

    this.getPeriods = function () {
        return new Date().getHours() >= 12 ? 'PM' : 'AM';
    };

    this.getCompleteTime = function () {
        return `${this.getHours()}:${this.getMinutes()} ${this.getPeriods()}`;
    };

    this.getRefreshTime = function () {
        return new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: "America/Sao_Paulo" });
    };

}]);
