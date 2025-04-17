function calculateDose() {
  const weight = parseFloat(document.getElementById('weight').value);
  const drug = document.getElementById('drug').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(weight) || weight <= 0) {
    resultDiv.innerHTML = "Please enter a valid weight.";
    return;
  }

  const maxDoses = {
    lidocaine: 3,
    lidocaine_with_adrenaline: 7,
    bupivacaine_0_25: 2,
    bupivacaine_0_5: 2,
    ropivacaine: 3
  };

  const mgPerML = {
    lidocaine: 10,
    lidocaine_with_adrenaline: 10,
    bupivacaine_0_25: 2.5,
    bupivacaine_0_5: 5,
    ropivacaine: null
  };

  const maxDose = maxDoses[drug] * weight;
  let result = `Maximum dose of <strong>${drug.replace('_', ' ').replace(/_/g, ' ')}</strong> for a ${weight} kg patient is <strong>${maxDose} mg</strong>.`;

  if (mgPerML[drug]) {
    const volume = maxDose / mgPerML[drug];
    result += `<br>This is approximately <strong>${volume.toFixed(1)} mL</strong> of the selected solution.`;
  } else {
    result += `<br>Volume calculation not available for this drug.`;
  }

  resultDiv.innerHTML = result;
}
