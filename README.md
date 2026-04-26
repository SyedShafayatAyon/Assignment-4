getElementById Selects one element by ID
getElementsByClassName Selects multiple elements by class
querySelector Selects the first match
querySelectorAll Selects all matches
Create element → createElement()
Add content → innerText / innerHTML
Insert into DOM → appendChild()
When an event happens on a child element, it moves upward to its parent elements.
Instead of adding event listener to many child elements, you add one listener to the parent and detect which child was clicked.
preventDefault()
Stops the browser’s default behavior.
stopPropagation()
Stops the event from bubbling up to parent elements.

