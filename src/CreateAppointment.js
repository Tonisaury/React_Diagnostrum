import React, { useState } from 'react';
import './CreateAppointment.css';
import { useAppointments } from './AppointmentsContext';

function CreateAppointment() {
    const [patientName, setPatientName] = useState('');
    const [observations, setObservations] = useState('');
    const [testType, setTestType] = useState(''); // New state for Rad type
    const [urgency, setUrgency] = useState(''); // New state for Urgency
    const { addAppointment } = useAppointments();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const appointmentData = {
            patient_name: patientName,
            observations: observations,
            test_type: testType,
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
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              placeholder="Observaciones"
            />
            {/* Rad Type Dropdown */}
            <select
              className="form-field"
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
            >
              <option value="">Selecciona tipo de prueba</option>
              <option value="COL">COL</option>
              <option value="RMN MENIT">RMN MENIT</option>
              <option value="RMN GENOLL">RMN GENOLL</option>
              <option value="MSCC">MSCC</option>
              <option value="NRL30">NRL30</option>
              <option value="NRLC">NRLC</option>
              <option value="GUC">GUC</option>
              <option value="ABDC">ABDC</option>
              <option value="RECTO">RECTO</option>
              <option value="NRLI">NRLI</option>
              <option value="COR60">COR60</option>
              <option value="ENTERO">ENTERO</option>
              <option value="CAR 1 ING">CAR 1 ING</option>
              <option value="INV 75">INV 75</option>
              <option value="NRLC90">NRLC90</option>
              <option value="ABDA">ABDA</option>
              <option value="COR75">COR75</option>
              <option value="ABDI">ABDI</option>
              <option value="BBMAT">BBMAT</option>
              <option value="INVES 45">INVES 45</option>
              <option value="GINE9530">GINE9530</option>
              <option value="B.CLINIC">B.CLINIC</option>
              <option value="RMNVAS">RMNVAS</option>
              <option value="INVES45">INVES45</option>
              <option value="9538">9538</option>
              <option value="NRLNIT">NRLNIT</option>
              <option value="NRL">NRL</option>
              <option value="MSC30">MSC30</option>
              <option value="NRLA">NRLA</option>
              <option value="VAS">VAS</option>
              <option value="MSCA">MSCA</option>
              <option value="BRAQUI">BRAQUI</option>
              <option value="COR90">COR90</option>
              <option value="MSCI">MSCI</option>
              <option value="TORAX">TORAX</option>
              <option value="INV 60">INV 60</option>
              <option value="CMSC">CMSC</option>
              <option value="FETAL">FETAL</option>
              <option value="VVPP">VVPP</option>
              <option value="GU60">GU60</option>
              <option value="CR10 D">CR10 D</option>
              <option value="NRLDAI">NRLDAI</option>
              <option value="ABDDAI">ABDDAI</option>
              <option value="NRL60">NRL60</option>
              <option value="CARDIO DAI">CARDIO DAI</option>
              <option value="CRHEP  45'">CRHEP  45'</option>
              <option value="TH9530">TH9530</option>
              <option value="RMNTRA">RMNTRA</option>
              <option value="GUA">GUA</option>
              <option value="IMAMA">IMAMA</option>
              <option value="CR9530">CR9530</option>
              <option value="ARTRO">ARTRO</option>
              <option value="INV 90">INV 90</option>
              <option value="CGU">CGU</option>
              <option value="NRLSCI">NRLSCI</option>
              <option value="NRLCI">NRLCI</option>
              <option value="VASNRL">VASNRL</option>
              <option value="NRLCSC">NRLCSC</option>
              <option value="PRESPECTRUM">PRESPECTRUM</option>
              <option value="NRLSC">NRLSC</option>
              <option value="MSCSC">MSCSC</option>
              <option value="XOC_MAMA">XOC_MAMA</option>
              <option value="NRLC_I">NRLC_I</option>
              <option value="EPI">EPI</option>
              <option value="IEPI">IEPI</option>
              <option value="NRLC60">NRLC60</option>
              <option value="NRLU">NRLU</option>
              <option value="RMABR">RMABR</option>
              <option value="NRL90">NRL90</option>
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
