import { Github, Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils";
import emailjs, { sendForm } from 'emailjs-com';
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ContactMe = () =>{

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const SERVICE_ID = "service_lrekt1c";
    const TEMPLATE_ID = "template_pmha13q";
    const PUBLIC_KEY = "ooJ0f74d5hdrxvCJL";
    const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target, PUBLIC_KEY)
  .then(
    (result) => alert("Message sent successfully!"),
    setFormData({name:"", email:"", message:""})
  )
  .catch(() => alert("Something went wrong "))
};

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animation happens only once
  });
}, []);


    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div data-aos = "fade-up" className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project or idea? Let’s connect and bring it to life together.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>

                            <div>
                                <h4 className="font-medium text-left">Email :</h4>
                                <a href=""
                                  className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
                                     vivinrakul123@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Linkedin className="h-6 w-6 text-primary"/>
                            </div>

                            <div>
                                <h4 className="font-medium text-left">LinkedIn :</h4>
                                <a href="https://www.linkedin.com/in/vivin-rakul-8126212a0/"
                                 target="_blank"
                                  className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                                >
                                    Vivin Rakul
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>

                            <div>
                                <h4 className="font-medium text-left">Location :</h4>
                                <a
                                  className="text-muted-foreground text-left"
                                >
                                    Gobichettipalayam, Erode, Tamil Nadu, India
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                          <a className="hover:text-primary" target="_blank" href="https://github.com/vivin888">
                            <Github/>
                          </a>

                          

                          <a className="hover:text-primary" target="_blank" href="https://www.instagram.com/vivinrakul_p?igsh=cDgxN2Z6bnkzd29j">
                            <Instagram/>
                          </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})} required 
                              className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                              placeholder="vivin rakul..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} required 
                              className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                              placeholder="xyz@gmail.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-left" htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({...formData, message:e.target.value})} required 
                              className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                              placeholder="Hello! I'd like to talk about Project Details / Regarding Job/Internships ... "
                            />
                        </div>

                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            Send Message <Send size={16}/>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
}