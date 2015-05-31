/**
 * Created by ranwahle on 12/27/14.
 */
(function (angular) {

    var service = function ($http, $resource, $log) {

          var  loadTasks = function () {
                var promise = $http.
                    get('/SDPToDo-Server/api/Todo');
                return promise;
            },

            getTaskById = function (taskId) {
                var resource =
                    $resource('/SDPTodo-Server/api/Todo/:id',{},
                    {get: {method: 'GET', params: { id:  taskId }}
            });

                return resource.get();
            },

            addTask = function (newTask) {
                //  tasks.push(newTask);
               // var promise = $http.post
               // ('/SDPToDo-Server/api/Todo', newTask);

                var promise = $http({
                    url: '/SDPToDo-Server/api/Todo',
                    method: 'post',
                    data: newTask
                });

                promise.success(function()
                {
                    $log.debug
                    ('Your task has been added');
                }).error(function(response)
                {
                    $log.error(response);
                }).finally(function()
                {
                    $log.debug('We are at the finally handler');
                });

                return promise;
            };

        //Expose what I need, encapsulate all other

        this.loadTasks = loadTasks;
        this.addTask = addTask;
        this.getTaskById = getTaskById;


    };

    angular.module('ToDoListApp').service('todoService',
        ['$http', '$resource','$log', service]);

}(window.angular));