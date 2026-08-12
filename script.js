document.getElementById('predictForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // This is a demo. To make it real we need to connect to your model.pkl with Flask
  let study = document.getElementById('studytime').value;
  let abs = document.getElementById('absences').value;
  let health = document.getElementById('health').value;
  
  let predictedScore = 50 + (study * 10) - (abs * 0.2) + (health * 3);
  predictedScore = Math.min(100, Math.max(0, predictedScore.toFixed(0)));
  
  document.getElementById('result').innerText = `Predicted Math Score: ${predictedScore}/100`;
});
