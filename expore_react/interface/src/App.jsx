import {createRoot} from 'react-dom/client';
import { useState, useEffect, useCallback } from 'react';
import {BiArchive} from 'react-icons/bi'
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
// import appointmentList from "./data.json"



function App () {
  const [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data)
    })
  }, [])


  useEffect(() => {
    fetchData()
  }, [fetchData])


    return(
        <div className="App container mx-auto mt-3 font-thin p-5">
            <h1 className='text-3xl'> <BiArchive className='inline-block text-red-400 mb-3'/> Your Appointment</h1>
            <AddAppointment/>
            <Search/>

            <ul className="divide-y divide-gray-200">
        {appointmentList
          .map(appointment => (
            <AppointmentInfo key={appointment.id}
              appointment={appointment}
              onDeleteAppointment={
                appointmentId => 
                  setAppointmentList(appointmentList.filter(appointment =>
                    appointment.id !== appointmentId))
              }
            />
          ))
        }
      </ul>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)