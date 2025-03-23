import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";



 const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="bg-primary2" >
    <div className="container bg-primary1 flex mx-auto">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Dashboard />
    </div>
    </div>
  );
};

export default App;