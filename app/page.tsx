import { Home } from '@/components/Home';
import { PersonJsonLd } from '@/components/JsonLd/PersonJsonLd';
import { createPageMetadata } from '@/core/seo/metadata';

export const metadata = createPageMetadata({
  path: '/',
});

const HomePage = () => {
  return (
    <>
      <PersonJsonLd />
      <Home />
    </>
  );
};

export default HomePage;
