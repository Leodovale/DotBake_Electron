const { app, BrowserWindow} = require('electron')

function CarregaJanela () {
    const janela = new BrowserWindow({
        icon: 'imgsrc/Logo.png',
        autoHideMenuBar: true,
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true,
        }
    })
    janela.loadFile('index.html')
}


app.whenReady().then(CarregaJanela)