export const patterns = [
  { path: '/comidas', title: 'Comidas' },
  { path: '/bebidas', title: 'Bebidas' },
  { path: '/explorar', title: 'Explorar' },
  { path: '/explorar/comidas', title: 'Explorar Comidas' },
  { path: '/explorar/bebidas', title: 'Explorar Bebidas' },
  { path: '/explorar/comidas/ingredientes', title: 'Explorar Ingredientes' },
  { path: '/explorar/bebidas/ingredientes', title: 'Explorar Ingredientes' },
  { path: '/explorar/comidas/area', title: 'Explorar Origem' },
  { path: '/perfil', title: 'Perfil' },
  { path: '/receitas-feitas', title: 'Receitas Feitas' },
  { path: '/receitas-favoritas', title: 'Receitas Favoritas' },
];

export const forbiddenPlacesForSearchBar = [
  '/perfil',
  '/receitas-favoritas',
  '/receitas-feitas',
  '/explorar',
  '/explorar/comidas/ingredientes',
  '/explorar/bebidas/ingredientes',
  '/explorar/comidas',
  '/explorar/bebidas',
];
