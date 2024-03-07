import React, { useState } from 'react';
import axios from 'axios';
import './CreateAppointment.css';
import { useAppointments } from './AppointmentsContext';

function CreateAppointment() {
    const [patientName, setPatientName] = useState('');
    const [testType, setTestType] = useState('');
    const [radType, setRadType] = useState(''); // New state for Rad type
    const [urgency, setUrgency] = useState(''); // New state for Urgency
    const { addAppointment } = useAppointments();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const appointmentData = {
            patient_name: patientName,
            test_type: testType,
            rad_type: radType,
            urgency: urgency,
        };
        await addAppointment(appointmentData); // Now awaiting the async operation
        // Reset form fields here if needed
    };

    return (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-field"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Nombre del paciente"
            />
            <input
              type="text"
              className="form-field"
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
              placeholder="Observaciones"
            />
            {/* Rad Type Dropdown */}
            <select
              className="form-field"
              value={radType}
              onChange={(e) => setRadType(e.target.value)}
            >
              <option value="">Selecciona tipo de prueba</option>
              <option value="Rayos X">Rayos X</option>
              <option value="Tomografía Computarizada (TC o TAC)">Tomografía Computarizada (TC o TAC)</option>
              <option value="Resonancia Magnética (RM o MRI)">Resonancia Magnética (RM o MRI)</option>
              <option value="Ecografía (Ultrasonografía)">Ecografía (Ultrasonografía)</option>
              <option value="Mamografía">Mamografía</option>
            </select>
            {/* Urgency Dropdown */}
            <select
              className="form-field"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
            >
              <option value="">Grado de urgencia</option>
              {[...Array(5).keys()].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <button type="submit" className="form-button">Programar cita</button>
          </form>
        </div>
    );
}

export default CreateAppointment;
