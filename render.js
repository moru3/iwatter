const { shell } = require('electron')
const webview = document.querySelector('webview')

webview.addEventListener('new-window', (e) => {
    const protocol = require('url').parse(e.url).protocol
    if (protocol === 'http:' || protocol === 'https:') {
        shell.openExternal(e.url)
    }
})