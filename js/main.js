let userId = prompt('inserisci l\'id che vuoi usare')
document.getElementById('user_id').innerHTML = (userId)

let nameUser = prompt('Qual\'è il tuo nome ?')
document.getElementById('name_user').innerHTML = (nameUser)

let userSurname = prompt('Il tuo cognome invece ?')
document.getElementById('surname_user').innerHTML = (userSurname)

let userAge = prompt('Quanti anni hai ?')
userAge= parseInt (userAge)
document.getElementById('user_age').innerHTML = (userAge)
let userYearOfBirth = 2022 - (userAge)
document.getElementById('user_year_of_birth').innerHTML = (userYearOfBirth)

let favoriteUserColor= prompt('Il tuo colore preferito invece ?')
document.getElementById('favorite_user_color').innerHTML = (favoriteUserColor)

let userEmail = prompt('potresti darmi la tua e-mail ?')
document.getElementById('email_user').innerHTML = (userEmail)

document.getElementById('greetuser').innerHTML = ('Allora è un piacere conoscerti, ') + (nameUser) + (userSurname) + ('o forse dovrei chiamarti ') + (userId)


console.log (userId, nameUser, userSurname, userAge, favoriteUserColor, userEmail)