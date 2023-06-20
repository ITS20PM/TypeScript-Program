var firstNonRepeated = function(s: string) {
    var unique:string = "";
    var freq:number[] = new Array(26);
    
    // add 0's 
    for (let i = 0; i < 26; i++) {
        freq[i] = 0;
    }
    
    
    for(let i = 0; i < s.length; i++) {
        var index:number = s.charCodeAt(i)-97;

        if (freq[index] == 0) {
            unique += s[i];
        }
        freq[index] += 1;
    }
    
    for (let i = 0; i < unique.length; i++) {
        var index:number = unique.charCodeAt(i)-97;
        if (freq[index] == 1) {
           
            return unique[i];
        }
    }
    
    return "";
}


console.log(firstNonRepeated("hello"));
console.log(firstNonRepeated("aabcc"));
console.log(firstNonRepeated("aabbcc"));

