import React from 'react';
import { selectWord } from "../utils/MarkdownUtils";

function setHeader(state0, api, prefix) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    const newSelectionRange = selectWord({ text: state0.text, selection: state0.selection });
    const state1 = api.setSelectionRange(newSelectionRange);
    // Add the prefix to the selection
    const state2 = api.replaceSelection(`${prefix}${state1.selectedText}`);
    // Adjust the selection to not contain the prefix
    api.setSelectionRange({
        start: state2.selection.end - state1.selectedText.length,
        end: state2.selection.end
    });
}

export const headerCommand = {
    name: "FormatSize",
    buttonProps: { "aria-label": "Add header" },
    children: [
        {
            name: "FormatHeader1",
            execute: (state, api) => setHeader(state, api, "# "),
        },
        {
            name: "FormatHeader2",
            execute: (state, api) => setHeader(state, api, "## "),
        },
        {
            name: "FormatHeader3",
            execute: (state, api) => setHeader(state, api, "### "),
        },
        {
            name: "FormatHeader4",
            execute: (state, api) => setHeader(state, api, "#### "),
        },
    ],
};


