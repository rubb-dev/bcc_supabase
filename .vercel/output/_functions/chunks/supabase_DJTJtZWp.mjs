import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://yrmreubgydfueglcwumi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlybXJldWJneWRmdWVnbGN3dW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MzE4OTgsImV4cCI6MjA3ODUwNzg5OH0.P7EoSS602QVfs8Bf4ap2haksid4tchs5zj6hZ0dLmhg"
);

export { supabase as s };
