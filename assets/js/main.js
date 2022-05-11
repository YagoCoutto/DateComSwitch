

function escopo(){
    function escopeDay(daydate) {
        let DiaTxt;
        switch (daydate) {
            case 0:
                DiaTxt = 'Domingo';
                return DiaTxt;
            case 1:
                DiaTxt = 'Segunda-Feira';
                return DiaTxt;
            case 2:
                DiaTxt = 'Terça-Feira';
                return DiaTxt;
            case 3:
                DiaTxt = 'Quarta-Feira';
                return DiaTxt;
            case 4:
                DiaTxt = 'Quinta-Feira';
                return DiaTxt;
            case 5:
                DiaTxt = 'Sexta-Feira';
                return DiaTxt;
            case 6:
                DiaTxt = 'Sábado';
                return DiaTxt;
        }

    }

    function escopeMonth(month) {
        let monthTxt;
        switch (month) {
            case 0:
                monthTxt = 'Janeiro';
                return monthTxt;
            case 1:
                monthTxt = 'Fevereiro';
                return monthTxt;
            case 2:
                monthTxt = 'Março';
                return monthTxt;
            case 3:
                monthTxt = 'Abril';
                return monthTxt;
            case 4:
                monthTxt = 'Maio';
                return monthTxt;
            case 5:
                monthTxt = 'Junho';
                return monthTxt;
            case 6:
                monthTxt = 'Julho';
                return monthTxt;
            case 7:
                monthTxt = 'Agosto';
                return monthTxt;
            case 8:
                monthTxt = 'Setembro';
                return monthTxt;
            case 9:
                monthTxt = 'Outubro';
                return monthTxt;
            case 10:
                monthTxt = 'Novembro';
                return monthTxt;
            case 11:
                monthTxt = 'Dezembro';
                return monthTxt;
        }
    }

    const data = new Date();
    const dia = data.getDate();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const daydate = data.getDay();
    const month = data.getMonth();

    // chamando a função
    const DiaTxt = escopeDay(daydate);
    const monthTxt = escopeMonth(month);
    const h1 = document.querySelector('.container')
    
    h1.innerHTML= `<h1>${DiaTxt}, ${dia} de ${monthTxt} de ${ano} ${hora}:${min}</h1>`;
}

escopo();