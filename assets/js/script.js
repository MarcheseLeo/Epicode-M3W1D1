/* JS Exercises should go here */

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
window.addEventListener('load', () => {
    removeTwitterLink()
})

function removeTwitterLink() {
    const list = document.querySelectorAll('.blog-sidebar > div:last-child > ol > li')
    list.forEach(li => {
        if (li.textContent === "Twitter") {
            li.remove()
        }
    })
}

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
const linkList = document.querySelectorAll('body >div:first-of-type > .row  a')
linkList.forEach(link =>{
    link.addEventListener('click', ()=>{
        removeFather(link)
    })
})

function removeFather(link) {
    link.parentElement.parentElement.remove()
}

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
const authorsList = document.querySelectorAll(".blog-post > h2 + p > a")
authorsList.forEach(author => {
    author.addEventListener('mouseover', ()=>{
        authorAlert(author.textContent)
    })
})

function authorAlert(author) {
    alert(`Autore: ${author}`)
}