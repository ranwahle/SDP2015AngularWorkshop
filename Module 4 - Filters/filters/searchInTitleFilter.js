/**
 * Created by ranwahle on 12/28/14.
 */

(function(angular)
{

    var filter = function()
    {
      return function(tasks, title)
      {
          if (!tasks || !title) {
              return tasks;
          }

        return tasks.filter(function(task)
        {
            return task.Title.indexOf(title) >= 0;
        }) ;
      };
    };

    angular.module('ToDoListApp').filter('searchInTitle', [filter]);

}(window.angular));