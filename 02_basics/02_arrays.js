const marvel_heros=["Spiderman","Thor","Hulk"];
const dc_heros=["Batman","flash","Superman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heros]  // this is called spreading and most preffered way
// console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Parth"));
// console.log(Array.from("Parth"));
// console.log(Array.from({name:"Parth"}));   // interesting topic for interview perspective


const score1=100;
const score2=200;
const score3=300;

console.log(Array.of(score1,score2,score3));