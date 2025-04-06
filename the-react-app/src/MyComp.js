function MyComp(props) {

    return (
    <>
        <hr style = {{color:"red"}}></hr>
        <p style = {{fontSize:"20px", marginLeft:"10px"}}>{props.data}</p>
        <hr></hr>

    </>
    );
    
    
}

export default MyComp;