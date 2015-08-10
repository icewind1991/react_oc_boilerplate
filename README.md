# React Boilerplate

A basic boilerplate to demonstrate how to build ownCloud apps using React.

It uses webpack and React HotReload for an improved developer workflow. 

## Install instructions

 - clone the repo in the apps folder
 - `npm install`
 - `npm run build`

## Building an app

 - set the app id, name, description, etc in `appinfo/info.xml`
 - set the app id and name in `appinfo/app.php`
 - Set the owncloud web root and app id in `webpack/dev.config.js`
 - Update the namespace in `controller/pagecontroller.php` to match the app id
 - Rename the app folder to match the app id
 - Enable your new app in ownCloud
 - Run `npm run dev` to automatically compile the source files
 - Open `http://localhost:3000` in the browser to make use of hot-reloading
 
