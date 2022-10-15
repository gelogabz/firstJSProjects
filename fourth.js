let xmasTree = 7;

for (a = 1; a <= xmasTree; a++) {

    for (b = 1; b <= (xmasTree - a); b++) {
        document.write(" ");
    }
    for (c = 1; c <= a; c++) {
        document.write("🎄");
    }
    document.write("<br/>");
}



//Loop practice
/*
let i = 1;

for (i; i <= 20; i++) {
    console.log(i);
    // document.write(`${i} <br>`);
}
*/

//for of practice

// let studentNames = ["gelo", "mark", "john"];
// for (text of studentNames) {
//     console.log(text);
// }

//for in

// let studentNames = {
//     firstname: "gelo",
//     lastname: "baring"
// };

// for (text in studentNames) {
//     console.log(studentNames[text]);
// }

// let studentNames = [
//     {
//         firstname: "gelo",
//         lastname: "baring"
//     },
//     {
//         firstname: "jessica",
//         lastname: "gutierrez"
//     },
//     {
//         firstname: "yohan",
//         lastname: "olarcos"
//     }
// ];

// for (text in studentNames) {
//     console.log(studentNames[2].lastname);
// }

// //While

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

//do while
// let i = 0;

// do {
//     i++;
//     console.log(i);
// }
// while (i <= 100);
