# PITS-Frontend-Assignment
# Task 1: Create a Sign-up Form using React.js
- Technology Stack: The application is built using React.js and Sass.
## Form Fields
-Username: Must be at least 3 characters in length and accept only letters, numbers, and these special characters ('-', '_', and '@').
-Full Name: Must be at least 3 characters long and a maximum of 15 characters.
-Mobile Number: Must start with '05' and have a length of 10 numbers.
-Age: Not required but if filled, it must be between 18 and 100.
-Email: Required and must be a valid email address.
-Country: Must have a dropdown list of 5 countries of your choice.
-Password: Must be at least 6 characters in length, at most 24 characters, and contain letters, numbers, and at least one special character.
-Password Confirmation: Must match the password field.

## Form Behavior
When the user clicks the Submit button, if there are validation errors, they should appear under the specific input field.
If all inputs are valid, display a success message and clear all fields.
When the user clicks the Clear button, make all fields empty.

# Task 2: Retrieve Data from an Open-Source API
##API Endpoint
You need to request data from the following open-source API: Universities API

## Display Data
Retrieve data from the API and display it in a table format. The table  shows information from the API response:

-University name
-Country
-Alpha two code
-Number of domains
# #Limitation
-Display only the first 20 records from the API.


