const calendario = document.getElementById('calendario')
const opcoes = {
    intialView: 'dayGridMonth',
    locale: 'pt-br',
    width: 500,
    height: 500,
    headerToolbar: {
        right: 'dayGridMonth,timeGridWeek, timeGridDay,listWeek',
        center: 'title',
        left: ''
    },

    eventClick: function (info) {
        alert(
            'Nome: ' + info.event.title + '\n' +
            'Telefone: ' + info.event.extendedProps.telefone + '\n' +
            'Produto: ' + info.event.extendedProps.produto + '\n' +
            'Quantidade: ' + info.event.extendedProps.quantidade + '\n' +
            'Comentario: ' + info.event.extendedProps.descricao
        );
    }
}
const calendarioJS = new FullCalendar.Calendar(calendario, opcoes)

let reservaLS = window.localStorage.getItem('Reservas')
 reservaLS = JSON.parse(reservaLS)

 for (let i=0; i < reservaLS.length; i++) {
     const reserva = reservaLS[i]

     calendarioJS.addEvent({
        title: reserva['nome'],
        start: reserva['data'],    
        end: reserva['data'],
        produto: reserva['produto'],
        quantidade: reserva['quantidade'],
        telefone: reserva['telefone'],
        descricao: reserva['descricao']
     })
 }


calendarioJS.render()