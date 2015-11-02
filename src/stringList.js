angular.module('stringList',[])
   .run(['$templateCache', function($templateCache) {
      var template = 
         "<ol>"
        +"   <li data-ng-repeat='item in items'>"
        +"      <input type='text' data-ng-model='item' />"
        +"      <button data-ng-click='remove($index)'>&times;</button>"
        +"   </li>"
        +"</ol>"
        +"<input type=button value='+' data-ng-click='add()' />";
      $templateCache.put('stringList.html', template);
   }])
   .directive('stringList', function() {
      return {
           restrict: 'EA',
           scope: {
               'items': '=model'
           },
           link: function(scope) {
               scope.add = function() {
                  this.items.push('');
               };
               scope.remove = function(index) {
                  this.items.splice(index, 1);
               }
           },
           templateUrl: function(elem, attrs) {
               return attrs.templateUrl || "stringList.html";
           }
       };
   })
;
