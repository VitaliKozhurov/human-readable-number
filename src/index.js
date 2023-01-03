module.exports = function toReadable (number) {

        const smallNumbers = {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
        }
    
        const middleNumbers = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
        }
    
        if(number in smallNumbers) {
            return smallNumbers[number]
        }
    
        if(number in middleNumbers) {
            return middleNumbers[number]
        }
    
        function convertNumber(number){
            const first = middleNumbers[Math.floor(number/10)*10];
            const remainder = number%10;
            if(!remainder) return `${first}`;
            const second = smallNumbers[number%10];
            return `${first} ${second}`
        }
    
        if(number>20 && number<100){
           return convertNumber(number)
        }
    
        if(number>=100 && number<1000){
            const first = smallNumbers[Math.floor(number/100)];
            const remainder = number%100;
            if(!remainder) return `${first} hundred`
            const second = remainder<=19?smallNumbers[remainder]:convertNumber(remainder);
            
            return `${first} hundred ${second}`
        }
    
    
}
