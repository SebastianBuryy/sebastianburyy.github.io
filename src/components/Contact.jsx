import React from 'react'
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc'

const Contact = () => {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);  
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_6rlqlc9',
      'template_cmpxggr',
      {
        from_name: form.name,
        to_name: 'Sebastian',
        from_email: form.email,
        to_email: 'sebastianbury2004@gmail.com',
        message: form.message,
      },
      'JSY_2KyfrG-_vJLIj'
     )
     .then(() => {
        setLoading(false);
        alert('Thank you for your message. I will get back to you soon!');
        setForm({
          name: "",
          email: "",
          message: "",
        })
     }, (error) => {
        setLoading(false);
        console.log(error);
        alert('An error occurred. Please try again.');
     })
  }

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 mb-5 mt-5 ml-3 mr-3 rounded-2xl shadow-nav"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Name</span>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
              text-white rounded-lg hover:outline-5 font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="What is your email?"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
              text-white rounded-lg hover:outline-5 font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Message</span>
            <textarea
              name="message"
              rows={8}
              onChange={handleChange}
              value={form.message}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
              text-white rounded-lg hover:outline-5 font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none
            w-fit text-white font-bold shadow-md shadow-primary hover:bg-blue-300 hover:shadow-nav"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto ml-5 md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");