export const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" },
];

export const options2 = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" },
    { value: "4", label: "Four" },
    { value: "5", label: "Five" },
    { value: "6", label: "Six" },
    { value: "7", label: "Seven" },
    { value: "8", label: "Eight" },
    { value: "9", label: "Nine" },
];

export const allOptions = [
    { option: "draggable", default: "true", type: "boolean", explanation: "If the list items should be draggable." },
    { option: "showSortButtons", default: "false", type: "boolean", explanation: "If the sort buttons should be shown. (up and down)" },
    { option: "enableDoubleClick", default: "true", type: "boolean", explanation: "If double clicking a list items should change column." },
    { option: "showAddButton", default: "true", type: "boolean", explanation: 'If the "add" button should be shown.' },
    { option: "showRemoveButton", default: "true", type: "boolean", explanation: 'If the "remove" button should be shown.' },
    { option: "showAddAllButton", default: "true", type: "boolean", explanation: 'If the "add all" button should be shown.' },
    { option: "showRemoveAllButton", default: "true", type: "boolean", explanation: 'If the "remove all" button should be shown.' },
    { option: "availableTitle", default: '"Available options"', type: "string", explanation: 'Title shown above the "Available options"' },
    { option: "selectedTitle", default: '"Selected options"', type: "string", explanation: 'Title shown above the "Selected options"' },
    { option: "addButtonText", default: '"add"', type: "string", explanation: 'Text displayed in the "add" button.' },
    { option: "removeButtonText", default: '"remove"', type: "string", explanation: 'Text displayed in the "remove" button.' },
    { option: "addAllButtonText", default: '"add all"', type: "string", explanation: 'Text displayed in the "add all" button.' },
    { option: "removeAllButtonText", default: '"remove all"', type: "string", explanation: 'Text displayed in the "remove all" button.' },
    { option: "searchPlaceholder", default: '"Search"', type: "string", explanation: 'Text in the "search" fields.' },
    { option: "upButtonText", default: '"up"', type: "string", explanation: 'Text in the "up" button (if sorting enabled)' },
    { option: "downButtonText", default: '"down"', type: "string", explanation: 'Text in the "down" button (if sorting enabled)' },
    { option: "options", default: "undefined", type: "Array<{ text, value, selected, order }>", explanation: "Options list that overwrites <select>." },
    { option: "sortFunction", default: "Function", type: "Function", explanation: "Custom function to override default sorting." },
];

export const publicFunctions = [
    { name: "changeOrder", args: "liItem, newPosition", desc: "Change the order of the given list element." },
    { name: "addOptions", args: "options", desc: "Add multiple options to the options list." },
    { name: "addOption", args: "option, index (optional)", desc: "Add a single option, optionally at an index." },
    { name: "addEventListener", args: "eventName, callback", desc: "Add an event listener." },
    { name: "changeSelected", args: "listItem", desc: "Toggle selected state of the item." },
    { name: "actionAllSelected", args: "event (optional)", desc: "Mark all items as selected." },
    { name: "actionAllDeselected", args: "event (optional)", desc: "Deselect all items." },
    { name: "redraw", args: "", desc: "Redraw the lists." },
];