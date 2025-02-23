const vscode = require('vscode');

class SidebarProvider {
    constructor(context) {
        this.context = context;
    }

    resolveWebviewView(webviewView) {
        this.webviewView = webviewView;
        webviewView.webview.options = { enableScripts: true };
        webviewView.webview.html = this.getHtmlForWebview();
    }

    getHtmlForWebview() {
        return `
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="style.css">
            <script src="script.js"></script>
        </head>
        <body>
            <h2>AI Code Helper</h2>
            <button onclick="sendCommand('analyze')">Analyze Code</button>
            <button onclick="sendCommand('debug')">Debug Code</button>
            <button onclick="sendCommand('docs')">Add Comments</button>
        </body>
        </html>`;
    }
}

module.exports = SidebarProvider;