# R2D2 vs Terminator

## Presentation

Full front application that allows you to play rock / paper / scissors.
NB : The Koa server is only used in development environment.

## Installing and start in development environment

1. Install node modules:

```
cd /path/to/directory
npm install
```
Development environment variables are defined in _./webpack/env.development.js_ .

2. Start the application in development environment:

```
npm run start:dev
```

3. Open a browser and go on _localhost:3036_


## Build and deployment

In production environment, static files are served by NGINX.
The NGINX configuration is available in _./nginx/configuration_.

NB: Server side code is only used to provide a development environment.

### Project building

Build static files using following commands:

```
npm run build
```

_[ENV]_     = _'production'_ or _'staging'_
_[LOCALE]_  = _'en'_ or _'fr'_

NB: Built files will be put into _./dist_ directory


### Deployment

_Shipit_ is a npm module that allows you to deploy project on remote server.   

1. Once static files building is done, commit changes (_./dist_ repository is committed) and push them on Git repository.
2. Check _Shipit_ configuration in _./shipitfile.js_  (remote host, user, directories paths, ...).
3. Then, to deploy project on remote server type following commands:

Staging:
```
npm run deploy:staging
```

Production:
```
npm run deploy:prod
```

NB : SSH configuration should be configured to access remote servers (for instance proxy-staging-si-01-ber.iaas.in.wifirst.fr/10.4.3.148 for staging deployment)

### Rollback

Rollback allow you to deploy previous version.

Staging:
```
npm run rollback:staging
```

Production:
```
npm run rollback:prod
```



## Main NPM scripts

```
npm run start                             // Start in development environment
ENV=[ENV] LANG=[LANG] npm run build       // Build minified static files for production with i18next translation keys
npm run build:clean                       // Clean built files

npm run sass                              // Generate CSS files from SASS files
npm run linter                            // Process prettier and eslint for all JS files
npm run test                              // Start tests
npm run doc                               // Generate GROC documentation from source code comments
```


## Environment details

### SSO/JWT authentication

Frontend SSO/JWT authentication module is included in project. More information:
https://git.wifirst.net/npm/wifirst-authentication

### i18next

i18next is used to take into account locales https://www.i18next.com/#. Current
locales are initialized in _assets/app.js_

### Webpack

Webpack is used to:

* to transpile JS ES5 into JS ES6
* to build and minify JS files in production environment


## Project tree

```
|-- app                                    > Developement server main directory
|-- assets                                 > Client main directory
|   |-- js                                 > JS files
|   |   |-- common                         > Application common components (used at least in two different modules)
|   |   |-- routes                         > Routes / modules main directory
|   |   |   |-- [module_name]              > Module main directory (NB: one rendering route <=> one module <=> one JS controller)
|   |   |   |   |-- components             > React components
|   |   |   |   |-- index.js               > Module entry point
.   .   .   .   .
|   |   |   |-- services                   > Shared client services (API caller...)
|   |   |   |-- tests                      > Frontend tests
|   |   |-- app                            > Client entry point
|   |-- stylesheets                        > scss/css files
|-- config
|   |-- locales                            > Locales keys (.yml and .json files)
|-- doc                                    > Auto-generated Groc documentation
|-- dist                                   > Public files (for deployment only)
|   |-- [ENV_NAME]                             > Environment
|   |   |-- static                             > Chunked files main directory
|   |   |   |-- css                            > Css files (generated with SASS)
|   |   |   |-- img                            > Images
|   |   |   |-- js                             > Minified webpack-generated JS files (ES5)
|-- scripts                                > Node scripts
|-- test                                   > Integration and unit tests
|-- webpack                                > Webpack configuration
|   |-- conf.dev.js                        > Development configuration
|   |-- conf.prod.js                       > Production configuration
|   |-- entry.js                           > Set of webpack entries
|   |-- shared.js                          > Shared configuration
```

## Versions
* 0.2.0 : Add Laura. Add actions in columbo dashboard. Add unbundling process.
* 0.1.15 : Add order date in requests dashboard.
* 0.1.14 : Eligibility result.
* 0.1.11 : Fix erdv code.
* 0.1.8 : Proper redirection and error handling.
* 0.1.7 : Fix sequence number.
* 0.1.5 : Display offer code, fix creation date.
* 0.1.4 : Fix book erdv.
* 0.1.3 : Shipit production configuration done.
* 0.1.2 : Deployment from git repository.
* 0.1.1 : Deployment scripts fixed.
* 0.1.0 : Build/deploy/rollback scripts in staging/production.
* 0.0.1 : First beta version.
