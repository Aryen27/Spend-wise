import { createContext, useState, useEffect, useContext } from "react";
import supabase from "./supabase";

const DBContext = createContext(null);

function UserProvider({ children }) {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await supabase.from("users").select("*"); //Table name
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

export {UserProvider, useUsers};

