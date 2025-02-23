const vscode = require('vscode');
const commands = require('./commands');
const commandHandlers = require('./commandHandlers');
const SidebarProvider = require('./sidebarProvider');

function activate(context) {
    const sidebarProvider = new SidebarProvider(context);
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(
            'ai-helper-sidebar',
            sidebarProvider
        ),
        vscode.commands.registerCommand(commands.ANALYZE_CODE.id, commandHandlers.analyzeCode),
        vscode.commands.registerCommand(commands.DEBUG_CODE.id, commandHandlers.debugCode),
        vscode.commands.registerCommand(commands.ADD_COMMENTS.id, commandHandlers.addComments)
    );
}

function deactivate() {}
module.exports = { activate, deactivate };
