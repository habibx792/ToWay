export const GeneralPractise = [
    {
        "Type": "General Practice",
        "data": "In todays rapidly "
    },
    {
        "Type": "General Practice",
        "data": "Project management requires "
    },
    {
        "Type": "General Practice",
        "data": "Financial analysis"
    },
    {
        "Type": "General Practice",
        "data": "Human resource"
    },
    {
        "Type": "General Practice",
        "data": "Marketing strategies "
    }
]
;
export function display() {
    const obj = [];
    for (let i = 0; i < GeneralPractise.length; i++) {
        obj.push(GeneralPractise[i]);
    }
    return obj;
}


