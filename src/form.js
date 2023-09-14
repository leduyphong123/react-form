import {useState} from "react";

function Form() {
    const [form,setForm] = useState({});
    const handleValue = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log(form)
    return ( <div>
        <form>
            <input  onChange={handleValue} name="email"></input>
            <input onChange={handleValue}  name="pass"></input>
        </form>
    </div> );
}

export default Form;