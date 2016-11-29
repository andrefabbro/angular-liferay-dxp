<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>

<h2><liferay-ui:message key="detail.for.bookmark"/></h2>
<form role="form">
	<div class="form-group">
		<label for="name"><liferay-ui:message key="label.name"/></label>
		<input ng-model="model.currentBookmark.name" class="form-control" id="name">
	</div>
	<div class="form-group">
		<label for="description"><liferay-ui:message key="label.description"/></label>
		<input type="text" ng-model="model.currentBookmark.description" class="form-control" id="description">
	</div>
	<div class="form-group">
		<label for="url"><liferay-ui:message key="label.url"/></label>
		<input type="url" ng-model="model.currentBookmark.url" class="form-control" id="url">
	</div>
	<button type="submit" class="btn btn-default" ng-click="save();"><liferay-ui:message key="action.submit"/></button>
	<button type="submit" class="btn btn-default" ui-sref='list'><liferay-ui:message key="action.cancel"/></button>
</form>