export const GeneralPractise = [
    {
        "Type": "General Practice",
        "data": "A software engineer designs and builds digital systems, ensuring efficient performance and reliable functionality. Their work blends logical thinking, creativity, and problem-solving to deliver applications that support businesses and improve everyday experiences."
    },
    {
        "Type": "General Practice",
        "data": "A data analyst interprets raw information"
    },
    {
        "Type": "General Practice",
        "data": "A project manager coordinates teams, "
    },
    {
        "Type": "General Practice",
        "data": "A marketing specialist develops strategies to"
    },
    {
        "Type": "General Practice",
        "data": "A financial advisor supports clients "
    },
    {
        "Type": "General Practice",
        "data": "A human resources officer "
    },
    {
        "Type": "General Practice",
        "data": "A graphic designer communicates ."
    },
    {
        "Type": "General Practice",
        "data": "A cybersecurity specialist"
    },
    {
        "Type": "General Practice",
        "data": "A teacher supports students."
    },
    {
        "Type": "General Practice",
        "data": "A healthcare administrator ."
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


