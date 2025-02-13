import React from 'react'
import ContactForm from './contact-form';


const ContactPage = () => {
  return (
    <>
      <main className="flex flex-wrap m-20 mt-36">
        <div className="w-[50%]">
          <h1 className="font-beni uppercase text-[425px] leading-[0.7]">
            Let&rsquo;s
            <br />
            link up
          </h1>
          <p className="font-degular font-semibold ml-3 text-2xl uppercase leading-none">
            Initiate a project, schedule a task, <br /> or simply reach out to
            say hello!
          </p>
        </div>
        <div className="w-[50%] font-degular font-normal text-3xl px-24 pr-44 leading-none">
          <p>
            Since our inception, we have consistently upheld a commitment to
            blending innovation with collaboration. If you are ready to embark
            on a journey of technology-driven creativity and seamless
            partnership, begin your experience with HELLS BELLS.
          </p>
          <br />
          <p>
            Should you have any inquiries or wish to learn more, we are here to
            assist in bringing your vision to life.
          </p>
        </div>
      </main>
      <ContactForm/>
    </>
  );
}

export default ContactPage