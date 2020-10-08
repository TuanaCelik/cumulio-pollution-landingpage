//const Cumulio = require("cumulio");

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
// Function to retrieve the dashboard authorization token from the platform's backend
const getDashboardAuthorizationToken = async (city) => {
  try {
    const response = await fetch(`/authorization${city ? '?city=' + city : ''}`, {});

    // Fetch the JSON result with the Cumul.io Authorization key & token
    const responseData = await response.json();
    return responseData;
  }
  catch (e) {
    // Display errors in the console
    console.error(e);
    return { error: 'Could not retrieve dashboard authorization token.' };
  }
};

// function to load the insight page
const loadInsightsPage = async () => {
  const authorizationToken = await getDashboardAuthorizationToken();
  if (authorizationToken.id && authorizationToken.token) {
    loadDashboard(authorizationToken.id, authorizationToken.token);
  }
}

const reloadDashboard = async (city) => {
  const authorizationToken = await getDashboardAuthorizationToken(city);
  Cumulio.setAuthorization(authorizationToken.id, authorizationToken.token, {dashboardId : dashboardId, container : '#dashboard-container'});
  Cumulio.refreshData();
}
// on page load
window.onload = async () => {
  loadInsightsPage();
}