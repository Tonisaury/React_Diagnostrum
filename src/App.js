import React from 'react';
import './App.css';
import AppointmentsList from './AppointmentsList';
import CreateAppointment from './CreateAppointment';
import { AppointmentsProvider, useAppointments } from './AppointmentsContext'; // Import the provider

// Button component for updating the spreadsheet
const UpdateSpreadsheetButton = () => {
  const { updateSpreadsheet } = useAppointments(); // Using the context to access the function

  return (
    <button onClick={updateSpreadsheet} className="update-spreadsheet-btn">Update Spreadsheet</button>
  );
};

function App() {
  return (
    <AppointmentsProvider> {/* Wrap components with the provider */}
      <div className="App">
        <header className="App-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1>DIAGNOSTRUM</h1>
          <UpdateSpreadsheetButton /> {/* Place the button at the top right */}
        </header>
        <CreateAppointment />
        <AppointmentsList />
      </div>
    </AppointmentsProvider>
  );
}

export default App;
