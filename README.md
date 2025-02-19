# WCE_ACE_Hackathon

## Team Members

- **Parth Kulkarni** (Hackathon Leader)
- **Samarth Bolaj**
- **Varun Balbudhe**

## Steps to Run the Project

### Backend

1. Navigate to the **Backend** directory:

   ```bash
   cd Backend
   ```

2. Install dependencies (only once at the beginning or whenever you install a new package):

   ```bash
   npm i
   ```

3. Run the backend using **nodemon**:
   ```bash
   nodemon app.js
   ```

---

### Frontend

1. Navigate to the **Frontend** directory:

   ```bash
   cd Frontend
   ```

2. Install dependencies (only once at the beginning or whenever you install a new package):

   ```bash
   npm i
   ```

3. Run the frontend using:
   ```bash
   npm run dev
   ```

# Project Update - 2025-02-20

## Features Implemented

### 1. **User Pages:**

- **Homepage**: Displayed general content for all users.
- **Profile Page**: Show user-specific data once logged in.
- **Register Page**: Allows new users to sign up.
- **Login Page**: User authentication for existing accounts.
- **Logout**: Option for users to log out and end their session.

### 2. **Frontend & Backend Integration:**

- Connected frontend components with backend API endpoints to enable full functionality for user authentication.

### 3. **Authentication and Authorization:**

- **Public and Protected Routes**: Implemented routes that are either accessible to all users or restricted to authenticated users.
- **Auth Context**: Set up context for managing authentication state (e.g., storing the user’s login status and token).

## Database Setup

### 1. **Prisma Integration:**

- Ensure Prisma ORM is connected to the database and properly configured.

### 2. **Run Database Commands:**

- **Generate Prisma Client**:
  Run the following command to generate Prisma client:
  ```bash
  npm generate prisma
  ```
- **Database Update**:
  Ensure the database is up-to-date:
  ```bash
  npm install
  ```

## Next Steps

- Verify that authentication flow works as expected.
- Test protected routes to ensure only authenticated users can access them.
- Run migrations (if necessary) using:
  ```bash
  npx prisma migrate dev   # Development mode
  npx prisma migrate deploy   # Deploy to production
  ```
