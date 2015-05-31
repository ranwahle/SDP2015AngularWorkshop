/**
 * Created by ranwahle on 12/27/14.
 */

(function(angular)
{
    var directive = function()
    {
        return {
            require: 'ngModel',
            link: function($scope, iElm, iAttrs, controller) {
                //  controller.$parsers.push(function(viewValue){
                //     if (moment( viewValue).isValid()) {
                console.log($scope);
                controller.$validators.formDateValidator =
                    function(modelValue, viewValue)
                {
                    return moment( viewValue).isValid();
                };
                //    return viewValue;
                //} else {
                //    controller.$setValidity('form-date-validator', false);
                //    return undefined;
                //}
            }
        };

    }
    angular.module('ToDoListApp').
        directive('formDateValidator',
        [directive]);
}(window.angular));