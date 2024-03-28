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
    await axios.get(`${backendURL}/appointments/latest`)
      .then(response => {
        // Check if the response contains a message field, indicating no appointments
        if(response.data.message) {
          // Set appointments to an empty array or any structure you prefer to indicate no appointments
          setAppointments([]);
        } else {
          // If there are appointments, reverse them to display new ones at the top
          setAppointments(response.data.reverse());
        }
      });
  }, [backendURL]);
  

  const addAppointment = async (appointmentData) => {
    // Similar approach as `fetchAppointments` if `response` isn't used elsewhere
    await axios.post(`${backendURL}/appointments`, appointmentData)
    .then(() => fetchAppointments())
    .catch(error => console.error("Error adding appointment:", error));
   // No need to assign to `response` if not using it
  };

  const deleteAppointment = async (appointmentId) => {
    await axios.delete(`${backendURL}/appointments/${appointmentId}`)
      .then(() => fetchAppointments()); // Re-fetch appointments to reflect the deletion
  };

  const updateSpreadsheet = useCallback(async () => {
    await axios.post(`${backendURL}/update-spreadsheet`)
      .then(response => {
        alert(response.data.message); // Show success message
      })
      .catch(error => {
        console.error("Error updating spreadsheet:", error);
        alert("Failed to update the spreadsheet"); // Show error message
      });
  }, [backendURL]);
  

  return (
  <AppointmentsContext.Provider value={{ appointments, addAppointment, deleteAppointment, fetchAppointments, updateSpreadsheet }}>
    {children}
  </AppointmentsContext.Provider>
  
  );

  
};
