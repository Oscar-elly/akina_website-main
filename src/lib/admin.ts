import { supabase } from './supabase';

/**
 * Create a new admin user programmatically.
 * This function creates a user in Supabase Auth and inserts a record in the admins table.
 * 
 * @param email - Admin user's email
 * @param password - Admin user's password
 * @param role - Role of the user, e.g., 'admin'
 * @returns The created user or error
 */
export async function createAdminUser(email: string, password: string, role: string = 'admin') {
  // Create user in Supabase Auth
  const { data, error: signUpError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (signUpError) {
    return { error: signUpError };
  }

  const user = data.user;

  if (!user) {
    return { error: new Error('User creation failed') };
  }

  // Insert into admins table
  const { error: insertError } = await supabase
    .from('admins')
    .insert({
      user_id: user.id,
      email: user.email,
      role,
      created_at: new Date().toISOString(),
    });

  if (insertError) {
    return { error: insertError };
  }

  return { user };
}
