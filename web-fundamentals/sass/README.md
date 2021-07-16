# SASS Workshop

**Table Of Contents**
-  [Purpose](#purpose)
-  [Getting Started](#getting-started)
-  [Resources](#resources)
-  [Further Learning](#further-learning)

## Purpose
This repository contains example files and resources regarding SASS and its concepts. Its purpose is to merely introduce SASS to developers so that they can further explore its usefulness and benefits in the future. Participants should gain a basic understanding of SASS. Go over the existing files and discuss the idea of the compiling to CSS and nesting in SASS.

## Getting Started
### Requirements
- Code Editor such as VSCode or Atom
-  [Node JS](https://nodejs.org/en/download/) - Node JS is required to run JavaScript files
- Browser such as Chrome, Firefox or Safari

### Compiling and Running Files
Since SASS needs to be compiled to CSS for the browser to understand it we use a node package called "sass" to do this for us.
After changes are made to you SASS file run the command
```sh 
npm run compile
```
This will compile the required CSS in the /css folder which is then imported in the head of the HTML markdown

To run the files:

1. Use Live Server extension on VSCode
    - Install the VSCode extension Live Server by Ritwick Dey
    - Open an HTML file and click "Go Live" on the buttom right of VSCode
    - Should automatically open the file in your browser and will update when code changes are made
2. Use the browser
    - Enter the path to your file in your browsers address bar 
        - ie. C:\Users\user\Documents\workshop\fundamentals\html\index.html
    - You will need to refresh the page for changes to be reflected

## Resources
Some resources regarding the topics that are discussed

- [BEM Naming Convention - Robin Rendle](https://css-tricks.com/bem-101/)
- [Introduction to SASS and SCSS - Yogesh Chavan](https://css-tricks.com/bem-101/)


## Further Learning
Below are recommended resources that are procured by others that can help expand your knowledge on SASS

### [SASS Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA) - YouTube Playlist
**Author: Net Ninja**  
A playlist on YouTube going more in depth about the concepts and features of SASS