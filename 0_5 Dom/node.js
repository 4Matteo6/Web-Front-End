const list = document.getElementById('item-list');
const btn = document.getElementById('add-item-btn');

// 2. Creiamo le due diverse collezioni PRIMA del click
const staticNodeList = document.querySelectorAll('.list-item');
const liveHTMLCollection = document.getElementsByClassName('list-item');

console.log('--- STATO INIZIALE ---');
console.log('Static NodeList (querySelectorAll):', staticNodeList.length); // Risultato: 4
console.log('Live HTMLCollection (getElements...):', liveHTMLCollection.length); // Risultato: 4

// 3. Funzione per aggiungere un item
btn.addEventListener('click', () => {
    // Creiamo il nuovo elemento
    const newItem = document.createElement('li');
    newItem.classList.add('list-item');
    newItem.textContent = `Item ${liveHTMLCollection.length + 1}`;
    
    // Aggiungiamo alla lista
    list.appendChild(newItem);

    console.log('--- DOPO L\'AGGIUNTA ---');
    // Questa rimarrà al valore che aveva al momento della creazione (snapshot)
    console.log('Static NodeList:', staticNodeList.length); 
    
    // Questa si aggiornerà automaticamente perché riflette lo stato attuale del DOM
    console.log('Live HTMLCollection:', liveHTMLCollection.length);
});