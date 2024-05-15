import './App.css';
import React, { useEffect } from 'react';
import TestLogo from './assets/TestLogo.png'
import Homeimg from './assets/home.png'
import Patientsimg from './assets/group.png'
import Scheduleimg from './assets/calendar.png'
import Messageimg from './assets/chat_bubble.png'
import Transactionsimg from './assets/credit_card.png'
import Profileimg from './assets/profile.png'
import Setting from './assets/setting.png'
import More from './assets/more_vert.png'
import PatientsList from './components/PatientsList';
import { useState } from 'react';
import PatientProfile from './components/PatientProfile';


function App() {
  const [patients, setPatients] = useState([])
  const [selectedPatient, setSelectedPatient] = useState(null)

  async function fetchData() {
    const username = 'coalition';
    const password = 'skills-test';
    const encodedCredentials = btoa(`${username}:${password}`);

    // authentication username coalition password skills-test
    const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev',
      {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`
        }
      }
    ).then(response => response.json())
    const data = await response
    setPatients(data)
    setSelectedPatient(data[0])
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }
    , [])



  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={TestLogo} alt="TestLogo" />
        </div>
        <ul>
          <li><a href="#">
            <img src={Homeimg} alt="Home" />
            Overview</a></li>
          <li><a href="#">
            <img src={Patientsimg} alt="Patients" />
            Patients</a></li>
          <li><a href="#">
            <img src={Scheduleimg} alt="Schedule" />
            Schedule</a></li>
          <li><a href="#">
            <img src={Messageimg} alt="Message" />
            Message</a></li>
          <li><a href="#">
            <img src={Transactionsimg} alt="Transactions" />
            Transactions</a></li>
        </ul>
        <div className="profile">
          <img src={Profileimg} alt="profile" />
          <div className="profile-info">
            <p className='name'>Dr. Jose Simmons</p>
            <p className='role'>General Practitioner</p>
          </div>
          <div className="profile-setting">
            <button>
              <div className='setting_img'><img src={Setting} alt="setting" /></div>
            </button>
            <button>
              <div className='more'><img src={More} alt="more" /></div>
            </button>
          </div>
        </div>

      </header>
      <section className="main">
        <div id='patients_list'>
          <PatientsList patients={patients} />
        </div>
        <div id='diagnosis'>
          <h2 className='diagnosis_hist_title'>Diagnosis History</h2>
          {/* <PatientsList patients={patients} /> */}
          <div className='diagnosis_cards_container'>
            <div className='diagnosis_card' id='card1'>
              <div className='diagnosis_card_img_cont'>
                <img src='https://via.placeholder.com/50' alt='icon' />
              </div>
              <p>Respiratory Rate</p>
              <h2>20 bps</h2>
              <p>Normal</p>
            </div>
            <div className='diagnosis_card' id='card2'>
              <div className='diagnosis_card_img_cont'>
                <img src='https://via.placeholder.com/50' alt='icon' />
              </div>
              <p>Temperature</p>
              <h2>98.6°F</h2>
              <p>Normal</p>
            </div>
            <div className='diagnosis_card' id='card3'>
              <div className='diagnosis_card_img_cont'>
                <img src='https://via.placeholder.com/50' alt='icon' />
              </div>
              <p>Heart Rate</p>
              <h2>78 bpm</h2>
              <p>Lower than Average</p>
            </div>
          </div>
        </div>
        <div id='patients_profile'>
          <PatientProfile patient={selectedPatient} />
        </div>
      </section>
    </div>
  );
}

export default App;
