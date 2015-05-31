
@Component({
    selector: 'todo-navigation'
})
    @Template({
        url: 'Partials/navigation.html'
    })

        class NavigationController{
            constructor()
            {

            }


        }

/**
 *
 *
 * Created by ranwahle on 12/28/14.
 */
//(function(angular)
//{
//    var controller = function($rootScope, $state)
//    {
//        $rootScope.$on('$stateChangeSuccess',
//        function()
//        {
//            $rootScope.currentStateName =
//                $state.current.name;
//        });
//    };
//
//    angular.module('ToDoListApp').controller(
//        'navigationController',
//        ['$rootScope','$state', controller]
//    );
//
//}(window.angular));