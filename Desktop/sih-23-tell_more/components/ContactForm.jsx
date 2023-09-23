"use client";
import {useState} from "react";
import { resolve } from "styled-jsx/css";
export default function ContactForm() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [state, setState] = useState('');
    const [terrain, setTerrain] = useState('');
    const [benefits, setBenefits] = useState('');
    const [side, setSide] = useState('');
    const [files, setFiles] = useState([]);
    const [error,setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const handlefileChange = (e)=> {
        setFiles([e.target.files]);
    };
    const handleSubmit = async (e)=> {
        e.preventDefault();
        console.log("Full Name: ",name);
        console.log("Email: ",email);
        console.log("Phone: ",phone);
        console.log("Message: ",message);  
        const res = await fetch("api/contact",{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name,
                state,
                terrain,
                side,
                benefits,
                email,
                phone,
                message,
                files,
            }),
        });      
        
        try{
        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);
        if(success)
        {
            setFiles([]);
            setName("");
            setTerrain("");
            setState("");
            setSide("");
            setBenefits("");
            setEmail("");
            setPhone("");
            setMessage("");
            
        }
        }
        catch(error)
        {
            console.log(error);
        }
        
    };
    return <>
    <form 
    onSubmit = {handleSubmit}
    className="py-8 mt-8 border-t border-b flex flex-col gap-10">
        <div>
            <label htmlFor="files">Upload image as files</label>
            <div className="files">
            <input 
            type="file"
             id="files"
             multiple onChange={handlefileChange}
             />
             </div>
        </div>
        <div>
            <label htmlFor="name">Name of the medicine</label>
            <input
            onChange={ (e)=> setName(e.target.value)} 
            value ={name}
            type="text" id="name" placeholder="________"/>
        </div>
        <div>
            <label htmlFor="state">State you belong to</label>
            <input
            onChange={ (e)=> setState(e.target.value)} 
            value ={state}
            type="text" id="state" placeholder="________"/>
        </div>
        <div>
            <label htmlFor="terrain">Terrain</label>
            <input
            onChange={ (e)=> setTerrain(e.target.value)} 
            value ={terrain}
            type="text" id="terrain" placeholder="________"/>
        </div>
        <div>
            <label htmlFor="email">Email Address</label>
            <input
            onChange={ (e)=> setEmail(e.target.value)} 
            value ={email}
             type="text" id="email" placeholder="xxxx@gmail.com"/>
        </div>
        <div>
            <label htmlFor="phone">Phone Number</label>
            <input onChange={ (e)=> setPhone(e.target.value)} 
            value ={phone}
            type="text" id="phone" placeholder="000XXXXXXX"/>
        </div>
        <div>
            <label htmlFor="benefits">Benefits</label>
            <textarea
            onChange={ (e)=> setBenefits(e.target.value)} 
            value ={benefits}
            className="h-32"
             id="benefits" placeholder="type your message here..."></textarea>
        </div>
        <div>
            <label htmlFor="side">Side-effects if any</label>
            <textarea
            onChange={ (e)=> setSide(e.target.value)} 
            value ={side}
            className="h-32"
             id="side" placeholder="type your message here..."></textarea>
        </div>

        
        <button className="bg-green-700 p-4 text-white font- bold italic" type="submit">SEND</button>
    </form>
    <div className="bg-slate-100 flex flex-col">
        { error && error.map((e) => (
            <div 
            
            className={` ${success ? 'text-green-800':'text-green-800'} px-5 py-2`}>{e}</div>
        ))}
    </div>
    </>;
}