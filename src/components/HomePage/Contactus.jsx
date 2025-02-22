import { Mail, MapPinHouse, PhoneCall } from "lucide-react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jaj2gr2", 
        "template_oabaojm", 
        formRef.current,
        "So4G5NE49PJeSK3-B" 
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row py-16 items-center md:items-start gap-8 px-4 md:px-16">
        <div className="w-full md:w-1/2 rounded-md py-14">
          <h1 className="text-3xl font-semibold py-5 underline">
            Partner with Us Today
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-lg">
            Bidigreen Ghana Limited invites you to be part of our journey toward
            a greener future. Whether you are a business looking for sustainable
            charcoal solutions or an advocate for environmental change, we are
            here to collaborate and grow together. Contact us today to learn
            more about our products, services, and impact. Together, let’s turn
            waste into wealth and light up the world sustainably.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="px-4 md:px-14 py-4">
            <h1 className="font-bold text-2xl md:text-3xl py-2">Get in touch</h1>
            <p>Send us a message.</p>
          </div>

          <div className="px-4 md:px-14">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                className="h-12 rounded px-5 outline-none border w-full"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="h-12 rounded px-5 outline-none border w-full"
                required
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone number"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <textarea
                name="user_message"
                placeholder="Message..."
                className="h-28 rounded px-5 py-3 outline-none border w-full"
                required
              ></textarea>
              <button
                type="submit"
                className="py-3 border rounded-lg bg-green-500 text-white w-36 px-4 self-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
        <div className="flex items-center gap-4 pb-6 md:pb-0">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-green-500 text-white">
            <MapPinHouse />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Locate Us:</h2>
            <p className="text-sm md:text-base">
              Plot, No. 76, Blk A. , <br /> Yaw Nkrumah - Ashanti <br />{" "}
              AE-0664-8910
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 pb-6 md:pb-0">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-green-500 text-white">
            <PhoneCall />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Call Us:</h2>
            <p className="text-sm md:text-base">
              +233 541-655694
              <br />
              +233 506-075866
              <br />
              +233 553-396566
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-green-500 text-white">
            <Mail />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Email:</h2>
            <p className="text-sm md:text-base">
              bidigreenghanalimited@gmail.com
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
