import React from 'react'
import '../components/todo.css'
import { useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import darkmode from '../darkmode.png'
import lightmode from '../lightmode.png'
const TodoApp = () => {
    const [name, setname] = useState("")
    const [phone, setphone] = useState('');
    const [time, settime] = useState("");
    const [desc, setdescription] = useState("")


    const[indexValue,Setindex]=useState()
    

    const [data, SetData] = useState([]);
    const [arr, setArr] = useState({ Name: "", phoneno: "", descriptionValue: "", addTime: "" });
const[myindex,Setmyindex]=useState()
    const darkModeImage = document.getElementsByClassName("modedark")[0];
    const lightmodeImage = document.getElementsByClassName("modelight")[0];
    document.getElementsByClassName("flexCard");
    function changemode() {
        if (document.getElementById("modes").style.backgroundColor == "white") {
            // document.querySelectorAll('.todocard')[0].style.backgroundColor='#1a204a';
            document.getElementById("modes").style.backgroundColor = "black"
            darkModeImage.style.display = 'none';
            lightmodeImage.style.filter = "invert(100%)";
            lightmodeImage.style.display = "block";
          document.getElementById("modes").style.backgroundColor;
            localStorage.setItem("nowtheme", document.getElementById("modes").style.backgroundColor)
            document.getElementsByClassName("todocard")[0].style.backgroundColor ="#2b2a2a";
           // document.getElementsByClassName("flexCard").style.display = `none`

        }
        else if (document.getElementById("modes").style.backgroundColor == "black") {
            document.getElementById("modes").style.backgroundColor = "white";
            darkModeImage.style.filter = "invert(0%)";
            darkModeImage.style.display = "block";
            lightmodeImage.style.display = "none";
            localStorage.setItem("nowtheme", document.getElementById("modes").style.backgroundColor);

            document.getElementsByClassName("todocard")[0].style.backgroundColor ="#1a204a";
        }
    }
    useEffect(() => {
        let b = localStorage.getItem("nowtheme")
        if (b == "black") {
            document.getElementById("modes").style.backgroundColor = "black";
            document.getElementsByClassName("modelight")[0].style.filter = 'invert(1)'
            document.getElementsByClassName("modelight")[0].style.display = 'block';
            document.getElementsByClassName("todocard")[0].style.backgroundColor ="#2b2a2a";


        }
        else if (b == "white") {
            document.getElementById("modes").style.backgroundColor = "white";
            document.getElementsByClassName("todocard")[0].style.backgroundColor ="#1a204a";
        };
    }, [])
    function nameValue(e) {
        setname(e.target.value)
        setArr({ ...arr, Name: e.target.value });
    }
    function phonenumber(e) {
        setphone(e.target.value)
        setArr({ ...arr, phoneno: e.target.value });
    }
    function noteTime(e) {
        settime(e.target.value)
        setArr({ ...arr, addTime: e.target.value });

    }
    function description(e) {
        setdescription(e.target.value)
        setArr({ ...arr, descriptionValue: e.target.value });
    }
    useEffect(() => {
        let storedData = localStorage.getItem('data');
        let arr1 = JSON.parse(storedData) || [];
        SetData(arr1);


    }, [arr])


    function SaveValues() {
        if (!arr.Name || !arr.phoneno || !arr.addTime || !arr.descriptionValue) {
            Swal.fire({
                title: "Fields are required",
                 
                icon: "error",
            });
            return;
        }
        let storedData = localStorage.getItem('data');
        let arr1 = JSON.parse(storedData) || [];
        if (!Array.isArray(arr1)) {
            arr1 = [];
        }
        arr1.push({ ...arr });
        localStorage.setItem('data', JSON.stringify(arr1));
        setArr({ Name: "", phoneno: "", descriptionValue: "", addTime: "" });
        // setShowPopup(true);
        
        Swal.fire({
            title: "Saved",
            text: "",
            icon: "success",
            customClass: {
                container: 'my-custom-container-class',
                title: 'my-custom-title-class',
                content: 'my-custom-content-class',
                confirmButton: 'my-custom-confirm-button-class',
                cancelButton: 'my-custom-cancel-button-class',
              },
          });
    
    }

    function handleChangeValue(index) {
        Setmyindex(index)
         document.getElementsByClassName('flexCard')[index].style.display='none'
        const itemToEdit = data[index];
        Setindex(index)
         
        setArr({ ...arr, addTime:itemToEdit.addTime,Name:itemToEdit.Name,descriptionValue:itemToEdit.descriptionValue, phoneno:itemToEdit.phoneno  });

        document.getElementsByClassName('buttontodo')[1].style.display = 'block'
        document.getElementsByClassName('buttontodo')[0].style.display = 'none'
    }
    function updatedValue() {
        const update = data;
        console.log(update);
        console.log(indexValue);
        console.log(arr);
        update[indexValue]=arr;
        localStorage.setItem('data', JSON.stringify(update));
        setArr({ Name: "", phoneno: "", descriptionValue: "", addTime: "" });
        
        document.getElementsByClassName('buttontodo')[1].style.display = 'none'
        document.getElementsByClassName('buttontodo')[0].style.display = 'block'
        Swal.fire({
            title: "Updated",
            text: "",
            icon: "success"
        });
        document.getElementsByClassName('flexCard')[myindex].style.display='grid'
    
    }
    function handledeleteValue(idx){
        const updated = [...data];
        updated.splice(idx,1);
        localStorage.setItem('data', JSON.stringify(updated));
        SetData(updated);
        Swal.fire({
            title: "Deleted",
            text: "",
            icon: "success",
            customClass: {
                container: 'my-custom-container-class',
                title: 'my-custom-title-class',
                content: 'my-custom-content-class',
                confirmButton: 'my-custom-confirm-button-class',
                cancelButton: 'my-custom-cancel-button-class',
              },
          });
    }
    return (
        <div>
            <div className="modes">

                <img className='modedark' src={darkmode} alt="" onClick={changemode} />
                <img className='modelight' style={{ display: "none" }} src={lightmode} alt="" onClick={changemode} />
            </div>
            <div className="todomain">
                <div className="todocard" id='cardbg'>
                    <h1 className='todoheading'>Todo App</h1>
                    <div className="lists">
                        <div>

                            <label className='todolable' htmlFor=""> Add Your Task</label>
                        </div>
                        <div>

                            <input className='inputtodo' type="text" value={arr.Name} placeholder='Enter task' onChange={nameValue} required />
                        </div>
                        <div>
                            <label className='todolable' htmlFor="">Task No.</label>

                        </div>
                        <div>

                            <input className='inputtodo' value={arr.phoneno} type="number" placeholder='Task no.' onChange={phonenumber} required />
                        </div>
                    </div>

                    <div>
                        <label className='todolable' htmlFor=""> Add Date</label>

                    </div>
                    <div>

                        <input className='inputtodo' value={arr.addTime} type="date" placeholder='Add time' onChange={noteTime} required style={{cursor:'pointer'}} />
                    </div>
                    <div>

                        <label className='todolable' htmlFor=""> Description</label>
                    </div>
                    <div>

                        <textarea className='textareatodo' value={arr.descriptionValue} style={{ resize: 'none' }} name="" id="" cols="20" rows="5" placeholder='Desc...' onChange={description} required></textarea>
                    </div>
                    <div className="btntodo">
                        <input className='buttontodo' onClick={SaveValues} type="submit" value="Submit" />
                        <button className='buttontodo' style={{ display: 'none' }} onClick={updatedValue}>Update</button>
                    </div>

                </div>
            </div>
            
            <div className="getdataCard">
                {data.map((e, index) => {
                    return <div className='valueCards' key={index}>
                        <div className="flexCard">
                     
                            <span>Task:<span>{e.Name}</span></span>
                            <span>Task No: <span>     {e.phoneno}</span></span>
                            <span>Date: <span> {e.addTime}</span></span>
                            <span>Description: <span> {e.descriptionValue}</span></span>
                            <div className="btnflex">

                                <button onClick={() => handleChangeValue(index)} className='buttonstodo'>Edit</button>
                                <button className='deletebtn' onClick={()=>{handledeleteValue(index)}}>Delete</button>
                            </div>
                  
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TodoApp
