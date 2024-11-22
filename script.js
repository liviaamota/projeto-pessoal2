let option = ''
 
const handball = {}
 do {
    option = prompt(`
    1 - handebool
    2 - jogar o quiz
    3 -  sair 

    `)
    function perguntas() {
        let pergunta1= prompt('quantas posições tem?')
        let pergunta2= prompt('quantos jogadores?')
        let pergunta3= prompt('as substituições são limitadas?')
    }
    switch (option){
        case '1': 
        handball.positions = alert('Existem cinco posições no handebool,quais delas são central,ponta,pivÔ,armação e goleiro')
        handball.rules = alert('Tempo de posse: não há limite de tempo, mas ataques passivos são penalizados. Substituições: as substituições de jogadores são ilimitadas .')
        handball.players = alert ('A quantidade de jogadores são sete,contando com o goleiro.')
          
            break
        case '2': 
        perguntas() 
      
        case'3': 
        alert('Saindo ...')
        break
    }
} while (option !== '3')
