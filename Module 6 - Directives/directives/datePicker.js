/**
 * Created by ranwahle on 12/27/14.
 */
(function(angular)
{
    var directive = function()
    {
     return {
      restrict : 'E',
         template: '<input type="text"/>',
         require: 'ngModel',
         replace: true,
         link: function(scope, element, attrs, controller)
         {
           element.datepicker();

         }
     };
    };

    angular.module('ToDoListApp').directive('datePicker',[directive]);
}(window.angular));