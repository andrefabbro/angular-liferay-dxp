angular.module("app.factories").provider('url', function() {

  this.pid = '';

  this.$get = function() {
    var pid = this.pid;
    return {
      createRenderUrl : function(page) {
        var renderURL = Liferay.PortletURL.createRenderURL();
        renderURL.setPortletId(pid);
        renderURL.setPortletMode('view');
        renderURL.setWindowState('exclusive');
        renderURL.setParameter('mvcPath', '/partials/' + page + '.jsp');

        return renderURL.toString();
      },
      createResourceUrl : function(resourceId, paramName, paramValue) {
        var resourceURL = Liferay.PortletURL.createResourceURL();
        resourceURL.setPortletId(pid);
        resourceURL.setResourceId(resourceId);
        resourceURL.setParameter(paramName, paramValue);

        return resourceURL.toString();
      }
    }
  };

  this.setPid = function(pid) {
    this.pid = pid.substr(1, pid.length - 2);
  };
});