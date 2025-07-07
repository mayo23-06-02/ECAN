import ContactPageHome from "@/components/ContactUs/ContactPageHome";
import DonateHome from "@/components/LandingPage/DonateSection/DonateHome";

export default function Contact() {
  return (
    <div className="">
        <ContactPageHome />
         <div className='py-8 px-4 md:px-8 lg:px-16 xl:px-32'>
            <DonateHome showImage={false} />
        </div>
    </div>
  );
}
