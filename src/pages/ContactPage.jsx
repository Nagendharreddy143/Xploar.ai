import useAos from "../hooks/useAos";
import ContactForm from "../components/contact/ContactForm";
import CtaSection from "../components/home/CtaSection";
import ContactPageSEO from "../components/seo/ContactPageSEO";

const ContactPage = ({ onOpenModal }) => {
  useAos();

  return (
    <>
      <ContactPageSEO />
      <ContactForm />
      <CtaSection onOpenModal={onOpenModal} />
    </>
  );
};

export default ContactPage;
