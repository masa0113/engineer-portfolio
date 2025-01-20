import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_DEFAULT_API_KEY!,
});

export async function getCareerHistory() {
  const data = await client.get({
    endpoint: 'career',
  });
  return data.contents;
}

export async function getSkills() {
  const data = await client.get({
    endpoint: 'skill',
  });
  return data.contents;
}

export async function getPR() {
  const data = await client.get({
    endpoint: 'selfpr',
  });
  return data.contents;
}
