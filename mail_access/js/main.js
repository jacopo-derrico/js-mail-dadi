// creare lista di mail accettate
// prendo mail da input 
// controllo se la mail è nella lista
// fornisco feedback

const emailProfiles = ["first@email.com", "second@email.com", "third@email.com", "forth@email.com" ]
const inputMail = document.getElementById('mail')
const checkBtn = document.getElementById('check-btn')
const resultCheck = document.getElementById('result')

for (let i = 0; i < emailProfiles.length; i++) {
    console.log(emailProfiles[i])   
}

checkBtn.addEventListener('click', checkMail)

function checkMail() {
    for (let i = 0; i < emailProfiles.length; i++) {
        
        if (emailProfiles[i] === inputMail.value) {
            resultCheck.innerHTML = "Mail corretta"
        }
        
    }
}
