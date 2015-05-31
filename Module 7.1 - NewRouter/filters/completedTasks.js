/**
 * Created by ranwahle on 12/27/14.
 */
(function(angular)
{
    var filter = function()
    {
      return function(tasks, arg)
      {
          if (!tasks)
          {
              return tasks;
          }
          return tasks.filter(function(task)
          {
              return task.IsCompleted === arg;
          });

      };
    };
    angular.module('ToDoListApp').filter('completion', [filter]);
}(window.angular));