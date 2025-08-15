import useAos from "../hooks/useAos";
import ContactForm from "../components/contact/ContactForm";
import CtaSection from "../components/home/CtaSection";

const ContactPage = ({ onOpenModal }) => {
  useAos();

  return (
    <>
      <ContactForm />
      <CtaSection onOpenModal={onOpenModal} />
    </>
  );
};

export default ContactPage;
