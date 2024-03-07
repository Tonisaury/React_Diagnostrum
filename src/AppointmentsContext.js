import React, { createContext, useContext, useState, useCallback } from 'react';
import axios from 'axios';

const AppointmentsContext = createContext();

export function useAppointments() {
  return useContext(AppointmentsContext);
}

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  // Define backendURL using the environment variable
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  const fetchAppointments = useCallback(async () => {
    const response = await axios.get(`${backendURL}/appointments`);
    setAppointments(response.data.reverse()); // Reverse to display new appointments at the top
  }, []);

  const addAppointment = async (appointmentData) => {
    const response = await axios.post(`${backendURL}/appointments`, appointmentData);
    fetchAppointments(); // Re-fetch appointments to reflect the new one
  };

  const deleteAppointment = async (appointmentId) => {
    await axios.delete(`${backendURL}/appointments/${appointmentId}`);
    fetchAppointments(); // Re-fetch appointments to reflect the deletion
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, deleteAppointment, fetchAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

