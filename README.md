# PWATextEditor
![image](https://github.com/wrn007/PWATextEditor/assets/150059621/57362eb8-6757-467f-95bd-4ed12e2a3342)
This is a text editor web application with IndexedDB storage and offline capability.
To run the application go to https://pwatexteditor-96vn.onrender.com/

## Features
- JavaScript files are bundled using webpack.
- Webpack plugins generate HTML, service worker, and manifest files.
- Next-gen JavaScript is used in the application.
- IndexedDB immediately creates a database storage upon opening the text editor.
- Content entered in the text editor is saved to IndexedDB when clicking off the DOM window.
- Content in the text editor is retrieved from IndexedDB when reopening the text editor.
- The Install button allows downloading the web application as an icon on the desktop.
- A service worker is registered using workbox, providing offline capability.
- Static assets are pre-cached upon loading, along with subsequent pages and static assets.
