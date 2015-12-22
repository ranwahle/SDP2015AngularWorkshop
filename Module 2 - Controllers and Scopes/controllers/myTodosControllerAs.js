/**
 * Created by ranwahle on 12/27/14.
 */
/**
 * Created by ranwahle on 12/27/14.
 */
(function(angular)
{
    var controller = function()
    {
        this.myTodos = [
            {title:'Prepare for presentation',
                description: 'Prepare for angularJs presentation',
                dueDate: new Date(2014,11,28)}
        ];



    };

    if (!controller.prototype.addTask)
    {
        controller.prototype.addTask =  function()
        {
            this.newTask.dueDate = moment(this.newTask.dueDate, 'DD-MM-YYYY');
            this.myTodos.push( this.newTask);
            this.newTask = {};
        };
    }

    angular.module('ToDoListApp').controller('myToDosController',[ controller]);
}(window.angular));