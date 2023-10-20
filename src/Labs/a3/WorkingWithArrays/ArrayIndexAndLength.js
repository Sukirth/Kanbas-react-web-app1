function ArrayIndexAndLength () {
    let numberArray1 = [1, 2, 3, 4, 5];
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
 return (
    <div>
        <h1>ArrayIndexAndLength</h1>
        length1 = {length1} <br/>
        index1 = {index1} <br/>
        length1 of array = {numberArray1.length} <br/>
        index of array = {numberArray1.indexOf(3)} 
    </div>
 );

}
export default ArrayIndexAndLength