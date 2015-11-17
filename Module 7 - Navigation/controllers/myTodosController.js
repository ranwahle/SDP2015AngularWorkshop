/**
 * Created by ranwahle on 12/27/14.
 */

(function (angular) {
    var  _$state,
        controller = function (todoService, $state) {
            _$state = $state;
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
                _$state.go('AllTasks');
            });
            this.newTask = {};
        };

        controller.prototype.loadTasks = function()
        {
            var self = this;
            this.todoService.loadTasks().success(function(response)
            {
                self.myTodos = response;
            });
        };

        controller.prototype.getTaskById = function()
        {
            var self = this;
            this.newTask =  this.todoService.getTaskById(this.taskId);


        };
    }

    angular.module('ToDoListApp').controller('myToDosController', ['todoService','$state', controller]);
}(window.angular));