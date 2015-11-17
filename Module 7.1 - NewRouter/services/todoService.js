/**
 * Created by ranwahle on 12/27/14.
 */
(function (angular) {

    var service = function ($http, $resource) {
        var self = this,
            loadTasks = function () {
                var promise = $http.get('/SDPToDo-Server/api/Todo');
                promise.success(function(tasks)
                {
                   self.tasks = tasks;
                });
                return promise;
            },

            getTaskById = function (taskId) {
                var task =  $resource('/SDPTodo-Server/api/Todo/:id',{},
                    {get: {method: 'GET', params: { id:  taskId }}
            });

                return task.get();
            },

            saveTask = function(task)
            {
              if (!task || !task.Id)
              {
                  return;
              }

                var promise = $http.put('/SDPToDo-Server/api/Todo/' + task.Id, task);

                return promise;

            },

            addTask = function (newTask) {
                //  tasks.push(newTask);
                var promise = $http.post('/SDPToDo-Server/api/Todo', newTask);

                return promise;
            };

        //Expose what I need, encapsulate all other

        this.loadTasks = loadTasks;
        this.addTask = addTask;
        this.getTaskById = getTaskById;
        this.saveTask = saveTask;


    };

    angular.module('ToDoListApp.Services',[]).service('todoService', ['$http', '$resource', service]);

}(window.angular));