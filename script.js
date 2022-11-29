
document.querySelectorAll('.section-questions-accordion__question').forEach((item) =>
    item.addEventListener('click', () => {

        item.parentNode.classList.toggle('.section-questions-accordion--active')
    })
)