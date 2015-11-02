angular.module('stringList',[])
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
