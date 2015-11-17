/**
 * Created by ranwahle on 12/27/14.
 */

(function(angular)
{
    var controller = function(todoService,$routeParams,
                              $location)
    {
       var taskId = $routeParams.id,
           self =this,

        getTaskById = function()
        {
            self.task = todoService.getTaskById(taskId);
        };

        this.addTask = function()
        {
          todoService.addTask(self.newTask).success(function()
          {
              $location.path('/ViewAllTasks');
          });
        };

       // getTaskById();

    };



    angular.module('ToDoListApp.NewTask', []).controller('NewTaskController',
        ['todoService','$routeParams','$location', controller]);

}(window.angular));
