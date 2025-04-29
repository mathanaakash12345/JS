function gd(t,callback) {
    setTimeout(() => {
        callback("The bird fly");
    }, t);
}


function gdp(t) {
    return new Promise((resolve) => {
        gd(t,(result) => resolve(result));
    });
}

time = 1985
gdp(time).then(console.log);
