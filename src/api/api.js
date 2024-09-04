const base_url = process.env.VUE_APP_API_URL;

export async function apiGet(param) {
  const req = await fetch(`${base_url}${param}`);

  return req;
}
