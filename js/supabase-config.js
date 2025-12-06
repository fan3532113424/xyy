// supabase-config.js
const SUPABASE_URL = 'https://sgwbztuizxowiacpwzmy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnd2J6dHVpenhvd2lhY3B3em15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMzIyMDYsImV4cCI6MjA3OTkwODIwNn0.js6fUBJ9FGRMkVgp80Q-8D6hX-xXbr29rWKyJgOA9b4';

// 创建 Supabase 客户端
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('Supabase 配置加载完成');