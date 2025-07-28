import React from 'react';

const PersonaSelector = ({ persona, setPersona }) => {
  return (
    <div>
      <label>Select Persona: </label>
      <select value={persona} onChange={e => setPersona(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Student">Student</option>
        <option value="Researcher">Researcher</option>
        <option value="Manager">Manager</option>
      </select>
    </div>
  );
};

export default PersonaSelector;