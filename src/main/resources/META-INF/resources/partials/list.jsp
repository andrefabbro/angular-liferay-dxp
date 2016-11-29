<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>

<h2><liferay-ui:message key="bookmarks"/></h2>
<div>
	<table class="table table-striped table-hover table-responsive">
		<thead>
			<tr>
				<th><liferay-ui:message key="table.id"/></th>
				<th><liferay-ui:message key="table.name"/></th>
				<th><liferay-ui:message key="table.actions"/></th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="bookmark in model.bookmarks">
				<td>{{bookmark.entryId}}</td>
				<td>{{bookmark.name}}</td>
				<td>
					<a href="{{bookmark.url}}" target="_blank"><i class="fa fa-external-link-square"></i></a> | 
					<a ui-sref='detail({bookmark: bookmark})'><i class="fa fa-info-circle"></i></a> | 
					<a ng-click="remove(bookmark);"><i class="fa fa-trash-o"></i></a>
				</td>
			</tr>
		</tbody>
	</table>
	
	<a ui-sref='add' class="btn btn-default">
		<liferay-ui:message key="action.add"/>
	</a>
	<br/>
	<br/>
	<liferay/>
</div>