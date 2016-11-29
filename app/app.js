'use strict';

angular.module('app.controllers', []);
angular.module('app.factories', []);
angular.module("app.directives", []);

function bootstrap(id, portletId) {
  var app = angular.module(id, [ "ui.router", "app.factories", "app.controllers", "app.directives", "jcs-autoValidate" ]);

  app.run([ '$rootScope', 'releaseFactory', 'url', 'bootstrap3ElementModifier', 'defaultErrorMessageResolver',
    function($rootScope, releaseFactory, url, bootstrap3ElementModifier, defaultErrorMessageResolver) {

      $rootScope.portletId = portletId.substr(1, portletId.length - 2);

      $rootScope.liferay = {
        token : Liferay.authToken,
        companyId : Liferay.ThemeDisplay.getCompanyId(),
        loggedIn : Liferay.ThemeDisplay.isSignedIn()
      };
      
      releaseFactory.getRelease().then(function(release) {
        $rootScope.liferay.release = release;
      });
      
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (!toState.hasOwnProperty('fixedUrl')) {
          toState.templateUrl = url.createRenderUrl(toState.templateUrl);
          toState.fixedUrl = true;
        }
      });
      
      bootstrap3ElementModifier.enableValidationStateIcons(true);
      defaultErrorMessageResolver.setI18nFileRootPath(Liferay.ThemeDisplay.getPathThemeRoot() + '/js/angular-auto-validate/dist/lang');
      defaultErrorMessageResolver.setCulture(Liferay.ThemeDisplay.getBCP47LanguageId());
    }
  ]);
  
  app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', 'urlProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider, urlProvider) {

      urlProvider.setPid(portletId);

      $locationProvider.html5Mode(true);

      var currentPageUrl = Liferay.ThemeDisplay.getLayoutURL();
      currentPageUrl = currentPageUrl.substr(currentPageUrl.indexOf('/', 10));
      $urlRouterProvider.otherwise(currentPageUrl);

      $stateProvider
        .state("list", {
          url: currentPageUrl,
          templateUrl: 'list',
          controller: 'ListCtrl'
        })
        .state("detail", {
          templateUrl: 'detail',
          params: {
            bookmark: {}
          },
          controller: 'DetailCtrl'
        })
        .state("add", {
          templateUrl: 'add',
          controller: 'AddCtrl'
        });
    }
  ]);

  angular.bootstrap(document.getElementById(id), [id]);
}