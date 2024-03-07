import React, { useEffect } from 'react';
import { useAppointments } from './AppointmentsContext'; // Import the useAppointments hook
import './AppointmentsList.css';

function AppointmentsList() {
    // Use the useAppointments hook to access appointments and the functions
    const { appointments, fetchAppointments, deleteAppointment } = useAppointments();

    useEffect(() => {
        fetchAppointments(); // Fetch appointments when the component mounts
    }, [fetchAppointments]); // Dependency array ensures fetchAppointments is called once on mount

    // Removed the local fetchAppointments and deleteAppointment function definitions
    // since we are now using those provided by the AppointmentsContext

    return (
        <div className="list-container">
          <h2>Citas programadas</h2>
          <ul>
            {appointments.map(appointment => (
              <li key={appointment.id} className="list-item">
                {appointment.patient_name} - {appointment.rad_type} 
                <br />
                {appointment.hospital} <br />
                {appointment.appointment_date} <br />
                {/* Use the deleteAppointment from context */}
                <button onClick={() => deleteAppointment(appointment.id)} className="delete-button">Anular</button>
              </li>
            ))}
          </ul>
        </div>
    );
}

export default AppointmentsList;
