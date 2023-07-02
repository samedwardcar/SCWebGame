# Web Game

Part 4 Bonuse:

If you have time, try enhancing your game with the following deliverables:

Currently, if you make the tree moveable with arrow keys, you will probably see an error in the console warning that "callback is not a function." We aren't passing a callback, because we don't need to respond to the tree changing directions. Use an if statement inside of move to only call callback if it is passed.
Currently, a player can make the character walk past the edges of the screen. Add some if conditions to the setInterval callback to prevent this.
Currently, the character can walk under things, even when it appears it should be in front of them. Read the z-index documentation. (You can set this with JavaScript by changing element.style.zIndex and using it to make the character appear to be above the other images, only disappearing behind one when the character walks north far enough to be behind the image.)