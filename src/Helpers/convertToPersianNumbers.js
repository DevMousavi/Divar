function convertToPersianNumbers(input) {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return input.toString().replace(/\d/g, (digit) => persianDigits[digit]);
}

export { convertToPersianNumbers };
