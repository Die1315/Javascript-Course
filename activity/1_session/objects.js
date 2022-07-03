let formatter = {
    'prefix' : "Hello ",
    'append' : function(wordtoadd){
        out_concatenated = this.prefix + wordtoadd;
        console.log(out_concatenated) 
        return out_concatenated;
    },
};

formatter.append("world!");

formatter.toLowerString = function(wordtolower){
    if(typeof wordtolower == 'string'){ 
        out_lower = wordtolower.toLowerCase()
    }else {
        console.log('No es un string');
        return ;
    }
    console.log(out_lower);
    return out_concatenated;
};

formatter.toLowerString('I´m Diego')