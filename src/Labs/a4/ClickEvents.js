function ClickEvents () {

    const hello = () => {
        alert("Hello World");
    };

    const good = () => {
        alert("I am doing good!");
    };

    const add = ({a ,  b}) => {
        alert("sum of ", a, "and ", b, "is", a+b );

    }


    return (
        <div>
            <h1>ClickEvents:</h1>
            <button className="btn btn-secondary" onClick={hello}> Hello</button>
            <button className="btn btn-success"  onClick = {good}> Good </button>
            <button className="btn btn-danger"  onClick = {
                                () =>  {
                                            hello();
                                            good();
                                        }
                            } > Hello+Good</button>
            <button onClick={({a = 3, b=3}) => add({a,b}) }> </button>

        </div>

    );

}
export default ClickEvents; 