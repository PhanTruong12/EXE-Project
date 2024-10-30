const BASE_URL = "https://supmatch.azurewebsites.net/api";

// function to post data
export async function postData(endpoint = '', data = {}) {
  console.log(JSON.stringify(data) );
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors',
    cache: 'no-cache',
    //credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return response.json();
}

export async function getData(endpoint = '') {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    method: 'GET', 
    mode: 'cors',
    cache: 'no-cache',
    //credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer'
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}