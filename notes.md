# Following the tutorial for tic-tac-toe on react.dev

# Set-Up
Use "npm install" every time you install something or make a project
```
npm install
```

"npm start" is an alias for a longer command that is defined in package.json
```
npm start
```

## JSX element
<p>JSX (JavaScript XML) is a syntax extension
 to JavaScript
 that lets you write HTML-like markup
 inside a JavaScript file.</p>


## React Stuff
<ul>

### <li>Fragments</li>
<ul><li><p> <> and </> are called fragments used to wrap multiple adjacent elements</p></li></ul>

### <li>Components</li>

 <ul>
 <li><p>To “remember” things, components use state.</p></li>

 <li><p>Conceptually, <em><strong>components</strong></em> are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</p></li>

 <li><p>Another way to think about it, components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p></li>
 </ul>
 </ul>

 ## Immutability
 <p>Immutability makes complex features much easier to implement. Later in this tutorial, you will implement a “time travel” feature that lets you review the game’s history and “jump back” to past moves. This functionality isn’t specific to games—an ability to undo and redo certain actions is a common requirement for apps. Avoiding direct data mutation lets you keep previous versions of the data intact, and reuse them later.</p>

 # Notes to Self
 Completed tutorial but can come back and do more.
- [ ] Make game handle the 'tie' scenario
- [ ] Breakdown how function calculateWinner works
- [ ] Make the game look nicer