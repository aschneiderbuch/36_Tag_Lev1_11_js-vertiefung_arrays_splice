console.log("test");


let array = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];

console.log(array)
console.table(array);

array.splice(array.length,0, `imageTeilnehmer00${array.length + 6}supercode.jpg`) // 002   jetzt 008
array.splice(array.length,0, `imageTeilnehmer00${array.length + 6}supercode.jpg`) //  jetzt 009
array.splice(array.length,0, `imageTeilnehmer0${array.length + 6}supercode.jpg`) // 002   jetzt 010   // vorne eine 0 weg



console.log(array)
console.table(array);

array.splice(array.length,0, `imageTeilnehmer0${array.length +9}supercode.jpg`) // 14
array.splice(array.length,0, `imageTeilnehmer0${array.length +9}supercode.jpg`)
array.splice(array.length,0, `imageTeilnehmer0${array.length +9}supercode.jpg`)
array.splice(array.length,0, `imageTeilnehmer0${array.length +9}supercode.jpg`)
array.splice(array.length,0, `imageTeilnehmer0${array.length +9}supercode.jpg`)
array.splice(array.length,0, `imageTeilnehmer0${array.length +9}supercode.jpg`) // 19

array.splice(2,0, "015-019")

console.log(array)
console.table(array);

const zahlen0bis7 = [0, 1,2,3,4,5,6,7]

array.splice(zahlen0bis7.indexOf(2),0, `imageTeilnehmer00${zahlen0bis7.indexOf(2)}supercode.jpg`)
array.splice(zahlen0bis7.indexOf(3),0, `imageTeilnehmer00${zahlen0bis7.indexOf(3)}supercode.jpg`)
//array.splice(zahlen0bis7.map((element) => element),0, `imageTeilnehmer00${zahlen0bis7.map((element) => element)}supercode.jpg`)
array.splice(zahlen0bis7.indexOf(4),0, `imageTeilnehmer00${zahlen0bis7.indexOf(4)}supercode.jpg`)
array.splice(zahlen0bis7.indexOf(5),0, `imageTeilnehmer00${zahlen0bis7.indexOf(5)}supercode.jpg`)
array.splice(zahlen0bis7.indexOf(6),0, `imageTeilnehmer00${zahlen0bis7.indexOf(6)}supercode.jpg`)
array.splice(zahlen0bis7.indexOf(7),0, `imageTeilnehmer00${zahlen0bis7.indexOf(7)}supercode.jpg`)

array.splice(12,0, `imageTeilnehmer0${zahlen0bis7.indexOf(3)+8}supercode.jpg`)
array.splice(13,0, `imageTeilnehmer0${zahlen0bis7.indexOf(3)+9}supercode.jpg`)
array.splice(14,0, `imageTeilnehmer0${zahlen0bis7.indexOf(3)+10}supercode.jpg`)



console.log(array)
console.table(array);