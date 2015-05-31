/**
 * Created by ranwahle on 12/28/14.
 */

(function(angular)
{
    var factory = function($http)
    {
        var loadTasks = function () {
            var promise = $http.
                get('/SDPToDo-Server/api/Todo');
            return promise;
        };

        return {
            loadTasks : loadTasks
        };
    };

    angular.module('ToDoListApp').factory('loadTasksFactory',
    ['$http',factory]);

}(window.angular));