// Barre de Navigation - click

let menu = document.querySelectorAll('.nav-link');

menu.forEach((a) => {
    a.addEventListener('click', () => {
        menu.forEach(a => { a.classList.remove('active') });
        a.classList.add('active');
    });
});

// Barre de navigation - SCROLL
const sectionAll =document.querySelectorAll('article[id]');
window.addEventListener('scroll',()=>{
    const scrollY =window.scrollY;
    sectionAll.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');
        console.log(sectionId);

        if(scrollY>sectionTop && scrollY< sectionTop+sectionHeight){
            document.querySelector('.nav-link[href*="'+sectionId+'"]').classList.add('active');
        }else{
            document.querySelector('.nav-link[href*="' + sectionId + '"]').classList.remove('active');
        };

    });
});

//Menu Burger

const menuHamburger = document.querySelector(".Burger-menu")
const navLinks = document.querySelector(".nav-menu-ul")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('Menu-telephone')
})



//Mes compétences - Tabs

const tabs = document.querySelectorAll('.tabs-btn');
const contents = document.querySelectorAll('.Mes-compétences-skills');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        contents.forEach(content=>{content.classList.remove('active')});
        contents[index].classList.add('active');
    });    
});


//Mes projets - Tabs

const btn = document.querySelectorAll('.btn');
const projets = document.querySelectorAll('.PROJET');

btn.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        btn.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');

        projets.forEach(projets => { projets.classList.remove('active') });
        projets[index].classList.add('active');
    });
});

// Contact - Nom prenom valide

//let fullname = document.getElementById('#fullname');
//const form = document.querySelector('.form_all');
//let email = document.querySelector('#email');
//
//form.addEventListener('submit', (e) => {
//    e.preventDefault();
//
//    validateInputs();
//});
//const SetError = (element, message) => {
//    const inputctrl = element.parentElement;
//    const errorDisplay = inputctrl.querySelector('.error');
//
//    errorDisplay.innerText = message;
//    inputctrl.classList.add('error');
//    inputctrl.classList.remove('success');
//}
//const SetSuccess = element => {
//    const inputctrl = element.parentElement;
//    const errorDisplay = inputctrl.querySelector('.error');
//
//    errorDisplay.innerText = '';
//    inputctrl.classList.add('success');
//    inputctrl.classList.remove('error');
//}
//const isValidEmail = email => {
//    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//    return re.test(String(email).toLowerCase());
//}
//
//const validateInputs = () => {
//    const fullnameValue = fullname.value;
//
//
//    if (fullnameValue === '') {
//        SetError(fullname, 'Le nom et prénom sont requis');
//    } else {
//        SetSuccess(fullname);
//    }
//};
//// Contact - email valide
//const emailValue = email.Value;
//if (emailValue === '') {
//    SetError(email, 'Email requis');
//} else if (!isValidEmail(emailValue)) {
//    SetError(email, 'Indiquer une adresse mail valide');
//} else {
//    SetSuccess(email);
//}

// Contact - envoie de mail - valide

const email = document.getElementById('email');
const error = document.getElementById('error');

function validateEmail() {
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[\@][a-z]*[\.][a-z]{2,4}$/)) {
        error.innerHTML = "Entrer une adresse Email valide";
        return false
    }
    error.innerHTML = "";
    return true
}


//function generateMailto() {
    
//    let fullname = encodeURIComponent(document.getElementById('#fullname'));
//    let content = encodeURIComponent(document.getElementById('#message'));
//    let mail = encodeURIComponent(document.getElementById('#email'));
//    console.log(fullname);
    // Crée un élément a et définit l'attribut href pour le mailto
//    const a = document.createElement('a');
//    a.href = `mailto:marchand.roxanne@gmail.com?subject=${"Message reçu site:portfolio Roxanne Marchand"}&body=${"Bonjour je m'appelle " + fullname + ", je vous envoie un mail par le biais du formulaire sur votre site" + "/n/n" + "mail: "+mail+"/n/n"+content}`;
//    a.style.display = 'none'; // Cache l'élément pour qu'il ne soit pas visible sur la page

    // Ajoute l'élément au corps du document et simule un clic
//    document.body.appendChild(a);
//    a.click();

    // Supprime l'élément après le clic
//    document.body.removeChild(a);
//    alert("Votre message a été envoyé")
//    }


// Contact - envoie mail via formulaire de contact

    function sendMail(){
        
        const informations = {

            fullname : document.getElementById('fullname').value,
            email : document.getElementById('email').value,
            message : document.getElementById('message').value,
        }

        emailjs.send("service_tui8nv6", "template_5i77wwl", informations).then(alert("Votre message a été envoyé"));
    }
    




