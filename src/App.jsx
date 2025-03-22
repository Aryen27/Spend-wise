import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const dbKey = import.meta.env.VITE_DB_KEY;
const supabase = createClient("https://xbpvzcaibzouvbsajtny.supabase.co", dbKey);

function App() {
  const [instruments, setInstruments] = useState([]);
  
  useEffect(() => {
      getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("users").select(); //Table name
    console.log(data);
    setInstruments(data);
  }
    return (
      <ul>
        {instruments.map((instrument) => (
          <li key={instrument.name}>{instrument.name}</li>
        ))}
      </ul>
    );
}
export default App
