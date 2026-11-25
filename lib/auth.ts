
import { supabase } from "./supabase";

export async function registerUser(
  email: string,
  password: string,
  username: string,
  handle: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        handle: handle.toLowerCase()
      }
    }
  });

  if (error) throw error;

  return data;
}

export async function loginUser(
  email: string,
  password: string
) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password
    });

  if (error) throw error;

  return data;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}
