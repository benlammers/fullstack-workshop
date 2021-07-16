# CSS Workshop

**Table Of Contents**
-  [Acknowledgements](#acknowledgements)
-  [Purpose](#purpose)
-  [Getting Started](#getting-started)
-  [Sections](#sections)
-  [Further Learning](#further-learning)

## Acknowledgements
Content of this repository is based off of content from

- [Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)

## Purpose
This repository contains example files and resources regarding CSS and its concepts. This is not meant as a standalone repository for a developer to learn from alone but to be a supplement to a workshop led by someone instructing those involved in these CSS concepts.

## Getting Started
### Requirements
- Basic understanding of HTML
- Code Editor such as VSCode or Atom
- Browser such as Chrome, Firefox or Safari

### Running the files
1. Use Live Server extension on VSCode
    - Install the VSCode extension Live Server by Ritwick Dey
    - Open an HTML file and click "Go Live" on the buttom right of VSCode
    - Should automatically open the file in your browser and will update when code changes are made
2. Use the browser
    - Enter the path to your file in your browsers address bar 
        - ie. C:\Users\user\Documents\workshop\fundamentals\css\00-initial\index.html
    - You will need to refresh the page for changes to be reflected

## Sections
Brief description of the goal of each section, important topics in the section and some extra resources available on those topics


### 00 Initial
**Goal:** Participants should gain a basic understanding of CSS. Discuss the idea of the cascade, selectors, specificity, and box model in CSS.

**Important Points**
- While HTML structures your content CSS is responsive for styling
    - Colors, backgrounds, shadows, layouts
- CSS can affect multiple pages at once
- Styles in CSS cascade down
    - Be wary of global styles
- Selectors have a hierachy of specificity
- Box model calculates width and height of element based on its content, margins, padding and borders

**Resources**
- [Cascade and Inheritance - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Specifics on CSS Specificity - Chris Coyier](https://css-tricks.com/specifics-on-css-specificity/)
- [CSS Selectors - w3schools](https://www.w3schools.com/css/css_selectors.asp)
- [Box Sizing - Sara Cope](https://css-tricks.com/almanac/properties/b/box-sizing/)


### 01 Pseudo Classes and Elements
**Goal:** Participants should gain a basic understanding of CSS pseudo classes and elements. Making them aware of some of the available options so that they may better recognize use-cases for them.

**Important Points**
- User Action Pseudo-Classes
    - hover, active, focus
- Tree-structural Pseudo-Classes
    - nth-child, first-child, last-child
- Conditional Pseudo-Classes
    - not
- Pseudo-Elements
    - after, before

**Resources**
- [Pseudo-Classes - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Pseudo-Elements - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)


### 02- Flexbox
**Goal:** Participants should gain knowledge on how to use flexbox and some of the available flexbox properties. They should understand in which scenarios flexbox should be used.

**Important Points**
- Allows you to align elements in one direction
    - Horizontal or vertical
- Can be very helpful in simple scenarios where elements need to be centered
- Easily allows items to wrap when the parent container size changes

**Resources**
- [A Guide to Flexbox - Chris Coyier](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Layout - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)


### 03 Grids
**Goal:** Participants should gain knowledge on how to use grids and some of the available grid properties. They should understand in which scenarios grids should be used.

**Important Points**
- Grids are your best friend when doing layouts
- Easily allows you to center items and get items to fill available space
- Allows you to explicitly move an item into a specific grid cell
- Row and column sizes can behave responsively

**Resources**
- [A Complete Guide to Grids - Chris House](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid By Example - Rachel Andrew](https://gridbyexample.com/)
- [CSS Grid Tutorial - Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY)


### 04 Media Breakpoints
**Goal:** Participants should gain knowledge on how to use breakpoints to create fluid and responsive pages. They should be able to identify and set breakpoints.

**Important Points**
- Breakpoints wrap CSS properties that will only be applied if the media query condition is met
- You can use specifically set breakpoints for mobile, tablet and desktop or set them based on your specific design and at what screen size it fails

**Resources**
- [How to use CSS Breakpoints - Ananda Projapati](https://getflywheel.com/layout/css-breakpoints-responsive-design-how-to/)
- [Media Queries for Standard Devices - Chris Coyier](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)


## Further Learning
Below are recommended resources that are procured by others that can help expand your knowledge on CSS

### Important Topics not Covered
**CSS Custom Properties**  
Custom properties are very powerful and can be used for consistent theming, easier development workful and dynamic styling.

- [Using CSS Custom Properties- MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Guide with Examples - Daniel - JS Craft](https://codeburst.io/css-variables-explained-with-5-examples-84adaffaa5bd )

**CSS Animations**  
Animations can make your site stand out from the rest. Just be sure to not go too overboard.

- [Using CSS Animations - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  

### [HTML & CSS Crash Course](https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G) - YouTube Playlist
**Author: Net Ninja**  
A playlist on YouTube going over basic concepts of HTML & CSS

### [Tailwind CSS](https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw) - YouTube Playlist
**Author: Net Ninja**  
Tailwind CSS is a utility-first CSS framework that can be composed to build any design. Utility classes are short classes such as .flex, .pt-4 and .text-center which you put directly in your HTML markup. Tailwind CSS is a great tool to put in your toolbelt