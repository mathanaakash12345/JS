const book = new Promise((resolve, reject) => {
    let count = 6
  if (count >= 5) {
    reject("Count Exceeds");
  } else {
    setTimeout(() => {
      resolve("Done Booking");
    }, 2000);
  }
});

book
.then((msg) => {
  console.log(msg);
})

.catch((e)=>{
    console.log(e)
})
