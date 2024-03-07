import React, { createContext, useContext, useState, useCallback } from 'react';
import axios from 'axios';

const AppointmentsContext = createContext();

export function useAppointments() {
  return useContext(AppointmentsContext);
}

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = useCallback(async () => {
    const response = await axios.get('http://127.0.0.1:5000/appointments');
    setAppointments(response.data.reverse()); // Reverse to display new appointments at the top
  }, []);

  const addAppointment = async (appointmentData) => {
    const response = await axios.post('http://127.0.0.1:5000/appointments', appointmentData);
    fetchAppointments(); // Re-fetch appointments to reflect the new one
  };

  const deleteAppointment = async (appointmentId) => {
    await axios.delete(`http://127.0.0.1:5000/appointments/${appointmentId}`);
    fetchAppointments(); // Re-fetch appointments to reflect the deletion
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, deleteAppointment, fetchAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

