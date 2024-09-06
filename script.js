// @ts-nocheck
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('subscriptionForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email'); // Reference to the input element
    const email = emailInput.value;

    try {
      const response = await fetch('https://resourcekit-server.onrender.com/addEmailToMailingList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        showToast(); // Show the toast notification
        emailInput.value = ''; // Clear the input field after successful submission
      } else {
        console.error('Subscription failed');
        // Optionally show another toast or message for failure
      }
    } catch (error) {
      console.error('Error details:', error);
      // Optionally show another toast or message for error
    }
  });
});

function showToast() {
  var toast = document.getElementById("toast");

  // Reset any previous state
  toast.className = "toast"; // Ensure the toast is in its initial state

  // Force reflow to restart the animation (trick to re-trigger CSS animations)
  void toast.offsetWidth; 

  // Show toast (move from right to center)
  toast.className = "toast show";
  
  // After 3 seconds, hide toast (move out to the left)
  setTimeout(function() {
    toast.className = "toast hide";
  }, 3000);

  // Fully reset toast after the animation ends
  setTimeout(function() {
    toast.className = "toast"; // Reset classes
  }, 3500); // Animation duration: 0.5s + 3s wait time
}
