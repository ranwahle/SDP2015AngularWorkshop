/**
 * Created by ranwahle on 12/27/14.
 */



(function(angular)
{
    var controller = function($scope)
    {
        $scope.myTodos = [
            {title:'Prepare for presentation',
            description: 'Prepare for angularJs presentation',
            dueDate: new Date(2014,12,28),
            isCompleted : false}
        ];

        $scope.addTask = function()
        {

            //$scope.newTask.dueDate = moment(this.newTask.dueDate, 'DD-MM-YYYY');
            $scope.myTodos.push( $scope.newTask);


            $scope.newTask = {};
        };

    }
    angular.module('ToDoListApp').
            ('myToDosController',
        ['$scope', controller]);
}(window.angular));