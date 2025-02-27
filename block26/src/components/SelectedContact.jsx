import { useState } from "react";
import { useEffect } from "react";


function SelectedContact({ selectedContactId, setSelectedContactId }) {
    if (!selectedContactId) {
      return <p>No contact selected</p>;
    }
  
    return (
      <div>
        <h2>Selected Contact ID: {selectedContactId}</h2>
        <button onClick={() => setSelectedContactId(null)}>Deselect</button>
      </div>
    );
  }
  
  export default SelectedContact;
  