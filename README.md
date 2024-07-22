
![PropertyFinder Logo](/public/logo.png)

# 🏠 PropertyFinder

PropertyFinder is a Next.js-based real estate platform that allows users to browse and search for properties.

## 📋 Table of Contents
- [Setup](#setup)
- [Features](#features)
- [Technologies](#technologies)
- [License](#license)

## 🚀 Setup

1. Clone the repository:
```
  git clone [repository-url]
  npm install
```

2. Set up environment variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
RAPID_API_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=[/sign-in]
NEXT_PUBLIC_CLERK_SIGN_UP_URL=[/sign-up]
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=[/listings]
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=[/listings]
```

3. Run the development server:
```
npm run dev
```
Open http://localhost:3000 in your browser to view the app.  

4. Key Features and Technologies:

* Authentication: Implemented using Clerk for secure user management.
* UI Components: Utilized shadcn for creating the mobile hamburger menu and other UI elements. 
* API Integration: RapidAPI is used to fetch real estate data. The API key is stored securely in the .env file.  
* Animations: Framer Motion is employed to add smooth animations throughout the app.  
* Responsive Design: The app is fully responsive and works well on desktop and mobile devices.  
* Property Search: Users can search for properties using various criteria, including property name, location, and price range.
   
### Additional Notes  
Ensure you have Node.js and npm installed on your system before running the project.  
The project uses Next.js 14 with the new App Router.  
For production deployment, follow Next.js deployment guidelines or use platforms like Vercel for easy setup.  
  

url: https://real-estate-app-xi-one.vercel.app/
