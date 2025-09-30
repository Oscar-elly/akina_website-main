import { adminHelpers } from './api';

/**
 * Create a new admin user programmatically.
 * This function creates a user via backend API.
 * 
 * @param email - Admin user's email
 * @param password - Admin user's password
 * @param role - Role of the user, e.g., 'admin'
 * @returns The created user or error
 */
export async function createAdminUser(email: string, password: string, role: string = 'admin') {
  try {
    const data = await adminHelpers.createAdmin(email, password, role);
    return { user: data.user };
  } catch (error: any) {
    return { error };
  }
}

