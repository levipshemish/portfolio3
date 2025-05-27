// import { useState } from "react"
import BALLONSIMAGE from '/Users/levipshemish/Desktop/levi-portfolio/client2/src/images/ballons.png'
import { useNav } from "../NavContext"
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';


export default function Contact() {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
      useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        // Clean up on unmount
        return () => window.removeEventListener("resize", handleResize);
      }, []);


     const {closeNav} = useNav();
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    //create an email function 
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
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Message Sent!",
                text: "Your email will be responded to shortly.",
                icon: "success",
                width: '300px'
              });
        }
      };

      if (windowWidth < 900) {
        return (
          <section id='contact' className="bg-[#FAFAFF]">
            <div onClick={closeNav} className="h-[100vh] bg-[#FAFAFF]">
                <div className='w-[93vw] mx-auto'>
                  <div className='flex flex-col gap-4'>
                    <div className='pt-15 text-4xl text-[#30343F]'>
                      Let's connect.
                    </div>
                    <div className="text-[#30343f] text-[23px]">
                        If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
                    </div>
                    <form onSubmit={onSubmit}>
                        <input type="hidden" name="name" value="Portfolio Contact Form" />
                        <div className="flex flex-col gap-1">
                        <label className="text-sm text-[#8892B0]">Email</label>
                        <input className="py-2 px-2 rounded-md border border-[#8892B0]" type="text" placeholder="Email" name="email" />
                        </div>
                        
                        
                        <div className="mt-5 flex flex-col gap-1">
                        <label className="text-sm text-[#8892B0]">Message</label>
                        <textarea className="h-23 py-2 px-2 rounded-md border border-[#8892B0]" placeholder="Hey, how's it going?" name="message" />
                        </div>
                        <div>
                          <button type="submit" className="shadow-xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-200 mt-4 w-full  py-2 rounded-md bg-[#FED766] text-[#8892B0] gap-2">Send <span className="text-md">{'›'}</span></button>
                        </div>
                    </form>
                    <div className='mt-5 flex justify-center'>
                      <img className='h-60 w-auto' src={BALLONSIMAGE}/>
                    </div>
                  </div>
                 
                </div>
            </div>
          </section>
        )
      }

    return (
        <section id='contact' className="bg-[#FAFAFF]">
        <div onClick={closeNav} className="h-[60vw] w-[80vw] mx-auto bg-[#FAFAFF]">
            <div className='flex  justify-between'>
                <div className='flex flex-col  mt-10 h-[500px] w-120'>
                  <div className='pt-12 text-[#30343F] text-5xl'>
                    Let's connect
                  </div>
                  <div className='pt-4 text-2xl text-[#30343F]'>
                    If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
                  </div>
                  <form onSubmit={onSubmit}>
                        <input type="hidden" name="name" value="Portfolio Contact Form" />
                        <div className="flex flex-col gap-1">
                        <label className="text-sm text-[#8892B0]">Email</label>
                        <input className="py-2 px-2 rounded-md border border-[#8892B0]" type="text" placeholder="Email" name="email" />
                        </div>
                        
                        
                        <div className="mt-5 flex flex-col gap-1">
                        <label className="text-sm text-[#8892B0]">Message</label>
                        <textarea className="h-23 py-2 px-2 rounded-md border border-[#8892B0]" placeholder="Hey, how's it going?" name="message" />
                        </div>
                        <div>
                          <button type="submit" className="shadow-xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-200 mt-4 px-18 py-2 rounded-md bg-[#FED766] text-[#8892B0] gap-2">Send <span className="text-md">{'›'}</span></button>
                        </div>
                    </form>
                </div>
                <div className='pt-30 h-[500px] w-80 flex items-center' >
                  <div className=''>
                    <img className='' src={BALLONSIMAGE}/>
                  </div>
                </div>
            </div>
        </div>
        
        </section>
    )
}
//5eaaabba-b41e-4ab9-943b-ece5ea371d6b
//https://web3forms.com/platforms/react-contact-form