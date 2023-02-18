# AppleSeeds Weekend Assigment 8 - ReactJS Voting Application

This web app mocks a voting campaign and lets a user register/login and vote for a chosen party. After the vote has been made, the user is asked to confirm the vote and log out or realocate their vote.

The project was built in React and uses mockdata located in src/data as initial data. Stores it in localStorage using LocalStoraManager located in src/utils and works with localstorage throughout the whole experience. Please note, the data resets at refresh to its initial state.

## Demo

https://ar-voting-app.netlify.app/

## Features

- Registration and login.
- Admin panel providing campaign statistics
- LocalStorageManager(LSM) does all operations related to managing application data.

## Dependencies

`react-icons`

## Project Development Roadmap

### Functionality:

- Basic structure of the application (Folders,Utilities,Pages)
- Pushing data to localStorage
- Basic user login and page switch
- Basic voting page with vote functionality
- A more complex login verification also checking if the user has already voted
- Data preservation on user log-out
- Admin page with statistics
- A sign up option with checks and conditions as well

### Design:

- Basic styling the mobile first way
- Advanced styling with css.modules
- Final styling

### Performance:

- LocalStorageManager to control all data related operations
- Dividing global pattern's to global components (buttons / modals)

### User Experience:

- Make application responsive for big screen devices

### Documentation:

- Add readme to the repository

## Lessons Learned

- Building a react folder structure which is easy to manage and go through

- Various login/signup checks vs user database

- The importance and comfortability of recycling small components across multiple sections of the app

## Authors

- [@MisterNooblet](https://www.github.com/MisterNooblet)

## 🚀 About Me

I'm a full stack development student.

## Getting Started

To get started with the project, follow these steps:

Clone the repository:

```bash
git clone https://github.com/MisterNooblet/appleseeds_weekend_assigment_8_voting_app.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The app will be served at http://localhost:3000/.

## PS

Feel free to use the code and don't forget to Star ⭐ the repository.
