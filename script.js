const openWindowButtons = document.querySelectorAll('[data-window-target]');
const closeWindowButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


openWindowButtons.forEach(button => {
    button.addEventListener('click', () => {
        //This uses dataset attribute
        // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
        //For each button it chooses the window it has to open (which is defined in modalTarget dataset attribute)
        //and it calls openWindow function on that window
        const window = document.querySelector(button.dataset.windowTarget);
        openWindow(window);
    })
})

closeWindowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const window = button.closest(".window")
        closeWindow(window);
    })
})

overlay.addEventListener("click", () => {
    const windows = document.querySelectorAll(".window.active")
    windows.forEach(window => {
        closeWindow(window);
    })
})

function openWindow(window) {
    if (window == null) return;
    window.classList.add("active");
    overlay.classList.add("active");
}

function closeWindow(window) {
    if (window == null) return;
    window.classList.remove("active");
    overlay.classList.remove("active");
}