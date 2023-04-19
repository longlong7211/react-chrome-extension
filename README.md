# Gemma Chrome Extension

This project uses Pascal case for react file and component, with other files we use camel case --- please follow that ---

This project uses [Vite](https://vitejs.dev/) and [crxjs](https://crxjs.dev/vite-plugin) to build the extension.

## Setup

### Clone repository
```sh
git clone ssh://git@phabricator.zien.vn:2200/diffusion/133/gemma-web-extention.git
```

### Install dependencies

```sh
yarn
```

### Build extension

```
yarn build
```

### Load extension

1. Navigate to [chrome://extensions/](chrome://extensions/)
1. Turn on the "Developer mode" toggle switch in the top right of the window
1. Click the "Load unpacked" button in top left of the window
1. Go to the `gemma-extension` directory and select the `dist` directory to load the extension
1. Navigate to https://blank.org/ to see the Content Script React app to test
1. Go to extensions and click "React TypeScript Chrome Extension" to see the Popup React app

## [Popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup)

The popup source code is at the root directory.

## [Content Script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

The content script source code is in the `content-script` directory.

## Background

