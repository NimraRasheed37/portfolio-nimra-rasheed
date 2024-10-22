const navBar = document.getElementById('nav-bar');
const sideBar = document.getElementById('side-bar');
const sideBarLinks = document.querySelectorAll("#side-bar .side-bar-links a");


//open sidebar when clicked on navBar 
navBar.addEventListener('click', () => {
    sideBar.classList.toggle("active");
});

//close sidebar when any link is clicked
sideBarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.classList.remove("active");
    });
});


//https://drive.google.com/file/d/1G9kfrSB1luFw-lChcjOWMvdDs72uGta7/view?usp=drive_link
//download cv button functionality

document.getElementById('cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1G9kfrSB1luFw-lChcjOWMvdDs72uGta7/view?usp=drive_link';
    window.open(link, '_blank');
} );

const msgSent = document.getElementById('msg-sent');
const msgBtn = document.getElementById('msg-btn');
//show msgSent when msgBtn is clicked
msgBtn.addEventListener('click', (event) => {
    event.preventDefault(); //prevent page reloading
    msgSent.classList.toggle("active");
});

//Function to send Email when email link in clicked in footer
function sendEmail() {
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=nimrarasheed.na@gmail.com&su=Hello&body=Write%20your%20message%20here";
            window.open(gmailLink, '_blank');}
