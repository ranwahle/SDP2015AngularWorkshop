/**
 * Created by ranwahle on 12/27/14.
 */
/**
 * Created by ranwahle on 12/27/14.
 */
(function(angular)
{

    var controller = function(todoService)
    {
        this.myTodos = todoService.loadTasks();
        this.todoService = todoService;



    }

    if (!controller.prototype.addTask)
    {
        controller.prototype.addTask =  function()
        {
            this.newTask.dueDate = moment(this.newTask.dueDate, 'DD-MM-YYYY');
            this.todoService.addTask( this.newTask);
            this.myTodos = this.todoService.loadTasks();
            this.newTask = {};
        };
    }

    angular.module('ToDoListApp').
        controller('myToDosController',
        ['todoService', controller]);
}(window.angular));










