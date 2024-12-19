let index = 0;
const images = document.querySelectorAll('.carrousel-item img');
function showImage(i) {
    images.forEach(img => img.style.display = 'none');
    images[i].style.display = 'block';
}
showImage(index);

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);

// Panier gestion dynamique
const panier = [];
const panierList = document.getElementById('panier-list');
const panierTotal = document.getElementById('panier-total');
const boutonsAjoutPanier = document.querySelectorAll('.ajouter-panier');

function updatePanier() {
    panierList.innerHTML = '';
    let total = 0;
    panier.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.nom + ' - ' + item.prix + '€';
        panierList.appendChild(li);
        total += item.prix;
    });
    panierTotal.textContent = total.toFixed(2);
}

boutonsAjoutPanier.forEach(button => {
    button.addEventListener('click', function () {
        const produit = this.closest('.carrousel-item');
        const nom = produit.querySelector('h3').textContent;
        const prix = parseFloat(produit.querySelector('p').textContent.replace('€', '').trim());
        panier.push({ nom, prix });
        updatePanier();
    });
});

// Formulaire de contact validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    if (!form.name.value || !form.email.value || !form.message.value) {
        valid = false;
        alert("Tous les champs doivent être remplis.");
    }
    if (valid) {
        alert("Merci pour votre message !");
        form.reset();
    }
});
