# Tic-Tac-Toe game

This is an amazing tic-tac-toe game where you can choose to play against a friend or against your computer 🤖. The computer uses the [minimax algorithm](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/?ref=lbp) to find the best move and way to play, so it's basically unbeatable 😎.

## Table of contents

-   [Overview](#overview)
-   [The challenge](#the-challenge)
-   [Screenshot](#screenshot)
-   [Links](#links)
-   [My process](#my-process)
-   [Built with](#built-with)
-   [What I learned](#what-i-learned)
-   [Continued development](#continued-development)
-   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   Choose who they want to play against.
-   See who won after the game is over.
-   Restart the previous match after the game is over.
-   Reset the game configuration.

### Screenshot

![screenshot](https://i.postimg.cc/Qtkd79c5/funny-tic-tac-toe-netlify-app.png)

### Links

-   [Solution URL](https://github.com/josesaulguerrero/tic-tac-toe)
-   [Live site URL ](https://funny-tic-tac-toe.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   Flexbox
-   Mobile-first workflow
-   [Yarn](https://yarnpkg.com/) - Node package manager
-   [Webpack](https://webpack.js.org/) - Module bundler
-   [Babel](https://babeljs.io/) - JS code transpiler
-   [React](https://reactjs.org/) - JS library
-   [Sass](https://sass-lang.com/) - For styles
-   [Workbox](https://developers.google.com/web/tools/workbox/guides/get-started) - For managing the cache and service workers
-   [react-app-rewired](https://github.com/timarney/react-app-rewired) and [customize-cra](https://github.com/arackaf/customize-cra) - These libraries modify the behavior of create-react-app and allow you to customize the webpack files. It must be used carefully because things can easily break.

### What I learned

Building this project helped me learn to use and improve my knowledge and programming logic by:

-   Using the minimax algorithm to make your machine unbeatable.
-   Using `React.Context` to provide all the necessary functions.
-   Using pre-processors such as Sass.
-   Managing my service workers with Workbox.

### Continued development

-   To make the computer "smarter" I use the minimax algorithm, which basically makes it unbeatable.

-   My stylesheets use Sass, a pre-processor that allows you to write cleaner CSS code and re-use your own style rules, so that you don't repeat yourself.

-   I used CSS pseudo-elements and pseudo-classes to create interesting animations when an unmarked cell is hovered.

-   To manage my service workers, I used Workbox, a set of libraries that google provides to help you covert your apps into PWAs that can be installed like a native app and work even when offline.

-   Implemented the `@media (hover: hover) {}` CSS media query, which is used to detect if the user's device has a cursor, to add hover transitions.

### Useful resources

-   [How to integrate Workbox in your React App](https://www.youtube.com/watch?v=uKNLaleXztc&list=PLD8nQCAhR3tTXYOhau-RTfZQ4uGvco7XQ&ab_channel=ImranSayed-CodeytekAcademy) - These videos were really helpful as they helped me integrate all the workbox libraries into my existing application.

-   [What is the minimax algorithm?](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/?ref=lbp) - This article taught me what is the minimax algorithm and how it works.

-   [Creating a tic-tac-toe game with the minimax algorithm](https://www.youtube.com/watch?v=trKjYdBASyQ&t=1134s) - This video helped me find out how I could create the minimax using JavaScript.

-   [How to create your own Minimax Algorithm](https://www.freecodecamp.org/news/minimax-algorithm-guide-how-to-create-an-unbeatable-ai/) - This article helped me create my own minimax algorithm and I used this version in my tic-tac-toe game.

## Author

-   Website - [Jose Saúl Guerrero Serrano](https://joseguerreroserrano.netlify.app/)
-   Github - [@josesaulguerrero](https://github.com/josesaulguerrero)
