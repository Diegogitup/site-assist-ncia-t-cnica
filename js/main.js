const btnBurg = document.querySelector(".btn-burg");
const navList = document.querySelector(".nav-list");
const link = document.querySelectorAll(".nav-list a");



btnBurg.addEventListener("click", (e) => {
    navList.classList.toggle('active');
})

link.forEach(link => {
    link.addEventListener("click", () => {
        
        navList.classList.remove('active');
    })
})


document.addEventListener('click', (e) => {
if (!navList.contains(e.target) && !btnBurg.contains(e.target)) {
    navList.classList.remove('active')
}
});