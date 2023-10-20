
const ConditionalOutputInline = () => {
    const loggedIn = false;
    const color = 'blue';
    return (
      <>
        <h3>ConditionalOutputInline</h3>
        { loggedIn && <h4>Welcome Inline</h4>      }
        {!loggedIn && <h4><i>Please login Inline</i></h4> }
      </>
    );
   };
   export default ConditionalOutputInline;