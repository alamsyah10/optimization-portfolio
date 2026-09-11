export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.replace(/^\//, '');
  return cleanPath ? `${base}${cleanPath}` : base;
}
