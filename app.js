const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            //if entry is intersecting with the viewport
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
const right = document.querySelectorAll('.right');
const left = document.querySelectorAll('.left');

hiddenElements.forEach((el) => observer.observe(el));
right.forEach((el) => observer.observe(el));
left.forEach((el) => observer.observe(el));