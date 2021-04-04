import React, {useState , useEffect} from 'react'


function Form(){
    var [ini,nw] = useState(null);

    var ftch = ()=>{
        fetch('http://localhost:8000/new')
        .then(res=>res.json())
        .then(data=>{
            var mapped = data.map((nm)=>{
                return(
                    <h1 className = "frmh1">the name fetched is:{nm.name}</h1>
                )
            })
            nw(mapped)
        })
    }

    useEffect(()=>{
        ftch();
    },[])

    return(
        <div className = "div1">
            <button className = "but1" onClick = {()=>{ftch()}}>refresh</button>
            {ini}
        </div>
    )
}

export default Form