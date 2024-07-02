// TODO: api

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

if (!TOKEN) {
  throw new Error("Missing Mapbox API key");
}

export const getReverseGeocoding = async (
  longitude?: number,
  latitude?: number
): Promise<string> => {
  const url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${longitude}&latitude=${latitude}&access_token=${TOKEN}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }

  const data = await response.json();

  if (data.features && data.features.length > 0) {
    return data.features[0].properties.full_address;
  } else {
    return "Address not found";
  }
};
