import { createClient } from "@supabase/supabase-js";

const dbKey = import.meta.env.VITE_DB_KEY;
const supabaseUrl = "https://xbpvzcaibzouvbsajtny.supabase.co";
const supabase = createClient(supabaseUrl, dbKey);

export default supabase;