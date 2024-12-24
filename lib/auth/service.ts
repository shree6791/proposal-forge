import { supabase } from "../supabase";

export class AuthService {
  static async signOut() {
    return await supabase.auth.signOut();
  }
  
  // Add other auth-related methods here
} 