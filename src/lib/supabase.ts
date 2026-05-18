import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.SUPABASE_URL;
const key = import.meta.env.SUPABASE_SECRET_KEY;

if (!url || !key) {
  throw new Error('SUPABASE_URL and SUPABASE_SECRET_KEY must be set in .env');
}

export const supabase = createClient(url, key);

export interface DocCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string;
  sort_order: number;
}

export interface DocPage {
  id: string;
  category_id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  status: 'draft' | 'published';
  sort_order: number;
  updated_at: string;
}

export async function fetchCategories(): Promise<DocCategory[]> {
  const { data, error } = await supabase
    .from('doc_categories')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export async function fetchPublishedPages(): Promise<DocPage[]> {
  const { data, error } = await supabase
    .from('doc_pages')
    .select('*')
    .eq('status', 'published')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return data ?? [];
}
