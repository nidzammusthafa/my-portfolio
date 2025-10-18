import React from "react";
import Section from "./Section";

const ContactForm = () => {
  return (
    <Section id="contact">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center whitespace-nowrap text-accent font-mono">
        Get In Touch
        <span className="block w-full h-px bg-light-navy ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="mb-6 text-light-slate">
            My inbox is always open. Whether you have a question, a project
            idea, or just want to say hi, I&apos;ll do my best to get back to
            you! Let&apos;s build something amazing together.
          </p>
          <div className="space-y-4 text-light-slate">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:nidzam0501@gmail.com"
                className="text-accent hover:underline"
              >
                nidzam0501@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="https://wa.me/6281233638863"
                className="text-accent hover:underline"
              >
                +62 812-3363-8863
              </a>
            </p>
            <p>
              <strong>Location:</strong> Bandung, Indonesia
            </p>
          </div>
          <div className="mt-8">
            <a
              href="mailto:nidzam0501@gmail.com"
              className="inline-block text-accent font-mono text-lg border border-accent rounded px-8 py-4 hover:bg-accent/10 transition-colors duration-300"
            >
              Say Hello
            </a>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.263914254752!2d107.55318436963032!3d-6.936087499566492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ef5fa8b8271d%3A0xa95df9cd7ec77ba!2s3H73%2BHG8%2C%20Gempolsari%2C%20Kec.%20Bandung%20Kulon%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e1!3m2!1sen!2sid!4v1757311885874!5m2!1sen!2sid"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
