/**
 * Created by ranwahle on 12/27/14.
 */
(function(angular)
{

    var service = function()
    {
        var tasks = [{title:'Prepare for presentation',
                description: 'Prepare for angularJs presentation',
                dueDate: new Date(2014,11,28)}],
       loadTasks = function()
       {
           return angular.copy( tasks);
       },

        addTask = function(newTask)
        {
          tasks.push(newTask);
        };

        //Expose what I need, encapsulate all other

        this.loadTasks = loadTasks;
        this.addTask = addTask;




    };

    angular.module('ToDoListApp').service('todoService', [service]);

}(window.angular));