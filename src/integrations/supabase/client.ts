// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qyiyvvwcwaguioljzani.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5aXl2dndjd2FndWlvbGp6YW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzODc2MzAsImV4cCI6MjA2MTk2MzYzMH0.P2eVh713gSNY9fmKbh0OOvYSIf-_xrp-xB9q5Q5J-pM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);