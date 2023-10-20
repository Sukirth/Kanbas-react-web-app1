function BooleanVariables () {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let true1 = true
    let false1 = false
    let false2 = true1 && false1
    let true2 = true1 || false1

    return (
        <div>
            false1 = {false1+""} <br/>
            true1 = {true1+""} <br/>
            false2 = {false2+""} <br/>
            true2 = {true2+""} <br/>
        </div>
    );

}
export default BooleanVariables