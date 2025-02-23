const vscode = require('vscode');
const aiService = require('./aiService');

async function analyzeCode() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;
    const code = editor.document.getText(editor.selection);
    if (!code) return vscode.window.showInformationMessage('Select some code first!');
    const result = await aiService.callOpenAI(`Refactor and optimise the code:${code}`);
    vscode.window.showInformationMessage(result);
}
async function debugCode() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;
    const code = editor.document.getText(editor.selection);
    if (!code) return vscode.window.showInformationMessage('Select some code first!');
    const result = await aiService.callOpenAI(`Just mention the bugs in the code:${code}`);
    vscode.window.showInformationMessage(result);
}
async function addComments() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;
    const code = editor.document.getText(editor.selection);
    if (!code) return vscode.window.showInformationMessage('Select some code first!');
    const result = await aiService.callOpenAI(`Add comments in the code:${code}`);
    vscode.window.showInformationMessage(result);
}
module.exports = { analyzeCode, debugCode, addComments };
