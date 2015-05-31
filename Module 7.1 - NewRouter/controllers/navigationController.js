/**
 * Created by ranwahle on 12/28/14.
 */
(function(angular)
{
    var controller = function($rootScope)
    {
        //$rootScope.$on('$stateChangeSuccess',
        //function()
        //{
        //    $rootScope.currentStateName =
        //        $state.current.name;
        //});
    };

    angular.module('ToDoListApp').controller(
        'navigationController',
        ['$rootScope', controller]
    );

}(window.angular));