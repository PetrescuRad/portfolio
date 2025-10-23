import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <section id="contact" className="contact-section">
      <Container className="contact-container">
        <Typography variant="h4" className="section-title">Get in Touch</Typography>
        <Typography variant="body1" className="contact-text">
          Feel free to reach out for collaborations, projects, or just to say hi!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="mailto:radu.petrescu@example.com"
        >
          Send Email
        </Button>
      </Container>
    </section>
  );
};

export default ContactPage;
