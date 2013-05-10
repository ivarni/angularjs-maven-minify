angularjs-maven-minify
======================

Example of minifying an Angular.js project using a maven profile.

This app needs data from a REST call before rendering so it waits for the GET request to complete before doing anything.

* mvn clean install -Pminify
* deploy the war (tested on tomcat)