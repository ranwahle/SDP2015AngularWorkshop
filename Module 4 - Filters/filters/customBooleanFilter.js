/**
 * Created by ranwahle on 12/27/14.
 */

(function(angular)
{
    var filter = function()
    {
      return function(source)
      {
        return source ? 'Done' : 'Not Yet'
      };
    };

    angular.module('ToDoListApp')
        .filter('booleanFilter', [filter]);

}(window.angular));
