### Protractor-Cucumber-TypeScript Setup Guide   

### To Get Started

#### Pre-requisites
1.NodeJS installed globally on the system.
https://nodejs.org/en/download/

2.Java installed on the system.
https://www.oracle.com/uk/java/technologies/javase/javase-jdk8-downloads.html

3.Chrome browser installed on the system.

4.Text Editor(Optional) installed-->Visual Studio Code/Sublime/Brackets.

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run the following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* First step is to start the selenium server using webdriver. For that the below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```

* If you need a specific chrome driver version to match your browser version run below command replacing version number.
```
node node_modules/protractor/bin/webdriver-manager update --versions.chrome Version <version number>
```



