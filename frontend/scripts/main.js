// frontend/scripts/main.js
document.getElementById('getMessageButton').addEventListener('click', async () => {
    try {
      const response = await fetch('https://testing-app-8en3.onrender.com/api/message');
      const data = await response.json();
      document.getElementById('message').textContent = data.message;
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  });
  
