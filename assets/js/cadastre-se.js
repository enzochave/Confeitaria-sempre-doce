const password = document.getElementById('password')
    const confirmaPassword = document.getElementById('confirma-password')

function cadastrarUsuario() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    

    if (password.value == confirmaPassword.value) {
        //Cadastrar no localStorage

        let lista = window.localStorage.getItem('usuario')

        if (lista == undefined) {
            lista = []

            let usuario = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }
            lista.push(usuario)

            window.localStorage.setItem('usuarios', JSON.stringify(lista))
            alert('usuario cadastrado')
        } else {
            let listaE = window.localStorage.getItem('usuarios')
            listaE =JSON.parse(listaE)

            let usuarioA = {
                'nome': nome.value,
                'email': email.value,
                'password':password.value
            }

            listaE.push(usuarioA)

            window.localStorage.setItem('usuarios', JSON.stringify(listaE))
            alert('usuario cadastrado')

            nome.value = ''
            email.value = ''
            password.value = ''
            confirmaPassword.value = ''
        }

    } else {
        alert('Senha não confere, verifique seus dados')
        password.value = ''
        confirmaPassword.value = ''
    }
}

function toggleSenha() {
    const exibirSenha = document.getElementById('Exibir-senha')

    if (exibirSenha.checked == true) {
        password.type = 'text'
        confirmaPassword.type = 'text'
    } else {
        password.type = 'password'
        confirmaPassword.type = 'password'
    }
}