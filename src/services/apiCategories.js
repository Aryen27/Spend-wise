import supabase from "./supabase.js"

export async function getCategories(){
  const { data, error } = await supabase.from("categories").select("*");
  if (error) {
    console.log(error);
  }

  return data;
}

export async function addCategory(cat_name) {
  const { data: extData } = await supabase.from("categories").select("*").eq('cname', cat_name);
  console.log(extData);
  // Check if the given category exists in table
  if (extData == undefined) {
    throw new Error("Category already exists");
  }
  const { data, error } = await supabase.from('categories').insert([{ cname: cat_name }]);

  if (error) {
    console.log(error);
  }
  console.log("Added category");
  console.log(data);
  return data;
}

export async function deleteCategory(cat_name) {
  const { data: extData } = await supabase.from("categories").select("*").eq('cname', cat_name);
  if (!extData[0]) {
    throw new Error('The following category doesn\'t exist!');
  }
  const response = await supabase.from("categories").delete().eq('cname', cat_name);
  return response;
}