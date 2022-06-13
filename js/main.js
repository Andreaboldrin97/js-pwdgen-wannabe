// dichiarazione variabile userId
let userId = prompt('inserisci l\'id che vuoi usare')
//prendo l'elemento HTML con id (user_id) e ne aggiungiamo il contenuto inserito dall'utente
document.getElementById('user_id').innerHTML = (userId)

// dichiarazione variabile nameUser
let nameUser = prompt('Qual\'è il tuo nome ?')
//prendo l'elemento HTML con id (name_user) e ne aggiungiamo il contenuto inserito dall'utente
document.getElementById('name_user').innerHTML = (nameUser)

// dichiarazione variabile userSurname
let userSurname = prompt('Il tuo cognome invece ?')
//prendo l'elemento HTML con id (surname_user) e ne aggiungiamo il contenuto inserito dall'utente
document.getElementById('surname_user').innerHTML = (userSurname)

// dichiarazione variabile userAge
let userAge = prompt('Quanti anni hai ?')
userAge= parseInt (userAge)
//prendo l'elemento HTML con id (user_age) e ne aggiungiamo il contenuto inserito dall'utente
document.getElementById('user_age').innerHTML = (userAge)
// dichiarazione variabile (userYearOfBirth) composta da (anno corrente - (variabile userAge))
let userYearOfBirth = 2022 - (userAge)
//prendo l'elemento HTML con id (userYearOfBirth) e ne aggiungiamo il contenuto inserito dall'utente
document.getElementById('user_year_of_birth').innerHTML = (userYearOfBirth)

// dichiarazione variabile favoriteUserColo
let favoriteUserColor= prompt('Il tuo colore preferito invece ?')
//prendo l'elemento HTML con id (favorite_user_color) e ne aggiungiamo il contenuto inserito dall'utente
document.getElementById('favorite_user_color').innerHTML = (favoriteUserColor)

// dichiarazione variabile userEmail
let userEmail = prompt('potresti darmi la tua e-mail ?')
//prendo l'elemento HTML con id (email_user) e ne aggiungiamo il contenuto inserito dall'utente
document.getElementById('email_user').innerHTML = (userEmail)

//prendo l'elemento HTML con id (greetuser) e ne aggiungiamo il contenuto inserito dall'utente in (nameUser + userSurname) + (userId)
document.getElementById('greetuser').innerHTML = ('Allora è un piacere conoscerti, ') + (nameUser) + (' ') + (userSurname) + (' o forse dovrei chiamarti ') + (userId)

//prendo l'elemento HTML con id (userpass) e ne aggiungiamo il contenuto inserito dall'utente in (userId + userAge) per creare la password
document.getElementById('userpass').innerHTML = ('La tua password sarà : ') + (userId) + (userAge)


console.log (userId, nameUser, userSurname, userAge, userYearOfBirth, favoriteUserColor, userEmail)