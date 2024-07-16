angular.module('rootModule').service('translationService', ['HTTPService', function (HTTPService) {
    this.getTranslation = function () {
        return HTTPService.request({
            method: 'get',
            url: 'src/assets/json/translation.json'
        });
    };
}]);