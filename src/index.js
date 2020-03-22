module.exports = function check(str, bracketsConfig) {
    let configs = bracketsConfig.map(c => c.join(""));

    let startLength = str.length; 
    let repeat = true;

    while(repeat) {
        configs.forEach(c => {
            str = str.replace(c, "");
        });

        repeat = startLength != str.length;
        startLength = str.length;
    }

    return str.length == 0;    
}
