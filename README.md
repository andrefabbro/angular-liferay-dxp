# Instructions

First, you have to setup a Liferay Theme project which should include the angular, angular-ui-router and angular-auto-validate.

For instance:
```
yo liferay-theme
cd %your-theme-project-path%
npm install angular angular-ui-router angular-auto-validate --save
```

Then, you must include this JS files into your Theme, like:

```html
...
<head>
  <title>${the_title} - ${company_name}</title>

  <meta content="initial-scale=1.0, width=device-width" name="viewport" />

  <base href="/">
  
  <script src="${javascript_folder}/angular.min.js"></script>
  <script src="${javascript_folder}/angular-ui-router.min.js"></script>
  <script src="${javascript_folder}/jcs-auto-validate.min.js"></script>
  
  <@liferay_util["include"] page=top_head_include />
</head>
...
```

> Make sure to put the ```<base href="/">``` and the scripts before ```top_head_include```, as above.

Start a Liferay DXP instance, deploy your Theme with this JS files, open this project and deploy using gulp:

```
gulp deploy
```

> In order to run the above command, you must have [blade](https://github.com/liferay/liferay-blade-cli) installed properly
