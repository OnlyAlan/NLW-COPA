
function createGame(bandeira1, bandeira2, horario){
    return`
    <li><!-- itens da lista-->
    <img src="./assets/${bandeira1}.svg" alt="">
    <strong>${horario}</strong><!-- Deixa texto negrito-->
    <img src="./assets/${bandeira2}.svg" alt="">
    </li>
`
}

let delay = -0.1;
function Createcard(date, day, games){
    delay+=0.1;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2> <!--span = diferenciação de conteudo inline-->
        <ul>
        ${games}
        </ul>
        </div> `
}


document.querySelector("#cards").innerHTML = 

        Createcard('21/11', 'Segunda-Feira', createGame("brasil", "camaroes","08:00")+createGame("hungria", "argentina","13:00")+createGame("colombia", "japao","20:00"))

        +

        Createcard('24/11', 'Quinta-Feira', createGame("suiça", "camaroes","07:00")+createGame("portugal", "gana","13:00")+createGame("brasil", "servia","16:00"))

        +

        Createcard('28/11', 'Segunda-Feira',createGame("coreia", "gana","10:00")+createGame("brasil", "suiça","13:00")+createGame("portugal", "uruguai","16:00"))



       /*     <li><!-- itens da lista-->
                <img src="./assets/br.svg" alt="">
                <strong>16:00</strong><!-- Deixa texto negrito-->
                <img src="./assets/sv.svg" alt="">
            </li>*/
            
            
            
            
// document.querySelector("#cards").innerHTML = `

//         ${Createcard('24/11', 'Quinta-Feira', 
//         createGame("suiça", "camaroes","07:00")+createGame("portugal", "gana","13:00")+createGame("brasil", "servia","16:00"))}

//         ${Createcard('28/11', 'Segunda-Feira',
//         createGame("coreia", "gana","10:00")+createGame("brasil", "suiça","13:00")+createGame("portugal", "uruguai","16:00"))}

// `