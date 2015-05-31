/**
 * Created by ranwahle on 12/27/14.
 */
(function (angular) {

    var service = function ($http, $resource) {
        var tasks = [{
                title: 'Prepare for presentation',
                description: 'Prepare for angularJs presentation',
                dueDate: new Date(2014, 11, 28)
            }],
            loadTasks = function () {
                var promise = $http.get('/SDPToDo-Server/api/Todo');
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

    angular.module('ToDoListApp').service('todoService', ['$http', '$resource', service]);

}(window.angular));