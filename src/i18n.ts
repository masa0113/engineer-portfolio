import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => ({
  messages: {},
  timeZone: 'Asia/Tokyo',
}));
