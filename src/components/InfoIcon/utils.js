export const numberToText = (number) => {
    switch (true){
        case number<1000:
            return number;
        case number<1000000:
            return Math.floor(number/1000) + 'k';
        default:
            return Math.floor(number/1000000) + 'm';
    }
}