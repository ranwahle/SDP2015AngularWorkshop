/**
 * Created by ranwahle on 12/27/14.
 */

(function (angular) {
    var controller = function (todoService, $scope) {

        var self = this;
      //  this.myTodos = todoService.loadTasks();
        this.todoService = todoService;

        this.loadTasks();





    };

    if (!controller.prototype.addTask) {
        controller.prototype.addTask = function () {

            var self = this;

            this.newTask.DueDate = moment(this.newTask.DueDate, 'DD-MM-YYYY');
            this.todoService.addTask(this.newTask).success(function()
            {
                self.loadTasks();
            });
            this.newTask = {};
        };

        controller.prototype.loadTasks = function()
        {
            var self = this;
            this.todoService.loadTasks().success(function(response)
            {
               // self.myTodos = response;
            });
        };

        controller.prototype.getTaskById = function()
        {
            var self = this;
            this.newTask =  this.todoService.getTaskById(this.taskId);


        };
    }

    


    angular.module('ToDoListApp.viewAllTasks', [])
        .controller('ViewAllTasksController', ['todoService','$scope',controller]);


    //angular.module('ToDoListApp.completed', ['ToDoListApp.common']);
    //angular.module('ToDoListApp.ViewInComplete', ['ToDoListApp.common']);
  //  'ViewInComplete'
}(window.angular));