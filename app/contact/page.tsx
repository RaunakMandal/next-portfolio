import { Contact } from '@/components/Contact';
import { createPageMetadata } from '@/core/seo/metadata';

export const metadata = createPageMetadata({
  title: 'Contact | Raunak Mandal',
  description:
    'Get in touch with Raunak Mandal for hiring inquiries, collaborations, or professional opportunities.',
  path: '/contact',
  keywords: [
    'Contact Raunak Mandal',
    'Hire Senior Software Engineer',
    'Software Engineer contact',
  ],
});

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
