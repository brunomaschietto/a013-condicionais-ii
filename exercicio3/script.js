//código a ser reescrito

const nome = prompt('Digite seu nome:').toLowerCase();
(nome === 'josé' || nome === 'jose')? console.log("Oi, Zé!") : console.log("Olá, "+ nome.slice(0,1).toUpperCase() +nome.slice(1))

const idade = +prompt('Digite sua idade:')
idade >= 18 ? console.log("Pode tirar carteira de motorista!"): console.log("Ainda não pode tirar carteira de motorista")

