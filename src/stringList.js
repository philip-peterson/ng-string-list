angular.module('stringList',[])
  .run(['$templateCache', function($templateCache) {
      var template = 
         "<ol>"
       + "  <li data-ng-repeat='item in items track by $index'>"
       + "    <input type='text' data-ng-model='items[$index]' />"
       + "    <button data-ng-click='remove($index)'>&times;</button>"
       + "  </li>"
       + "</ol>"
       + "<input type=button value='+' data-ng-click='add()' />";
      $templateCache.put('stringList.html', template);
  }])
  .directive('stringList', function() {
    return {
      restrict: 'EA',
      scope: {
        'items': '=model'
      },
      link: function(scope) {
        if (!scope.items) {
          scope.items = [];
        }
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
