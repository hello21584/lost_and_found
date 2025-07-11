/* ---------- Tab switching ---------- */
document.getElementById('found-tab').addEventListener('click', () => {
  document.getElementById('found-form').classList.add('active');
  document.getElementById('lost-form').classList.remove('active');
  document.getElementById('found-tab').classList.add('active');
  document.getElementById('lost-tab').classList.remove('active');
});

document.getElementById('lost-tab').addEventListener('click', () => {
  document.getElementById('lost-form').classList.add('active');
  document.getElementById('found-form').classList.remove('active');
  document.getElementById('lost-tab').classList.add('active');
  document.getElementById('found-tab').classList.remove('active');
});

/* ---------- Found form submit ---------- */
document.getElementById('foundItemForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const payload = {
    email: foundEmail.value,
    item_name: foundName.value,
    color: foundColor.value,
    brand: foundBrand.value,
    location: foundLocation.value
  };

  const res  = await fetch('/api/found', {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body   : JSON.stringify(payload)
  });

  const data = await res.json();
  alert(data.message || 'Submitted');
  foundItemForm.reset();
});

/* ---------- Lost form submit ---------- */
document.getElementById('lostItemForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const payload = {
    item_name: lostName.value,
    color:    lostColor.value,
    brand:    lostBrand.value
  };

  const res  = await fetch('/api/search', {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body   : JSON.stringify(payload)
  });

  const data = await res.json();
  document.getElementById('searchResults').innerText =
    JSON.stringify(data, null, 2);
  lostItemForm.reset();
});
