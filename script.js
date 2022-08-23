//grabbed the container class and stored it in the variable containerEl
const containerEl = document.querySelector('.container')


//windows event listener that tracks user's mouse movments
//will change the number within each div to accurding to the user mouse's X & Y position within the window.
window.addEventListener('mousemove', (event)=> {
    containerEl.innerHTML = `
    <div class="mouse-event">
            ${event.clientX}
            <h4>Mouse X Position(px)</h4>
        </div>
        <div class="mouse-event">
            ${event.clientY}
            <h4>Mouse Y Position(px)</h4>
        </div>
    `
})