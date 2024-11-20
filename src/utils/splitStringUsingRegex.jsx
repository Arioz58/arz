function splitStringUsingRegex(str){
    const characters = [];
    const regex = /[\s\S]/gu;

    let match;

    while ((match = regex.exec(str)) !== null) {
        console.log(match);
        characters.push(match[0]);
    }

    return characters;
}

export default splitStringUsingRegex;