// api.js
const API_BASE_URL = 'http://your-django-api-url.com/api/';

export async function fetchItems() {
  const response = await fetch(`${API_BASE_URL}items/`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
}
