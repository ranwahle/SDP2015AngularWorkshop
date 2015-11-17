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

        this.saveTask = function()
        {
          todoService.saveTask(self.task).success(function()
          {
              $location.path('/ViewAllTasks');
          });
        };

        getTaskById();

    };

    angular.module('ToDoListApp.EditTask', []).controller('EditTaskController',
        ['todoService','$routeParams','$location', controller]);

}(window.angular));
