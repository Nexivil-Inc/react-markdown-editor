import { getBreaksNeededForEmptyLineAfter, getBreaksNeededForEmptyLineBefore, selectWord } from "../utils/MarkdownUtils";

export const quoteCommand = {
    name: "FormatQuoteClose",
    buttonProps: { "aria-label": "Add bold text" },
    execute: (state0, api) => {
        // Adjust the selection to encompass the whole word if the caret is inside one
        const newSelectionRange = selectWord({ text: state0.text, selection: state0.selection });
        const state1 = api.setSelectionRange(newSelectionRange);

        const breaksBeforeCount = getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
        const breaksBefore = Array(breaksBeforeCount + 1).join("\n");

        const breaksAfterCount = getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
        const breaksAfter = Array(breaksAfterCount + 1).join("\n");

        // Replaces the current selection with the bold mark up
        api.replaceSelection(`${breaksBefore}> ${state1.selectedText}${breaksAfter}`);
        // Adjust the selection to not contain the **

        const selectionStart = state1.selection.start + breaksBeforeCount + 2;
        const selectionEnd = selectionStart + state1.selectedText.length;

        api.setSelectionRange({
            start: selectionStart,
            end: selectionEnd
        });
    },
    keyCommand: "quote",
};