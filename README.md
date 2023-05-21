<div align="center">
  <img width="300" height="300" src="https://github.com/shaimaaK/Pro-task/blob/main/public/pro-task.png">
 </div>
 
# Pro-task
 A react application built as part of the Human Computer Interaction (HCI) course of my master's degree. Pro-task is a time management React application with AI voice control features using [TensorFlow.js](https://www.tensorflow.org/js).
 

## Demo
A live version of the WebApp is deployed on Netlify  :  https://pro-task-sk.netlify.app
![image](https://github.com/shaimaaK/Pro-task/blob/main/images/pro-task%20app%20banner.png)


## Table of contents
* [Features](#features)
* [Technologies](#technologies)
* [A Guide to Installation and Use](#a-guide-to-installation-and-use)
* [Known Bugs Fixes](#a-guide-to-installation-and-use)

## Features
1. **AI command control** <br>
The application provides voice commands to control the stack of tasks by that is activated with the speak button(:point_right: ![#c5f015](https://via.placeholder.com/15/c5f015/c5f015.png)
) and listens for the word **DO** followed by the command keyword:<br>
:x: **Zero** :x: : Delete the top task of the stack <br>
✅ **One** ✅: change the status of the top task of the stack to complete/uncomplete <br>
:round_pushpin: NOTE : the Voice recognition machine stops listening after `10 seconds` of silence

2. **Responsive** <br>
The Web App has a responsive design and adapts to all devices screen sizes, tested for variety of screen sizes. It independent of the device operating system and screen size. Refer to [images folder](https://github.com/shaimaaK/Pro-task/tree/main/images) to view the application on different devices.
 
3. **Filter** <br>
Filter the stack of the tasks based on the status of each task:
Status :  
  - [ ] Uncomplete 
  - [X] Complete
5. **Support All Languages** <br>
The tasks can be written in any language.
7. **Accessability Features** <br>
The design is implemented  in minimilist and modern theme with all types of users in mind (age, experience, cognitive skills, disabilities). All items have a descriptive alternative text and tested using the [screen reader extension of chrome browser](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn)
9. **Easy to login**
For easy access of the application and seemless experience, you can directly access your tasks and make changes that are associated to each user without the need for login.
## Technologies
The REACT Application is created using the npx command `npx create-react-app app-name`. According to the[official react documentation](https://legacy.reactjs.org/docs/create-a-new-react-app.html#:~:text=Create%20React%20App,-Create%20React%20App&text=npx%20on%20the%20first%20line,with%20any%20backend%20you%20want), it sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:
```
npx create-react-app my-app
cd my-app
npm start

```
### libraries
| library name       	| Version        	| Description                                                                                                                                                                                                       	|
|--------------------	|----------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| [npm](https://www.npmjs.com/)                	| 9.5.1          	| The world's largest software registry, <br>used here to download and run package                                                                                                                                  	|
| node.js            	| 18.16.0        	| Enables the creation of scalable <br>and quick backend RESTful APIs                                                                                                                                               	|
| javascript         	| V8 11.3.244.11 	| The language used to create the webapp                                                                                                                                                                            	|
| React              	| 18.2.0         	| JavaScript library for creating user-<br>interface                                                                                                                                                                	|
| React DOM          	| 18.2.0         	| This package serves as the entry point <br>to the DOM and server renderers for React.<br> It is intended to be paired with the <br>generic React package                                                          	|
| React Scripts      	| 5.0.1          	| This package includes scripts and configuration<br>used by Create React App.                                                                                                                                      	|
| react-hooks        	| 1.0.1          	| REACT components to fire off actions <br>in stateless components.                                                                                                                                                 	|
| util               	| 0.12.5         	| This implements the Node.js util module for <br>environments that do not have it, like browsers                                                                                                                   	|
| tfjs               	| 4.5.0          	| TFJS is a library that wraps and it easier to <br>interact with the compiled version of TensorFlow.js                                                                                                             	|
| speech-commands    	| 0.5.4          	| The Speech Command Recognizer is a JavaScript version <br>from tensorflow that enables recognition of spoken commands.<br>To develop ML models in JavaScript, and use ML directly<br>in the browser or in Node.js 	|
| mui/icons-material 	| 5.11.16        	| Provides the Google Material Icons <br>converted to SvgIcon components                                                                                                                                            	|
| mui/material       	| 5.13.0         	| Material UI is one of the popular React UI frameworks                                                                                                                                                             	|
### Development Tools
- IDE: Visual Studio Code
- Speech Recognition Model : Tensorflow.js model
- UI Framework : REACT X Material UI
- Design : adobe XD
- Screen Reader : [chrome extension](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn)
## A Guide to Installation and Use
(run and build)
## Known bugs and any bug fixes





