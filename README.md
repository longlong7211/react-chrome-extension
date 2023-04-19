# Welcome to chrome extension with reactjs
### This is a codebase for chrome extension using reactjs

#### `This project using reactjs typescript. We using Pascal case for react file and component, with orther file we use camelCase`
#### `-- Please follow that --`


### MENU
- 1. Setup and install
- 2. Code organization
- 3. Dev and build
- 4. Zip and upload to store
- 5. Environment template

## 1. Setup and install

### Setup
- Install nvm or node and npm (suggest install global yarn)
- The editor you can use vscode or orther editor.

### Clone repository
```sh
git clone git@github.com:longlong7211/react-chrome-extension.git
```

### Install dependencies
```sh
yarn
or
npm install
```
## 2. Code organization
![source tree](https://raw.githubusercontent.com/longlong7211/react-chrome-extension/main/doc/img/tree.png)
| Folder | Description |
| ------ | ----------- |
| background | - This folder contains the background services of the chrome extension. This folder is not present in reactjs project so it is written in basic javascript then used directly in manifest. You can customize and divide more folders in here for easy management |
| content&#x2011;script | - This folder contains code in content scripts of chrome extension, it is configured to use reactjs, inside this folder you can use reactjs code but sometimes it won't work for extension. <br/> - you should use a custom Iframe component from the default iframe tag to avoid overwriting the current site's css on the content-sctipts  |
| index.html | - The index.html file in the root directory is the default file for pop in chrome extension. you don't need to worry too much about it because we can't see anything from this file. you can rename the site name in this file but it's really not necessary  |
| manifest.json | - This is the main chrome extension configuration folder you can read more about how to configure it [here](https://developer.chrome.com/docs/extensions/mv3/intro/). The version used here is manifest v3 |
| package.json | - here is the configuration file of node you can see the script run and build the app |
| popup | - This code is the part that is displayed when you click on the extension's icon in chrome. it is configured for reactjs so you can split the folder structure normally. this section is not restricted by the current site so you can write and use the library freely without any css constraints. |
| public | - This folder contains public files such as icon images for the whole project, in addition you can create static pages here like welcome.html, privacy policy, term... it will run like a normal html page when it is call |
| services | - This folder contains the code to communicate between the server and the extension, here I have customized the axios library that is usually used to call the API. Please pay attention when using there are some things that don't work when used in extension or will work wrong if used incorrectly like cookies |
| tsconfig.json | - This file to save the configuration of typescript, you just need to follow what was defined earlier. you cannot use re-map paths in this extension |
| tsconfig.node.json | - Extension file of tsconfig. it's configurable for vite and chrome extension. |
| types | - Directory defines data types of objects, types of variables and enums. |
| utils | - This directory contains data processing functions or functions whose logic is little changed |
| vite.config.ts | - Vite config file for chrome extension, in this file you can reconfigure vite. it's best not to change it. |

## 3. Dev and build
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Run dev build
- Run command (you can custom that command).
```yarn dev``` for run with dev environment.
```yarn staging``` for run staging environment.
```yarn prod``` for run production environment.
- Navigate to [chrome://extensions/](chrome://extensions/).
- Turn on the "Developer mode" toggle switch in the top right of the window.
- Click the "Load unpacked" button in top left of the window.
- Go to the `chrome-extension-react-code-base` directory and select the `extension-build` directory to load the extension.
- Navigate to https://blank.org/ to see the Content Script React app to test.
- Go to chrome and click icon of extension to see the Popup React app
\- You can follow:
Popup document [here](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup)
Content scripts [here](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
Service worker (background) [here](https://developer.chrome.com/docs/extensions/migrating/to-service-workers)

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Build extension (different dev build)
- you need add env for build. Please follow `.env.template`. you need create `.env.staging` for staging environment and `.env.prod` for production environment.
- Run ```yarn build-staging``` to build staging.
- Run ```yarn build-prod``` to build production.

## 4. Zip and upload to chrome web store
- Run `yarn zip-staging` or `yarn zip-prod` for each environment.
- Go to devconsole chrome web store [here](https://chrome.google.com/u/2/webstore/devconsole)
- Following [this site](https://developer.chrome.com/docs/webstore/publish/) to upload extension to web store.

## 5. Environment template
```
VITE_APP_ENVIROMENT=         //optional
VITE_APP_VERSION=            //optional
VITE_APP_API=                //require if you use axios
```