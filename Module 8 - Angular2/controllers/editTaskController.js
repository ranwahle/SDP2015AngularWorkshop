/**
 * Created by ranwahle on 12/27/14.
 */

(function(angular)
{
    var controller = function(todoService,$stateParams,
                              $state)
    {
       var taskId = $stateParams.id,
           self =this,

        getTaskById = function()
        {
            self.task = todoService.getTaskById(taskId);
        };

        this.saveTask = function()
        {
          todoService.saveTask(self.task).success(function()
          {
              $state.go('AllTasks');
          });
        };

        getTaskById();

    };

    angular.module('ToDoListApp').controller('editTaskController',
        ['todoService','$stateParams','$state', controller]);

}(window.angular));
