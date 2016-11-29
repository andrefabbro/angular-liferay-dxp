<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui"%>
<h2><liferay-ui:message key="add.new.bookmark" /></h2>
<form role="form" name="bookmarkForm" ng-submit="store();" novalidate="novalidate">
	<div class="form-group">
		<label for="name">
			<liferay-ui:message key="label.name" />
		</label>
		<input type="text" ng-model="model.currentBookmark.name"
			class="form-control" id="name" name="name" ng-minlength="3"
			ng-maxlength="25" required>
	</div>
	<div class="form-group">
		<label for="description">
			<liferay-ui:message key="label.description" />
		</label>
		<input type="text"
			ng-model="model.currentBookmark.description" class="form-control"
			id="description" name="description" ng-minlength="3" required>
	</div>
	<div class="form-group">
		<label for="url">
			<liferay-ui:message key="label.url" />
		</label>
		<input type="url" ng-model="model.currentBookmark.url" class="form-control"
			id="url" name="url" required>
	</div>
	<button type="submit" class="btn btn-default" ng-disabled="bookmarkForm.$invalid">
		<liferay-ui:message key="action.submit" />
	</button>
	<button type="submit" class="btn btn-default" ui-sref='list'>
		<liferay-ui:message key="action.cancel" />
	</button>
</form>