async function getName() {
    const response = await fetch('https://api.blooket.com/api/users/verify-xp', {
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,ru;q=0.8",
        },
        credentials: "include"
    });
    const data = await response.json();

    return data.name;
};

async function addCurrencies() {
    const xp = Number(prompt('How many xp do you want to add to your account? (300 daily)'));

    if (tokens > 3000) {
        alert('You can only add up to 3000 tokens daily.');
    };

    const response = await fetch('https://api.blooket.com/api/users/add-rewards', {
        method: "PUT",
        headers: {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
      
