const API_ENDPOINT = 'http://localhost:4000';

async function getAIResponse(message) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.reply; // Assuming the backend returns a JSON object with a 'reply' field
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return 'Sorry, there was an error processing your request.';
  }
}

export default {
  getAIResponse,
};
