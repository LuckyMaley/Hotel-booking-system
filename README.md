# Hotel_Booking_System_Java



## Description
This comprehensive management and booking system designed to enhance the experience for both hotel owners and guests. Hotel administrators can manage properties, adjust service fees, and track financial transactions, while hotel owners can add and oversee hotels, set room pricing, offer discounts, monitor bookings, and respond to customer reviews. Guests will be able to search and book hotels, manage their accounts, securely save payment details, and leave reviews after their stay. This system ensures efficient hotel operations, secure transactions, and a seamless booking experience for all users.

## Tools
![Static Badge](https://img.shields.io/badge/VScode-1.97.0%20or%20later-yellow) ![Static Badge](https://img.shields.io/badge/MySQL-v8.0.36%20or%20later-red) ![Static Badge](https://img.shields.io/badge/Eclipse%20IDE-4.33.0%20or%20later-green) ![Static Badge](https://img.shields.io/badge/Springboot%20-3.3.4%20or%20later-orange)

## Branching Strategy

A structured branching strategy must be followed to keep the codebase organized:

- **main**: Stable, production-ready code.
- **dev**: Ongoing development. Feature branches are merged here first

- **feature/**: New features.
  - Example: `feature/add-user-authentication`
- **bugfix/**: Bug fixes.
  - Example: `bugfix/fix-app-response`
- **chore/**: Maintenance tasks, documentation,or configurations.
  - Example: `chore/add-read-me`
- **Hotfix branches**: Urgent fixes to `main`.
   - Example: `hotfix/critical-bug-in-production`

### Notes:
- Use **kebab-case** (lowercase with hyphens) for branch names (e.g., `feature/react-make-payment`).
- Branch names should be **descriptive** but concise.
- Avoid spaces, uppercase letters, or special characters.

## Development Workflow

1. **Create a New Branch**:
   ```bash
   git checkout -b feature/add-user-authentication
   ```

2. **Make Changes**:
   ```bash
   git add .
   git commit -m "Implement user authentication feature"
   ```

3. **Push Your Branch**:
   ```bash
   git push origin feature/add-user-authentication
   ```

4. **Sync with the `dev` Branch**:
   Before creating a merge request, ensure your branch is up-to-date with the latest changes from the `dev` branch:
   ```bash
   git pull origin dev
   ```
   If there are any merge conflicts, resolve them in your branch locally. Once resolved, commit the changes and push them back to your branch:
   
   ```bash
   git push origin feature/add-user-authentication
   ```

5. **Create a Merge Request**:
   - Open a pull request on GitHub targeting `dev` for code review.

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

12. Run the application by typing this:
```
npm run dev
```

13. Go to the Api on [WebConfig file](/hotel-booking-system/src/main/java/com/hotel/booking/system/api/security/config/WebConfig.java) to configure the CORS, by adding the React front end link.
```
.allowedOrigins("http://localhost:8080", "add front-end link here")
```

14. Once that is done you can use the front end application freely.

**Note**: The Rest API must always be running inorder to be able to properly use the front-end application.

**Note**: If the Rest API link address is different from what is in the [Api Service javascript file](/react-hotel-booking-system/src/components/services/ApiService.js), you need to change that front end link address to the Rest API's link address so that the front end can communicate with the api correctly.

**Note**: The front end application url link should be included in the CORS of the API to be able to use it properly without any issues.

## Visuals
![Screenshot 2025-03-03 193636](https://github.com/user-attachments/assets/ce77bcda-8178-488b-804d-f5f805faf571)

![Screenshot 2025-03-03 192111](https://github.com/user-attachments/assets/d92b3b51-837c-4f36-a018-9b1bdaa107ef)

![Screenshot 2025-03-03 192126](https://github.com/user-attachments/assets/90b3eec0-598c-40db-9101-73f910f0af12)

![Screenshot 2025-03-03 192150](https://github.com/user-attachments/assets/83907176-71db-42b4-8c0e-3d87187d2977)

![Screenshot 2025-03-03 192255](https://github.com/user-attachments/assets/200efc8e-57d0-4e70-b9b8-339474c99459)

![Screenshot 2025-03-03 192312](https://github.com/user-attachments/assets/3f12d6d1-e82e-4271-a0e9-3792117afa64)

![Screenshot 2025-03-03 192326](https://github.com/user-attachments/assets/2859eef5-6730-4abe-9a75-1659f0f1e03e)

![Screenshot 2025-03-03 192351](https://github.com/user-attachments/assets/9cfad7a1-a826-4b71-9c42-0f3013e69185)

![Screenshot 2025-03-03 192411](https://github.com/user-attachments/assets/32fa191c-43a5-40bc-933a-482137231449)

![Screenshot 2025-03-03 192429](https://github.com/user-attachments/assets/9cffe2ed-e30f-4c9f-9c91-d644a006037a)

![Screenshot 2025-03-03 192457](https://github.com/user-attachments/assets/726ce262-daf7-4d90-90c9-a429fc7bcdef)

![Screenshot 2025-03-03 192615](https://github.com/user-attachments/assets/90b7b199-29e8-40ef-8207-cf075488ce4d)

![Screenshot 2025-03-03 192652](https://github.com/user-attachments/assets/8ee6717d-05b9-498d-89f5-91b8370d2e24)

![Screenshot 2025-03-03 192733](https://github.com/user-attachments/assets/330988ac-ed29-4c4e-b4d9-7ff1c5c9cd4d)

![Screenshot 2025-03-03 192801](https://github.com/user-attachments/assets/bc10e00d-9b53-46e7-bd8a-a735829673aa)

![Screenshot 2025-03-03 192820](https://github.com/user-attachments/assets/81242faa-192a-4376-96d3-1c1030068bfc)

![Screenshot 2025-03-03 192845](https://github.com/user-attachments/assets/13b4da22-af06-453e-ace3-82e527c90fdd)

![Screenshot 2025-03-03 192907](https://github.com/user-attachments/assets/c740747e-7375-4e96-b417-a8d044c1a67a)

![Screenshot 2025-03-03 192920](https://github.com/user-attachments/assets/676a918c-bfda-4250-bda6-3618ef4b70e3)

![Screenshot 2025-03-03 192934](https://github.com/user-attachments/assets/92afe32e-aeed-42f5-97e6-7f3eae84d75b)

![Screenshot 2025-03-03 192949](https://github.com/user-attachments/assets/280974b2-e1e9-4aab-99ab-e143a95eefa7)
