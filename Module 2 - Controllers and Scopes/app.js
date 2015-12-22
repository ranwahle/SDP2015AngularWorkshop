/**
 * Created by ranwahle on 12/27/14.
 */






(function(angular)
{
    var app =
        angular.module('ToDoListApp',[]);

    angular.element(document).ready(function()
    {
       angular.bootstrap(document.body, ['ToDoListApp']);
    });

}(window.angular));