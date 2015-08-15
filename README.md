# React Boilerplate

A basic boilerplate to demonstrate how to build ownCloud apps using React.

It uses webpack and React HotReload for an improved developer workflow. 

## Install instructions

 - clone the repo in the apps folder
 - `npm install`
 - `npm run build`

## Building an app

 - `npm install`
 - set the app id and name using `npm run configure`
 - set the app author, description, etc in `appinfo/info.xml`
 - Set the owncloud web root  in `webpack/dev.config.js`
 - Rename the app folder to match the app id
 - Enable your new app in ownCloud
 - Run `npm run dev` to automatically compile the source files
 - Open `http://localhost:3000` in the browser to make use of hot-reloading
 
