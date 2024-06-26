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

// Contact - Nom Prenom

const fullname = document.getElementById('fullname');
const errorname = document.getElementById('errorname');

function validateName(){
    if (!fullname.value.match(/^[A-Za-z-\s]+$/)){
        errorname.innerHTML ="Veuillez saisir votre Nom et Prénom";
        return false
    }
    errorname.innerHTML = "";
    return true
}

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
    




