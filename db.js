import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";


// const supabase = createClient("https://xbpvzcaibzouvbsajtny.supabase.co", DB_KEY );

function DbController() {
  const [instruments, setInstruments] = useState([]);

  
  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }
}