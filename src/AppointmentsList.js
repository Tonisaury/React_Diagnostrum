import React, { useEffect } from 'react';
import { useAppointments } from './AppointmentsContext'; // Import the useAppointments hook
import './AppointmentsList.css';

function AppointmentsList() {
  const { appointments, fetchAppointments, deleteAppointment } = useAppointments();

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  return (
    <div className="list-container">
      <h2>Citas programadas</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id} className="list-item">
              <div className="appointment-info">
                {appointment.patient_name} - {appointment.test_type}
                <br />
                {appointment.hospital} - {appointment.room} <br />
                {appointment.appointment_date} <br />
                <span className="created-at-text">Created at: {appointment.appointment_created_at}</span>
              </div>
              <button onClick={() => deleteAppointment(appointment.id)} className="delete-button">Anular</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No hay citas programadas</div>
      )}
    </div>
  );
}



export default AppointmentsList;
