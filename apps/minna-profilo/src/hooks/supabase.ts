import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://nmgveuqjgoqemnlhgznr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZ3ZldXFqZ29xZW1ubGhnem5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTE0NTQsImV4cCI6MjA1ODU2NzQ1NH0.S5K4AyUoJ2PYR7PlEILJvtrvDvaMFx7oWPIwg4glADY';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;