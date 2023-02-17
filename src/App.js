import React, { useState } from "react";
import data from "./data/data";
import campaign from "./data/campaign"
import { Login, Voting, Admin } from "./pages";
import LSM from "./utils/LocalStorageManager";

LSM.push('users', data)
LSM.push('parties', campaign)
localStorage.setItem('totalVotes', 0)
function App() {
  const [pageToDisplay, setPageToDisplay] = useState('Login')
  const pageManager = (page) => {
    setPageToDisplay(page)
  }
  if (pageToDisplay === 'Login') {
    return <Login pageManager={pageManager} />
  } else if (pageToDisplay === 'Voting') {
    return <Voting pageManager={pageManager} />
  } else if (pageToDisplay === 'Admin') {
    return <Admin pageManager={pageManager} />
  } else {
    return <Login pageManager={pageManager} />
  }
}

export default App;
