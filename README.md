# 🚚 Violations Page
Internship task (OPENPORT)

At Openport, pings are generated for violations of the following types:

1. Harsh Braking
2. Overspeeding
3. Multiple Violations
4. Nighttime Driving
5. Continuous Violations

This single-page application:

- Retrieves violation records from the database.
- Displays them in a paginated table with configurable records per page.
- Includes filters by violation type and date range.
- Includes a search function to search by vehicle number.
- Contains a functional navbar (currently minimal due to single-page scope).

## ✨ Features
- CRUD-safe retrieval of violations data.
- Pagination for efficient data handling.
- Filtering:
    1. By violation type.
    2. By date range.
- Search by vehicle number.
- Responsive table UI for quick reference and review.
- Functional navbar for future extensibility.

## 🛠️ Tech Stack
| **Layer** | **Technology** |
| --------- | -------------- |
| Frontend  | React          |
| Backend   | NestJS         |
| Database  | MySQL          |

## 🚀 Installation 

1️. Clone the repository:
```bash
 git clone https://github.com/SFizzaR/ViolationsPage
```
2. Install dependencies:
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```
3. Configure database:
    - Ensure MySQL is running.
    - Create a violations table with appropriate columns (id, vehicleNum, violationType, violationNum, dateTime, latitude, longitude).
    - Update your environment variables in .env (database credentials).
4. Run backend
```bash
npm run start:dev
```
5. Run frontend
```bash
npm start
```
## Screenshot
![image](https://github.com/user-attachments/assets/41d9c3a1-2f9e-4c74-88de-3c29153631af)

## Contributing 
Contributions are welcome! If you'd like to help, fork the repo, create a new branch, and submit a pull request.

