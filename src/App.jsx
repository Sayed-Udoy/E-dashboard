import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  console.log(isOpen)

  return (
    <div className="bg-primary2">
      <div className="container bg-primary1 flex mx-auto">
        <div className={`absolute top-0 transition-all duration-300 ${isOpen ? "left-[0%]" : "left-[-100%]"} md:static`} >
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <Dashboard toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default App;
