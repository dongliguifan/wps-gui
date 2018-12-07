# wps-gui

## Before installation
if your donnot have node.js enviriment
install node.js on your platform https://nodejs.org/en/download/
check node.js install in shell 
```
npm -v
```
#### bower
install bower in shell
```
npm install -g bower
```
check bower install in shell
```
bower -v
```
#### gulp
install bower in shell
```
npm install -g gulp
```
check bower install in shell
```
gulp -v
```

all above, install all globaly depends your need.

## Installation
in project root folder run shell  
##### build
    npm install
    bower install
    gulp

##### build WAR file(optional)

    ant clean war

## Run
The geoserver endpoint can be changed by editing the line `var options = url.parse('http://horizon.boundlessgeo.com/geoserver');` in `dev-server.js`.

copy whole folder to your geoserver/webapp

rename folder to wpsbuilder(optional)

open http://localhost:8080/wpsbuilder in brower 

edit ip if your geoserver is't "localhost"

"wpsbuilder" must same as you folder name

## Debug

To run wps-gui in a debug server, run `gulp develop`.

To use the non-minified source file, edit `index.html`, replacing `<script src="dist/wps-gui.min.js"></script>` with `<script src="dist/wps-gui.js"></script>`

## License

Copyright 2014 Boundless Spatial, Inc.

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
