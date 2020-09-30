// dashboard configuration for integration
const dashboardId = 'e830af8d-bf1d-4918-963e-884b6c0fc569';

const dashboardOptions = {
  dashboardId: dashboardId,
  container: '#dashboard-container',
  loader: {
    background: '#EEF3F6',
    spinnerColor: '#004CB7',
    spinnerBackground: '#DCDCDC',
    fontColor: '#000000'
  }
}

// Function to add the dashboard to the page using Cumul.io embed
const loadDashboard = (key, token) => {
  // use tokens if available
  if (key && token) {
    dashboardOptions.key = key;
    dashboardOptions.token = token;
  }
  // add the dashboard to the #dashboard-container element
  Cumulio.addDashboard(dashboardOptions);
}

// function to load the insight page
const loadInsightsPage = async () => {
  const response = await fetch('/authorization', {});
  const responseData = await response.json();
  console.log(responseData.CUMULIO_API_KEY);
  toggleMenu(false);
  if (responseData.CUMULIO_API_KEY && responseData.CUMULIO_API_TOKEN) {
    loadDashboard(responseData.CUMULIO_API_KEY, responseData.CUMULIO_API_TOKEN);
  }
}

const toggleMenu = (boolean) => {
  if (boolean) {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('open');
  }
  else {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
  }
}

// on page load
window.onload = async () => {
  console.log("Got to window load");
  loadInsightsPage();
}