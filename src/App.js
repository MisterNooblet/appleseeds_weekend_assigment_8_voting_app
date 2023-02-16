import React, { useState } from "react";
import data from "./data";
import campaign from "./campaign"
import { Login, Voting, Admin } from "./pages";

localStorage.setItem('users', JSON.stringify(data))
localStorage.setItem('parties', JSON.stringify(campaign))
function App() {
  const [pageToDisplay, setPageToDisplay] = useState('Login')
  const pageManager = (page) => {
    setPageToDisplay(page)
  }

  switch (pageToDisplay) {
    case 'Login':
      return <Login pageManager={pageManager} />
      break;
    case 'Voting':
      return <Voting pageManager={pageManager} />
      break;
    case 'Admin':
      return <Admin pageManager={pageManager} />
      break;
    default:
      return <Login pageManager={pageManager} />
      break;
  }
}

export default App;
