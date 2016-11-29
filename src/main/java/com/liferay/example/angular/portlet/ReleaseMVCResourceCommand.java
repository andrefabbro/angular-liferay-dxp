package com.liferay.example.angular.portlet;

import java.io.IOException;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.osgi.service.component.annotations.Component;

import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.model.Release;
import com.liferay.portal.kernel.portlet.JSONPortletResponseUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.service.ReleaseLocalServiceUtil;
import com.liferay.portal.kernel.util.ParamUtil;

@Component(
	immediate = true, 
	property = { 
		"javax.portlet.name=MyAngularPortlet",
		"mvc.command.name=/example/release"
	},
	service = MVCResourceCommand.class)
public class ReleaseMVCResourceCommand implements MVCResourceCommand {

	@Override
	public boolean serveResource(ResourceRequest resourceRequest, ResourceResponse resourceResponse)
			throws PortletException {

		try {

			long releaseId = ParamUtil.getLong(resourceRequest, "releaseId", 1L);

			Release release = ReleaseLocalServiceUtil.getRelease(releaseId);

			String json = JSONFactoryUtil.serialize(release);
			JSONObject jsonObj = JSONFactoryUtil.createJSONObject(json);

			JSONPortletResponseUtil.writeJSON(resourceRequest, resourceResponse, jsonObj.get("serializable"));

		} catch (IOException | PortalException e) {
			return true;
		}

		return false;
	}
}