module.exports = function toReadable(number) {
    const numberWords = [
        { 0: "zero" },
        { 1: "one" },
        { 2: "two" },
        { 3: "three" },
        { 4: "four" },
        { 5: "five" },
        { 6: "six" },
        { 7: "seven" },
        { 8: "eight" },
        { 9: "nine" },
        { 10: "ten" },
        { 11: "eleven" },
        { 12: "twelve" },
        { 13: "thirteen" },
        { 14: "fourteen" },
        { 15: "fifteen" },
        { 16: "sixteen" },
        { 17: "seventeen" },
        { 18: "eighteen" },
        { 19: "nineteen" },
        { 20: "twenty" },
        { 30: "thirty" },
        { 40: "forty" },
        { 50: "fifty" },
        { 60: "sixty" },
        { 70: "seventy" },
        { 80: "eighty" },
        { 90: "ninety" },
    ];

    const findWord = (num) =>
        numberWords.find((obj) => Object.keys(obj)[0] == num);

    if (number <= 20) {
        const wordObject = findWord(number);
        return wordObject[number];
    }

    if (number > 20 && number < 100) {
        const [tensDigit, onesDigit] = number.toString().split("");
        const tensNumber = tensDigit + "0";
        const tensWord = findWord(tensNumber)[tensNumber];
        let onesWord = "";
        if (onesDigit != 0) {
            onesWord = findWord(onesDigit)[onesDigit];
        }
        const result = `${tensWord}${onesDigit != 0 ? " " + onesWord : ""}`;
        return result;
    }

    if (number > 99 && number < 1000) {
        const [hundredsDigit, tensDigit, onesDigit] = number
            .toString()
            .split("");
        const hundredsWord =
            findWord(hundredsDigit)[hundredsDigit] + " " + "hundred";
        const lastTwoNumber = number.toString().slice(-2);
        let result;
        if (lastTwoNumber == "00") {
            return hundredsWord;
        }
        if (Number(lastTwoNumber) <= 20 && tensDigit != 0) {
            const findLastTwo = findWord(lastTwoNumber);
            result = hundredsWord + " " + findLastTwo[lastTwoNumber];
            return result;
        }
        let tensWord = "",
            onesWord = "";

        if (tensDigit != 0) {
            const tensNumber = tensDigit + "0";
            tensWord = findWord(tensNumber)[tensNumber];
        }

        if (onesDigit != 0) {
            onesWord = findWord(onesDigit)[onesDigit];
        }

        result = `${hundredsWord}${tensDigit != 0 ? " " + tensWord : ""}${
            onesDigit != 0 ? " " + onesWord : ""
        }`;
        return result;
    }
};
