<h1 align="center">Welcome to One Dionys - State Management! 👋 </h1>

<p align="center">An abstraction for managing and storing the state of applications, making it easier to manage the state of complex applications. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-state-management?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-state-management?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-state-management?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-state-management?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-state-management.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-state-management?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-state-management?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const StateManager = require('state-management');

// Create a new state manager instance with initial state
const stateManager = new StateManager({ count: 0 });

// Add a listener to react to state changes
const listener = (state) => {
    console.log('State changed:', state);
};
stateManager.addListener(listener);

// Update the state
stateManager.setState({ count: 1 }); // This will trigger the listener

// Remove the listener
stateManager.removeListener(listener);
```

#### Explanation

* The StateManager class allows you to manage the state of your application. It provides methods to get the current state, set a new state, add/remove listeners to react to state changes, and notify listeners when the state changes.

#### Return Value

* `getState()`: Returns the current state object.
* `setState(newState)`: Sets the new state by merging it with the existing state object.
* `addListener(listener)`: Adds a listener function to be called when the state changes.
* `removeListener(listener)`: Removes a listener function previously added with addListener().

## 📆 Release Date

* v1.0.0 : 07 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - State Management is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - State Management? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
