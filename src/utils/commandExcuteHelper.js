import insertText from 'insert-text-at-cursor';

export const getStateFromTextArea = textArea => {
    return {
        selection: {
            start: textArea.selectionStart,
            end: textArea.selectionEnd,
        },
        text: textArea.value,
        selectedText: textArea.value.slice(textArea.selectionStart,textArea.selectionEnd)
    }
}

export class TextAreaTextApi {
    constructor(textArea) {
        this.textArea=textArea
    }
    replaceSelection(text) {
        insertText(this.textArea, text);
        return getStateFromTextArea(this.textArea)
    }
    setSelectionRange(selection) {
        this.textArea.focus();
        this.textArea.selectionStart=selection.start;
        this.textArea.selectionEnd=selection.end;
        return getStateFromTextArea(this.textArea);
    }
}

export class TextAreaCommandExcuteHelper {
    constructor(textArea) {
        this.textArea = textArea;
        this.TextApi=new TextAreaTextApi(textArea);
    }

    excuteCommand(command) {
        command.execute(getStateFromTextArea(this.textArea), this.TextApi)
    }
}