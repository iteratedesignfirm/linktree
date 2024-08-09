// @ts-nocheck
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('subscriptionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    try {
      const response = await fetch('https://resourcekit-server.onrender.com/addEmailToMailingList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        alert('Subscription successful!');
      } else {
        alert('Subscription failed.');
      }
    } catch (error) {
      console.error('Error details:', error);
      alert('An error occurred.');
    }
  });
});