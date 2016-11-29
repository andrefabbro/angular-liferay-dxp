package com.liferay.example.angular.portlet;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

@Component(
	immediate = true,
	property = {
		"javax.portlet.name=MyAngularPortlet",
		"javax.portlet.display-name=My Angular Portlet",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user",
		"com.liferay.portlet.icon=/img/icon.png",
		"com.liferay.portlet.css-class-wrapper=my-angular-portlet",
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.remoteable=true",
		"com.liferay.portlet.ajaxable=false",
		"com.liferay.portlet.instanceable=true",
		"com.liferay.portlet.footer-portlet-javascript=/js/main.js"
	},
	service = Portlet.class
)
public class MyAngularPortlet extends MVCPortlet {
	
}