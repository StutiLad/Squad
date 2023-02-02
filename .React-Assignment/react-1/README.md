Create an Employee screen with the following functionality. 

 

Note:
1. Please use the functional component to build this screen.
2. Do not use API to display and manage the data. Instead of this, create an empty object and use this object for a list, add, update and delete functionality.

 

1. Design is not important and mandatory. If you are familiar with the Bootstrap structure, then you can use it.

 

2. There should be three different components to form the layout - Header, body(actual screen view), and Footer.

 

3. Employee List - Following fields should be displayed on the listing screen.
First Name
Last Name
Email
Gender
Department
Skills

 

 

By default, the employee list will be displayed. If there are no records available, then a message should be displayed. Data should be displayed from the object that you have created in the app instead of API.

 

4. Add Employee - By clicking on add employee button, the form should be displayed and this form has the following fields.
First Name (Textbox)
Last Name (Textbox)
Email (Textbox)
Phone Number (Textbox)
Gender(Radio) - Male and Female
Department(Dropdown) - PHP, .NET, SEO, Mobile, Admin/HR, Account
Skills(Checkbox) - Programming, Communication, Finance, Recruitment, Optimization, App Development, Frontend Technology, Backend Technology.
About (Textarea)

 


- All the fields are mandatory so please keep the necessary validation for the required value.
- Keep necessary validation for the email and phone number. Email should accept only valid email addresses and phone numbers should accept only numeric values. If not validated, display an error message.
- Successful Submission of the above fields should update the object and submitted details will be added with a new key in the object.
- On successful operation, a notification message should be displayed.

 

5. Edit Employee - By clicking on the edit button, the form should be displayed and this form has the following fields.
First Name (Textbox)
Last Name (Textbox)
Email (Textbox)
Phone Number (Textbox)
Gender(Radio) - Male and Female
Department(Dropdown) - PHP, .NET, SEO, Mobile, Admin/HR, Account
Skills(Checkbox) - Programming, Communication, Finance, Recruitment, Optimization, App Development, Frontend Technology, Backend Technology.
About (Textarea)

 


- All the above fields should be pre-filled with their respective values that we added during the add case.
- All the fields are mandatory so please keep the necessary validation for the required value.
- Keep necessary validation for the email and phone number. Email should accept only valid email addresses and phone numbers should accept only numeric values. If not validated, display an error message.
- Successful Submission of the above fields should update the object and submitted details will be updated in place of old values.
- On successful operation, a notification message should be displayed.

 


6. Delete Employee - By clicking on the delete button, the respective employee should be removed from the object.

 

7. Search - please add a search feature. There will be a search textbox, search button, and reset search button. Search should perform on First name, Last name, and Email.

 

8. Pagination - A maximum of 5 employees should be displayed at once, if there are more than 5 employees then pagination should be displayed below with the next and previous links. By clicking on the next button further 5 employees should display. By default on page load, prev link should be disabled. Similarly, if no further employee page is available, then the next button should be disabled.

 

9. Total count of an employee should display on the screen.