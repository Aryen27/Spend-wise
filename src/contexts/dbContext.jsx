import { createContext, useState, useEffect, useContext } from "react";
import { createClient } from "@supabase/supabase-js";

const dbKey = import.meta.env.VITE_DB_KEY;
const supabaseUrl = "https://xbpvzcaibzouvbsajtny.supabase.co";
const supabase = createClient(supabaseUrl, dbKey);

const DBContext = createContext(null);

function DBProvider({ children }) {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await supabase.from("users").select(); //Table name
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();
  }, []);

  
  return (
    <DBContext.Provider value={{ users }}>
      {children}
    </DBContext.Provider>
  )
}

function useUsers() {
  const context = useContext(DBContext);
  console.log(context);
  if (!context)
    throw new Error('useUsers used outside the provider');
  return context;
}

export {DBProvider, useUsers};

