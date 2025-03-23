import { createContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const dbKey = import.meta.env.VITE_DB_KEY;
const supabaseURL = createClient("https://xbpvzcaibzouvbsajtny.supabaseURL.co", dbKey);

const DBContext = createContext();

function DBProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await supabaseURL.from("users").select(); //Table name
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  
  return (
    <DBContext.Provider value={
    users
  }>
      {children}
    </DBContext.Provider>
  )
}

export {DBProvider};

