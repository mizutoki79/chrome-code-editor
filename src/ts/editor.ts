import * as monaco from 'monaco-editor';

const preferDarkTheme = () => window.matchMedia('(prefers-color-scheme:dark)').matches;
const theme = preferDarkTheme() ? 'vs-dark' : 'vs';

const targetElementId = 'container';
const editorOption: monaco.editor.IStandaloneEditorConstructionOptions = {
    theme: theme,
};

const createEditor = (targetElementId: string, options: monaco.editor.IStandaloneEditorConstructionOptions) => {
    const targetElement = document.getElementById(targetElementId);
    const editor = monaco.editor.create(targetElement, options);
    window.onresize = () => editor.layout();
};

const main = () => {
    const editor = createEditor(targetElementId, editorOption);
};

main();
