function sendCommand(command) {
    vscode.postMessage({ command });
}