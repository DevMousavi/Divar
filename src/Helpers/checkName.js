function checkUserName(character) {
    const englishRegex = /[a-zA-Z]/;

    const numberRegex = /[0-9]/;

    if (englishRegex.test(character)) {
        return true;
    }

    if (numberRegex.test(character)) {
        return true;
    }

    return false;
}

export { checkUserName };
