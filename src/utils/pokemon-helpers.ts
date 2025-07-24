import { Pokemon, PokemonType, PokemonSearchFilters } from '@/types';

// 名前でポケモンを検索
export function searchPokemonByName(pokemon: Pokemon[], query: string): Pokemon[] {
  if (!query.trim()) return pokemon;
  
  const normalizedQuery = query.toLowerCase().trim();
  return pokemon.filter(p => 
    p.name.toLowerCase().includes(normalizedQuery)
  );
}

// タイプでポケモンをフィルタリング
export function filterPokemonByType(pokemon: Pokemon[], types: PokemonType[]): Pokemon[] {
  if (types.length === 0) return pokemon;
  
  return pokemon.filter(p => 
    types.some(type => p.types.includes(type))
  );
}

// メガ進化でフィルタリング
export function filterPokemonByMega(pokemon: Pokemon[], isMegaEvolution: boolean): Pokemon[] {
  return pokemon.filter(p => p.isMegaEvolution === isMegaEvolution);
}

// 複合検索フィルター
export function searchAndFilterPokemon(pokemon: Pokemon[], filters: PokemonSearchFilters): Pokemon[] {
  let result = pokemon;

  if (filters.name) {
    result = searchPokemonByName(result, filters.name);
  }

  if (filters.types && filters.types.length > 0) {
    result = filterPokemonByType(result, filters.types);
  }

  if (filters.isMegaEvolution !== undefined) {
    result = filterPokemonByMega(result, filters.isMegaEvolution);
  }

  return result;
}

// ポケモン番号でソート
export function sortPokemonByNumber(pokemon: Pokemon[]): Pokemon[] {
  return [...pokemon].sort((a, b) => a.no - b.no);
}

// ポケモン名でソート（50音順）
export function sortPokemonByName(pokemon: Pokemon[]): Pokemon[] {
  return [...pokemon].sort((a, b) => a.name.localeCompare(b.name, 'ja'));
}