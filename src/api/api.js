import supabase from '../supabaseClient';

export async function fetchPlayers() {
  const { data, error } = await supabase
    .from('players')
    .select('*')
    .order('rank', { ascending: true })
    .limit(100);

  if (error) {
    console.error('Error fetching players:', error);
    return [];
  }

  console.log('Fetched players:', data);
  return data;
}