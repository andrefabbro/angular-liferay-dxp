angular.module('app.directives').directive('liferay', [ 'url',
  function(url) {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = url.createRenderUrl('liferay');

    return directive;
  }
]);