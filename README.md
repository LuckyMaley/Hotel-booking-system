# Hotel_Booking_System_Java



## Description
This comprehensive management and booking system designed to enhance the experience for both hotel owners and guests. Hotel administrators can manage properties, adjust service fees, and track financial transactions, while hotel owners can add and oversee hotels, set room pricing, offer discounts, monitor bookings, and respond to customer reviews. Guests will be able to search and book hotels, manage their accounts, securely save payment details, and leave reviews after their stay. This system ensures efficient hotel operations, secure transactions, and a seamless booking experience for all users.

## Tools
![Static Badge](https://img.shields.io/badge/VScode-1.97.0%20or%20later-yellow) ![Static Badge](https://img.shields.io/badge/MySQL-v8.0.36%20or%20later-red) ![Static Badge](https://img.shields.io/badge/Eclipse%20IDE-4.33.0%20or%20later-green) ![Static Badge](https://img.shields.io/badge/Springboot%20-3.3.4%20or%20later-orange)

## Installation
The React front end application depends on the java springboot rest api and mysql instance. The Springboot application and Mysql instance have to be running in order to be able to use the front end.

### Steps:
1. Go to the documents folder and then clone the project there (you can use git bash or any cmd):
```
cd Documents
```
```
git clone https://github.com/LuckyMaley/Hotel-booking-system.git
```

2. Open MySql Workbench and Open you instance

3. Open Eclipse IDE >> File >> Open Projects from File System >> Click Directory and select project. Once done click finish.

4. Click the dropdown of your project folder and go to src >> main >> resources >> application.properties and update the datasource url (if necessary else leave as is), username, and password
```
spring.datasource.url=jdbc:mysql://localhost:3306/hotel_booking_system?useSSL=false&serverTimezone=UTC&createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password="Your password"
```

5. Right click the project folder on Package Explorer

6. Go to Run As >> Maven Build >> Enter Goal as "clean install" >> Click on Apply and Run

7. Once finished, go to right click the project folder again, go to Run As >> Springboot App

8. Go to your browser and type the link:
```
http://localhost:8081/swagger-ui/index.html
```

9. You should now be able to access the endpoints of the Springboot Api in Swagger.

10. Open the [React front end web application](/react-hotel-booking-system) using VSCode. You can use the cmd if you like. Just right click the project folder and open in terminal and type the following:
```
code .
```

11. Once opened, go to the toolbar View >> Terminal >> New Terminal and type this:
```
npm install
```

12. 
**Note**: The Rest API must always be running inorder to be able to properly use the front-end application.

**Note**: The Rest API link address might differ from what is in the [Global Constants typescript file](https://github.com/LuckyMaley/Angular-Full-Stack-System/blob/main/LLM-eCommerce-Ang/src/app/global-constants.ts) so you need to change that link address to make the Rest API's link address so that the front end can communicate with the api correctly

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.
