import HomeWrapper from '@/components/top/HomeWrapper';
import { getPR } from '@/lib/cms';

export default function Home() {
  getPR().then((v) => console.log(v));
  return <HomeWrapper />;
}
