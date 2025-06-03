// ===== TASK 1: WHAT IS AN API? =====
/*
1. **What is an API?**
   - An API (Application Programming Interface) is a set of rules that allows different software systems to communicate with each other.
   - It defines how requests and responses should be structured.

2. **Why are APIs important?**
   - They enable integration between different systems (e.g., social media logins, payment gateways).
   - Allow developers to use external services without knowing their internal workings.

3. **Analogy**:
   - An API is like a restaurant menu. You (the client) request a dish (data/functionality), and the kitchen (server) prepares it without you needing to know how it’s made.
*/

// ===== TASK 2: HTTP METHODS =====
/*
1. **HTTP Methods**:
   - **GET**: Retrieve data (e.g., fetching a user profile).
   - **POST**: Send data to create a resource (e.g., submitting a form).
   - **PUT**: Update an existing resource (e.g., editing a profile).
   - **DELETE**: Remove a resource (e.g., deleting a post).

2. **Examples**:
   - **GET**: Loading tweets on Twitter.
   - **POST**: Adding a new tweet.
   - **PUT**: Editing a tweet.
   - **DELETE**: Removing a tweet.
*/

// ===== TASK 3: FETCH API (GET REQUEST) =====
document.getElementById('loadDataFetch').addEventListener('click', async () => {
    const tableBody = document.querySelector('#outputTableFetch tbody');
    tableBody.innerHTML = ''; // Clear previous data

    try {
        const response = await fetch('https://api.coinbase.com/v2/currencies');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        data.data.forEach(currency => {
            const row = `<tr><td>${currency.id}</td><td>${currency.name}</td></tr>`;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Fetch Error:', error);
        tableBody.innerHTML = `<tr><td colspan="2">Error loading data: ${error.message}</td></tr>`;
    }
});

// ===== TASK 4: XMLHTTPREQUEST (XHR) =====
document.getElementById('loadDataXHR').addEventListener('click', () => {
    const tableBody = document.querySelector('#outputTableXHR tbody');
    tableBody.innerHTML = ''; // Clear previous data

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.coinbase.com/v2/currencies', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            data.data.forEach(currency => {
                const row = `<tr><td>${currency.id}</td><td>${currency.name}</td></tr>`;
                tableBody.innerHTML += row;
            });
        } else {
            console.error('XHR Error:', xhr.statusText);
            tableBody.innerHTML = `<tr><td colspan="2">Error loading data: ${xhr.statusText}</td></tr>`;
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
        tableBody.innerHTML = `<tr><td colspan="2">Request failed</td></tr>`;
    };

    xhr.send();
});

// ===== TASK 5: COMPARING FETCH API & XHR =====
/*
1. **Fetch API**:
   - **Pros**: Modern, promise-based, cleaner syntax, supports async/await.
   - **Cons**: No built-in request cancellation, requires polyfills for older browsers.

2. **XMLHttpRequest (XHR)**:
   - **Pros**: Works in all browsers, supports progress events.
   - **Cons**: Callback-based (less readable), more verbose.

3. **When to Use Which**:
   - Use **Fetch** for modern applications (simpler code).
   - Use **XHR** if you need legacy browser support or request progress tracking.
*/