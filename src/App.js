import React from 'react';
import './App.css';
import AppointmentsList from './AppointmentsList';
import CreateAppointment from './CreateAppointment';
import { AppointmentsProvider } from './AppointmentsContext'; // Import the provider

function App() {
  return (
    <AppointmentsProvider> {/* Wrap components with the provider */}
      <div className="App">
        <header className="App-header">
          <h1>DIAGNOSTRUM</h1>
        </header>
        <CreateAppointment />
        <AppointmentsList />
      </div>
    </AppointmentsProvider>
  );
}

export default App;
