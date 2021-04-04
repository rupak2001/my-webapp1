import React from 'react'

class Send extends React.Component {
    constructor() {
        super();
        this.comps = this.comps.bind(this)
        this.snd = this.snd.bind(this)
        this.send_data = this.send_data.bind(this)
    }

    comps = ()=>{
        var value ={name:document.getElementById('inp').value};
        console.log(value);
        document.getElementById('inp').value = null;
        return value;
    }
    send_data = ()=>{
        fetch('http://localhost:8000/new',{
            method : 'POST',
            body : JSON.stringify(this.comps()),  //these params are main for sending
            headers: {'Content-Type': 'application/json'}
        })
        .then(alert('data sent to api'))
    }

    snd = ()=>{
        this.send_data();
    }
    render() {
        return (
            <div>
                <div className = "form1"> 
                    <h1 className="hf1">EXAMPLE FORM</h1>
                    <hr/>
                    <button className="frmbut" onClick = {()=>{this.snd()}}>SEND</button>
                    <input type = "text" placeholder = 'enter the name' id = "inp"></input>
                </div>
            </div>
        )
    }
}

export default Send