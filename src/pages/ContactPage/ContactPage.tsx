import React, { useRef } from 'react';
import { Container, Typography, Button, IconButton, TextField } from '@mui/material';
import './ContactPage.css';
import { Email, LinkedIn, GitHub, Phone } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return; // safety check

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          alert('Failed to send message, please try again.');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <Container className="contact-container">
        <Typography variant="h4" className="section-title">
          Get in Touch
        </Typography>
        <Typography variant="body1" className="contact-text">
          I’d love to hear from you! Whether it’s a collaboration, a project idea, or just to say hi, feel free to reach out.
        </Typography>

        {/* 🔹 Social Icons */}
        <div className="contact-icons">
          <IconButton href="mailto:radu.sebas.petrescu@gmail.com" className="contact-icon">
            <Email sx={{ fontSize: 40 }}/>
          </IconButton>
          <IconButton href="https://linkedin.com/in/radu-petrescu-70b027222/" target="_blank" className="contact-icon">
            <LinkedIn sx={{ fontSize: 40 }}/>
          </IconButton>
          <IconButton href="https://github.com/petrescurad" target="_blank" className="contact-icon">
            <GitHub sx={{ fontSize: 40 }}/>
          </IconButton>
          <IconButton href="tel:+4389216350" className="contact-icon">
            <Phone sx={{ fontSize: 40 }}/>
          </IconButton>
        </div>

        {/* 🔹 EmailJS Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <TextField label="Your Name" name="user_name" fullWidth required margin="normal" className='contact-form-text' />
          <TextField label="Your Email" name="user_email" fullWidth required margin="normal" className='contact-form-text'/>
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            required
            margin="normal"
            className='contact-form-text'
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </form>

        <Typography variant="h4" className="footer-note">
          Thanks for stopping by — I look forward to connecting with you!
        </Typography>
      </Container>
    </section>
  );
};

export default ContactPage;
