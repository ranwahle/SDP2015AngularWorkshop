/**
 * Created by ranwahle on 12/27/14.
 */

(function(andular)
{
    var app = angular.module('ToDoListApp',['ngResource', 'ui.router']);

    app.config(function( $stateProvider)
    {
       $stateProvider.state('AllTasks',
           {
               url: '/ViewAllTasks',
               templateUrl: 'Partials/AllTasks.Html',
               controller: 'myToDosController',
               controllerAs: 'controller'
           }).state('Completed',
           {
               url: '/ViewCompleted',
               templateUrl: 'Partials/CompletedTasks.Html',
               controller: 'myToDosController',
               controllerAs: 'controller'
           }).state('InComplete',
           {
               url: '/ViewInComplete',
               templateUrl: 'Partials/IncompleteTasks.Html',
               controller: 'myToDosController',
               controllerAs: 'controller'
           }).state('NewTask',
           {
               url: '/NewTask',
               templateUrl: 'Partials/NewTask.Html',
               controller: 'myToDosController',
               controllerAs: 'controller'
           }).state('EditTask',{
               url: '/EditTask/:id',
               templateUrl: 'Partials/EditTask.html',
               controller: 'editTaskController',
               controllerAs : 'controller'
           });
    });

}(window.angular))