function step1(callback) {
    setTimeout(() => {
        console.log("Step 1: Pick ingredients");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2: Cook food");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3: Serve food");
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Done");
        });
    });
});
