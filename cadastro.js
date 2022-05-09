let labelProblemas = document.querySelector('#problemas')

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validaUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validaSenha = false

let criaUsuario = document.querySelector('#criaUsuario')
let labelCriaUsuario = document.querySelector('#labelCriaUsuario')
let validaCriaUsuario = false

let criaEmail = document.querySelector('#criaEmail')
let labelCriaEmail = document.querySelector('#labelCriaEmail')
let validaCriaEmail = false

let criaSenha = document.querySelector('#criaSenha')
let labelCriaSenha = document.querySelector('#labelCriaSenha')
let validaCriaSenha = false

let confirmaSenha = document.querySelector('#confirmaSenha')
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')
let validaConfirmaSenha = false

let inserirData = document.querySelector('#inserirData')
let LabelInserirData = document.querySelector('#LabelInserirData')
let validaInsirirData = false

criaUsuario.addEventListener('focusout',()=>{
    if(criaUsuario.value.length < 3){
        labelCriaUsuario.setAttribute('style','color: red')
        criaUsuario.setAttribute('style','border-color: red')
        labelCriaUsuario.innerHTML = 'Escolha um nome de usuario valido'
        validaCriaUsuario = false
    }else{
        labelCriaUsuario.setAttribute('style','color: green')
        criaUsuario.setAttribute('style','border-color: green')
        labelCriaUsuario.innerHTML = 'Escolha um nome de usuario'
        validaCriaUsuario = true
    }
})


criaEmail.addEventListener('focusout',()=>{
    antesArroba = criaEmail.value.substring(0, criaEmail.value.indexOf("@"));
    depoisArroba = criaEmail.value.substring(criaEmail.value.indexOf("@")+ 1, criaEmail.value.length);
    
    if ((antesArroba.length >=1) &&
        (depoisArroba.length >=3) &&
        (antesArroba.search("@")==-1) &&
        (depoisArroba.search("@")==-1) &&
        (antesArroba.search(" ")==-1) &&
        (depoisArroba.search(" ")==-1) &&
        (depoisArroba.search(".")!=-1) &&
        (depoisArroba.indexOf(".") >=1)&&
        (depoisArroba.lastIndexOf(".") < depoisArroba.length - 1)) 
    {
        labelCriaEmail.setAttribute('style','color:green')
        labelCriaEmail.innerHTML = 'Digite seu email'
        criaEmail.setAttribute('style','border-color: green')
        validaCriaEmail = true
    }else{
        labelCriaEmail.setAttribute('style','color:red')
        labelCriaEmail.innerHTML = 'Digite um email valido'
        criaEmail.setAttribute('style','border-color:red')
        validaCriaEmail = false
    }
})

criaSenha.addEventListener('focusout',()=>{
    if(criaSenha.value.length < 8){
        labelCriaSenha.setAttribute('style','color:red')
        labelCriaSenha.innerHTML = 'Senha deve conter ao menos 8 cacteres'
        criaSenha.setAttribute('style','border-color: red')
        validaCriaSenha = false
    }else{
        labelCriaSenha.setAttribute('style','color:green')
        labelCriaSenha.innerHTML = 'Escolha uma senha'
        criaSenha.setAttribute('style','border-color:green')
        validaCriaSenha = true
    }
})

confirmaSenha.addEventListener('focusout',()=>{
    if(confirmaSenha.value != criaSenha.value){
        labelConfirmaSenha.setAttribute('style','color:red')
        labelConfirmaSenha.innerHTML = 'As senhas não são iguais'
        confirmaSenha.setAttribute('style','border-color: red')
        validaConfirmaSenha = false
    }else if(criaSenha.value.length < 8){
        labelConfirmaSenha.setAttribute('style','color:red')
        confirmaSenha.setAttribute('style','border-color: red')
        validaConfirmaSenha = false
    }else{
        labelConfirmaSenha.setAttribute('style','color:green')
        labelConfirmaSenha.innerHTML = 'Confirme sua senha'
        confirmaSenha.setAttribute('style','border-color:green')
        validaConfirmaSenha = true
    }
})

inserirData.addEventListener('focusout',()=>{
    dataAtual = new Date()

    if(inserirData.value > dataAtual){
        LabelInserirData.setAttribute('style','color:red')
        LabelInserirData.innerHTML = 'Insira uma data valida'
        inserirData.setAttribute('style','border-color: red')
        validaInsirirData = false
    }else{
        LabelInserirData.setAttribute('style','color:green')
        LabelInserirData.innerHTML = 'Insira sua data de nascimento'
        inserirData.setAttribute('style','border-color: red')
        validaInsirirData = true
    }
})