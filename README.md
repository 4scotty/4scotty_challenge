# R2D2 vs Terminator

## Presentation

Full front application that allows you to play rock / paper / scissors. </br>
NB: Server side code is only used to provide a development environment.

## Installing and start in development environment

1. Install node modules:

```
cd /path/to/directory
npm install
```
Development environment variables are defined in _./webpack/env/development.js_ .

2. Start the application in development environment:

```
npm run start:dev
```

3. The app is available on _localhost:3036_

## Tests

To run tests:

```
npm test
```

## Build and deployment

In production environment, static files are served by NGINX.</br>
NB: Production build files are chunked in order to avoid caching issues. A chunk is linked to a unique version.</br>


### Project building

Build static files using following commands:

```
npm run build
```

NB: Built files will be put into _./dist_ directory

### Deployment

_Shipit_ is a npm module that allows you to deploy project on remote server.   

1. Once static files building is done, commit changes (_./dist_ repository is committed) and push them on Git repository.
2. Check _Shipit_ configuration in _./shipitfile.js_  (remote host, user, directories paths, ...).
3. Then, to deploy project on remote server type following commands:

```
npm run deploy
```

NB : SSH configuration should be configured to access remote servers

### Rollback

Rollback allows you to deploy previous version :

```
npm run rollback
```

## Main NPM scripts

```
npm run start:dev                         // Start in development environment
npm test                                  // Run Jest tests
npm run build                             // Build minified static files for production
npm run build:clean                       // Clean built files

npm run sass                              // Generate CSS files from SASS files
npm run linter                            // Process prettier and eslint for all JS files
npm run test                              // Start tests
```

## Project tree

```
|-- dev_server                             > Developement server
|-- src                                    > Source files
|-- dist                                   > Public files
|   |-- [ENV_NAME]                         > Environment
|-- scripts                                > Node scripts (build sass / chunk)
|-- webpack                                > Webpack configuration
|   |-- conf.dev.js                        > Development configuration
|   |-- conf.build.js                      > Build configuration
|   |-- entries.js                         > Set of JS entries
|   |-- shared.js                          > Shared configuration
```

## Versions
* 0.0.1 : First version.
