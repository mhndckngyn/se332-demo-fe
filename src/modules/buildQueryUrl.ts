export default function buildQueryUrl(
  baseUrl: string,
  queries: Record<string, string>
) {
  const queryString = Object.entries(queries)
    .filter(([_, value]) => value.trim() !== '')
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');

  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
