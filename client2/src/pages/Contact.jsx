import { useNav } from "../NavContext";
import Swal from "sweetalert2";
import BALLONSIMAGE from "../images/ballons.png";

export default function Contact() {
  const { closeNav } = useNav();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "5eaaabba-b41e-4ab9-943b-ece5ea371d6b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Your email will be responded to shortly.",
        icon: "success",
        width: "300px",
      });
    }
  };

  return (
    <section id="contact" className="bg-[#FAFAFF] py-10">
      <div
        onClick={closeNav}
        className="max-w-[90%] md:max-w-[80%] mx-auto flex flex-col items-center gap-12"
      >
        {/* Text + Form */}
        <div className="w-full lg:w-[60%]">
          <h2 className="text-4xl md:text-5xl font-roboto text-[#30343F] mb-4">
            Let's connect.
          </h2>
          <p className="text-lg md:text-xl text-[#30343F] mb-6">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <input
              type="hidden"
              name="name"
              value="Portfolio Contact Form"
            />
            <div className="flex flex-col">
              <label className="text-sm text-[#8892B0]">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="py-2 px-3 border border-[#8892B0] rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-[#8892B0]">Message</label>
              <textarea
                name="message"
                placeholder="Hey, how's it going?"
                required
                className="py-2 px-3 h-32 border border-[#8892B0] rounded-md resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full lg:w-fit px-6 py-3 bg-[#FED766] text-[#30343F] font-semibold rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Send <span className="text-lg">{'›'}</span>
            </button>
          </form>
        </div>

        
        <div className="w-full flex justify-center mt-6">
          <img
            src={BALLONSIMAGE}
            alt="Balloon illustration"
            className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-auto"
          />
        </div>
      </div>
    </section>
  );
}

