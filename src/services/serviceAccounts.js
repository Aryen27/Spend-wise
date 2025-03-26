import supabase from "./supabase.js"

export async function getAccounts(){
  const { data, error } = await supabase.from("accounts").select("*");
  if (error) {
    console.log(error);
  }
  return data;
}

export async function addAccount(aname, accType, bank_name, amount) {
  const { data: extData } = await supabase.from("accounts").select().match({ acc_name: aname, type: accType, bname: bank_name }); //.match() is used instead of multiple queries in supabase
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

export async function deleteAccount(aname, accType, bank_name) {
  const { data: extData } = await supabase.from("accounts").select().match({ acc_name: aname, type: accType, bname: bank_name });
  console.log(extData[0]);
  if (!extData[0]) {
    throw new Error("Account doesn\'t exist!");
  }

  const response = await supabase.from("accounts").delete().match({ acc_name: aname, type: accType, bname: bank_name });
  console.log(response);
  
  return {status:204, message: "Account deleted", data: response};
}

export async function updateAccount(acc_id, aname, accType, bank_name, amount) {
  const { response } = await supabase.from("accounts").update({ acc_name: aname, type: accType, bname: bank_name, balance: amount }).eq('account_id', acc_id);
  console.log(response);

  return { message: response };
}