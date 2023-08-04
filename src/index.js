module.exports = function toReadable (number) {
    let str = number.toString();
    let out = '';
    // Missive of constant
    const
        o = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        t = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighteen', 'ninety'],
        h = ['one hundred', 'two hundred', 'three hundred ', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'],
        p = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    

    if(str.length == 1) 
        return o[number-1];
    else if(str.length == 2){
        if(str[0] == 1)
            out = p[parseInt(str[1])-1];
        else 
        out = (t[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + o[parseInt(str[1])-1]):''));
    }
    else if(str.length == 3){
        out = (h[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + t[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + o[parseInt(str[2])-1]):''));
    }
    // make first letter High
    let strOut = out.split('');
    
    strOut = strOut.join('');
    return strOut;
}