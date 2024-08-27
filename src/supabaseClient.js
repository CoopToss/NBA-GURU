import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xpuzkbnpucjtjmoyxunr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwdXprYm5wdWNqdGptb3l4dW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMDcyMDksImV4cCI6MjAzMzg4MzIwOX0.152l7stVBYbLlf8QOCGaTQbp66DfVBFq-jHMKtCFiWE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
