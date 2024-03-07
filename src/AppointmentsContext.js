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
    // Directly use axios.get without assigning to `response` if not using `response` elsewhere
    await axios.get(`${backendURL}/appointments`)
      .then(response => setAppointments(response.data.reverse())); // Reverse to display new appointments at the top
  }, [backendURL]); // Include backendURL in the dependency array to adhere to the rule of hooks

  const addAppointment = async (appointmentData) => {
    // Similar approach as `fetchAppointments` if `response` isn't used elsewhere
    await axios.post(`${backendURL}/appointments`, appointmentData)
      .then(() => fetchAppointments()); // No need to assign to `response` if not using it
  };

  const deleteAppointment = async (appointmentId) => {
    await axios.delete(`${backendURL}/appointments/${appointmentId}`)
      .then(() => fetchAppointments()); // Re-fetch appointments to reflect the deletion
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, deleteAppointment, fetchAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};
