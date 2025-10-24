function adicionarReserva() {
    const nomep = document.getElementById('nomep')
    const data = document.getElementById('data')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')
    const telefone = document.getElementById('telefone')
    const descricao = document.getElementById('descricao')


    
    const reservaCalendario = {
        nome: nomep.value,
        data: data.value,
        produto: produto.value,
        quantidade: quantidade.value,
        telefone: telefone.value,
        descricao: descricao.value

    }

    let reservaLS = window.localStorage.getItem('Reservas')

    if(reservaLS == undefined) {
        reservaLS = []
    } else {
        reservaLS = JSON.parse(reservaLS)
    }
    
    reservaLS.push(reservaCalendario)
    window.localStorage.setItem('Reservas', JSON.stringify(reservaLS))
    alert('reserva feita com sucesso')
}