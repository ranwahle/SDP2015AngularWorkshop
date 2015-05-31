/**
 * Created by ranwahle on 12/27/14.
 */

(function (angular) {
    var directive = function () {
        return {
            require: 'ngModel',
            link: function ($scope, iElm, iAttrs, controller) {
                controller.$validators.formDateValidator = function (modelValue, viewValue) {
                    return moment(viewValue).isValid();
                };

            }
        };

    }
    angular.module('ToDoListApp').directive('formDateValidator', [directive]);
}(window.angular));