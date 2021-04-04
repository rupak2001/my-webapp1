import React from "react";

function Sent() {

    const val = ()=>{
        const value = document.getElementById('inp').value
        const sendfile = {name:value}
        document.getElementById('inp').value = null
        return sendfile

    }
    const trigger = ()=>{
        fetch('http://localhost:8000/new',{
            method : 'POST',
            body : JSON.stringify(val()),
            headers: {'Content-Type':'application/json'}
        })
        .then(
            alert('data sent successfully'))
    }
    return (
        <div>
            <div className="form1">
                <h1 className="hf1">EXAMPLE FORM</h1>
                <hr />
                <button className="frmbut" onClick={() => {trigger()}}>SEND</button>
                <input type="text" placeholder='enter the name' id="inp"></input>
            </div>
        </div>
    );
}

export default Sent