let fixedNav = document.querySelector('.header')
window.addEventListener("scroll",()=>{
    window.scrollY > 100 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
})

// hadith
let hadithContainer = document.querySelector('.hadithContainer'),
    next = document.querySelector('.buttons .next'),
    prev = document.querySelector('.buttons .prev'),
    number = document.querySelector('.buttons .number');
    let hadithIndex = 0;
hadithChanger();
function hadithChanger()
{
    fetch("https://api.hadith.sutanlab.id/books/muslim?range=1-300")
    .then(response => response.json())
    .then(data =>{
        
        let Hadiths = data.data.hadiths;
        console.log(Hadiths[0]);
        hadithContainer.innerText = Hadiths[hadithIndex]
    })
}


// JavaScript to show the welcome section and hide it after 2 seconds
window.onload = function() {
    const welcomeSection = document.getElementById('welcome-section');
    welcomeSection.classList.add('show');
    setTimeout(function() {
        welcomeSection.classList.remove('show');
    }, 3500);
};






document.addEventListener('DOMContentLoaded', function () {
    const welcomeSection = document.getElementById('welcome-section');
    const userNameElement = document.getElementById('user-name');
    const userPicElement = document.getElementById('user-pic');
    const logoutBtn = document.getElementById('logout-btn');

    // تحقق إذا كان المستخدم مسجل دخوله بالفعل
    if (localStorage.getItem('isLoggedIn') === 'true') {
        displayUserInfo();
    } else {
        window.location.href = "login.html"; // إعادة التوجيه إلى صفحة تسجيل الدخول إذا لم يكن مسجل الدخول
    }

    // التعامل مع تسجيل الخروج
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('username');
        localStorage.removeItem('profilePic');
        localStorage.setItem('isLoggedIn', 'false');
        window.location.href = "login.html"; // إعادة التوجيه إلى صفحة تسجيل الدخول بعد تسجيل الخروج
    });

    // عرض معلومات المستخدم
    function displayUserInfo() {
        const username = localStorage.getItem('username');
        const profilePic = localStorage.getItem('profilePic');
        userNameElement.textContent = username;
        userPicElement.src = profilePic;
        welcomeSection.classList.add('active');
    }
});
