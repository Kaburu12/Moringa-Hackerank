import React, { useState } from 'react'
import Sidebar from './Sidebar'
import newAssignment from '../CSS/_newAssignment.scss'
import { BiBookAdd } from 'react-icons/bi';
import { BsCodeSlash, BsPatchQuestion } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import Kata from './Kata';
import Subjective from './Subjective';

function Test() {
  
  let navigate = useNavigate();

  const [formData, setformData] = useState({
    title:"",
  })

  //handleChange
  function handleChange (event){
    const name = event.target.name;
    let value = event.target.value;
    setformData({
        ...formData,
        [name]:value
    })
  }
  return (
    <div className="asses">
      <Sidebar className=".side-nav" />
      <div className="content">
        <div className="A-title">
          <h1> New Assesment</h1>
        </div>
        <div className="Atitle">
          <input type="text" placeholder="Enter Assessment Title" value={formData.title} name="title" onChange={handleChange}/>
        </div>
        <div className="Anav">
          <div className='marker'>
            <BiBookAdd className='a-icon'/> <span>QUIZ</span>
          </div>
          <div className='marker'>
            <BsCodeSlash className='a-icon'/> <span>KATA</span>
          </div>
          <div className='marker'>
            <BsPatchQuestion className='a-icon'/> <span>PROS</span>
          </div>
        </div>
        <div className='neW'>
          <div className='mcQ'>
            <Quiz/>
          </div>
          <div className='katA'>
            <Kata/>
          </div>
          <div className='proS'>
            <Subjective/>
          </div>
        </div>
        <div className='nexT'>
          <button className='buttoN'>SAVE</button>
        </div>
      </div>
    </div>
  );
}

export default Test
