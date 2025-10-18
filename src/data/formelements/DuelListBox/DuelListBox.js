// /src/data/formelements/DuelListBox/DuelListBox.js

export const options = [
    { value: 'BLACK', label: 'Black' },
    { value: 'WHITE', label: 'White' },
    { value: 'RED', label: 'Red' },
    { value: 'GREEN', label: 'Green' },
    { value: 'BLUE', label: 'Blue' },
    { value: 'YELLOW', label: 'Yellow' },
];

export const options2 = [
    { value: 'APPLE', label: 'Apple' },
    { value: 'BANANA', label: 'Banana' },
    { value: 'ORANGE', label: 'Orange' },
    { value: 'MANGO', label: 'Mango' },
    { value: 'GRAPES', label: 'Grapes' },
    { value: 'PINEAPPLE', label: 'Pineapple' },
];

export const allOptions = [
    ['options', '[]', 'Array', 'Main options array for DualListBox'],
    ['selected', '[]', 'Array', 'Selected options array'],
    ['show-header-labels', 'false', 'Boolean', 'Show Available/Selected labels'],
    ['can-filter', 'false', 'Boolean', 'Enable filtering/search'],
    ['show-order-buttons', 'false', 'Boolean', 'Show sort up/down buttons'],
    ['lang', '{}', 'Object', 'Custom labels for headers'],
    ['icons', '{}', 'Object', 'Custom icons/buttons text'],
];

export const publicFunctions = [
    ['addOption', 'option', 'Add a new option dynamically'],
    ['removeOption', 'value', 'Remove option by value'],
    ['selectOption', 'value', 'Select an option programmatically'],
    ['deselectOption', 'value', 'Deselect an option programmatically'],
    ['getSelected', '-', 'Return current selected options'],
];
