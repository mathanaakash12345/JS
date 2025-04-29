let name = "Mathana Akash";
console.log(name);
// now assign the name to sh_name

let sh_name = name;

console.log(sh_name);

sh_name = "AK";
console.log(sh_name);
console.log(name);

// now the name is not modifies, so its immutable

// Mutable concept

let agriuser1 = {
  name: "Akash",
  district: "DGL",
  crop: "Tomato",
  sand: "Red",
};

let agriuser2 = agriuser1;
console.log(agriuser1);
console.log(agriuser2);
// { name: 'Akash', district: 'DGL', crop: 'Tomato', sand: 'Red' }
// { name: 'Akash', district: 'DGL', crop: 'Tomato', sand: 'Red' }

agriuser2.crop = "potato";
console.log(agriuser1);
console.log(agriuser2);

// { name: 'Akash', district: 'DGL', crop: 'potato', sand: 'Red' }
// { name: 'Akash', district: 'DGL', crop: 'potato', sand: 'Red' }

// modification also changes the original objecct
