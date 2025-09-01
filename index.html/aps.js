const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
console.log(entry)
if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
}
});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(ell));

const button = document.querySelectorAll('button')

window.addEventListener('scroll', checkButton)

function checkButton() {
    const triggerBottom = window.innerHeight * 0.8;
    const buttonTop = button.getBoundingClientReact().top;

    if (button< triggerBottom) {
        button.classList.add('show');
        } else {
            button.classList.remove('show');
    }
}