// function convertToPersianNumbers(input) {

function convertToPersianNumbers(input) {
    if (input == null) {
        return "";
    }

    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return input.toString().replace(/\d/g, (digit) => persianDigits[digit]);
}

export { convertToPersianNumbers };
