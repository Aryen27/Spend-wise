import supabase from "./supabase.js"

export async function getAccounts(){
  const { data, error } = await supabase.from("accounts").select("*");
  if (error) {
    console.log(error);
  }
  return data;
}

export async function addAccount(aname, accType, bank_name, amount) {
  const { data: extData } = await supabase.from("accounts").select().match({ acc_name: aname, type: accType, bname: bank_name });
  if (extData[0]) {
    throw new Error("Account already exists");
  }
  const { error } = await supabase.from("accounts").insert({ acc_name: aname, type: accType, bname: bank_name, balance: amount });
  console.log(error);
  if (error) {
    throw new Error("There was trouble processing your request");
  }
  return {status:200, message: "Account added sucessfully"};
}   