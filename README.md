# Lead Delivery System

## Express API on Firebase Hosting - Cloud Functions GCP

This API is designed to manage leads and buyers, hosted on Google Cloud Platform (GCP) using Firebase Cloud Functions. The database backing this API is MongoDB.

## Endpoints

![Postman API test](https://raw.githubusercontent.com/edilma/leads-api/main/public/postman_lds_screenshots.png)

![Postman Local Leads End Point](https://github.com/edilma/leads-api/blob/main/public/postman_lds_local_leads.png?raw=true)

### Test Endpoint

- **Endpoint**: `/test`
- **Method**: `GET`
- **Description**: Tests if the API is running and returns a confirmation message.

### Leads

1. **Get All Leads**

   - **Endpoint**: `/leads`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all leads.

2. **Add a Lead**

   - **Endpoint**: `/leads`
   - **Method**: `POST`
   - **Description**: Adds a new lead to the database.

3. **Get Leads By Location**
   - **Endpoint**: `/leads/:type`
   - **Method**: `GET`
   - **Description**: Retrieves leads by a specific location/type.

### Buyers

1. **Get All Buyers**

   - **Endpoint**: `/buyers`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all buyers.

2. **Add a Buyer**

   - **Endpoint**: `/buyers`
   - **Method**: `POST`
   - **Description**: Adds a new buyer to the database.

3. **Login Buyer**

   - **Endpoint**: `/login`
   - **Method**: `POST`
   - **Description**: Authenticates and logs in a buyer.

4. **Get Buyers By Request/Location**
   - **Endpoint**: `/buyers/:type`
   - **Method**: `GET`
   - **Description**: Retrieves buyers based on a specific request or location.

## Setup and Installation

### Prerequisites

- Google Cloud Platform (GCP) account.
- Firebase CLI installed and configured with appropriate permissions and Spark plan.
- MongoDB instance running and accessible.

### Deployment

Instructions on how to deploy this Cloud Function on Firebase will be necessary. (You can provide the steps here.)

- Create a new folder for the API and initialize Firebase hosting and functions
- Install Express and CORS
- Create the Express app and sample route (like my /test)
- Enable ECMAScripts modules in package.json
- Redirect all request to app functions
- When ready run firebase deploy

---

## Frontend Repository

For a complete view and interaction with our project, please also check out the frontend part of this application. The frontend is built with ReactJS and integrates seamlessly with our backend, providing a rich and interactive user experience.

👉 Visit the frontend repository here: [GitHub - Lead FrontEnd](https://github.com/edilma/lead-frontend)

In the frontend repository, you'll find all the necessary instructions to set up and run the frontend locally on your machine. This includes steps for installation, configuration, and how to connect it with this backend for full functionality.

### Capture leads Form

![Lead capture form](https://raw.githubusercontent.com/edilma/leads-api/main/public/lead_collecting_form.png)

### Buyer leads page

![Buyers List of Leads](https://github.com/edilma/leads-api/blob/main/public/lead_buyer_display.png?raw=true)
