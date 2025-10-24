import React, { useRef, useEffect } from 'react';
import { Container, Typography, Button, Avatar} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './HomePage.css';

const HomePage = () => {
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const block = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            block.classList.add('active');
            block.classList.remove('inactive');
          } else {
            block.classList.remove('active');
            block.classList.add('inactive');
          }
        });
      },
      { threshold: 0.5 } // triggers when ~half of a block is visible
    );

    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="home-section">
      {[
        <Container className="home-container">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>Hi, I’m Radu 👋</Typography>
          <Avatar
            alt="Radu Petrescu"
            src={`${process.env.PUBLIC_URL}/images/portrait.jpg`}
            sx={{ width: 300, height: 300, marginBottom: '30px', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <Typography variant="h5" sx={{ mb: 4 }}>Software Engineer passionate about AI, Web Development, and Technology.</Typography>
          <KeyboardArrowDownIcon className="arrow-icon" sx={{ fontSize: 50, color: 'white' }} />
        </Container>,

        <Container className="home-container">
          <Typography variant="h4" sx={{ mb: 2 }}>A little bit about me</Typography>
          <Typography variant="h6" sx={{ textAlign: 'justify', textAlignLast: 'center' }}>
            Hey there! I’m Radu Petrescu, a software engineering student at McGill University who loves turning creative ideas into real solutions. I’ve worked on projects involving full-stack development, REST APIs, and automated testing, with tools like Java, Python, React, Spring Boot, and SQL. I’m especially drawn to AI and ML — fields where intelligent systems help solve complex problems.
          </Typography>
          <iframe
            title='CV'
            src={`${process.env.PUBLIC_URL}/documents/Radu_Petrescu_CV_ATS_Eng.pdf`}
            width="100%"
            height="600px"
            style={{ border: 'none', borderRadius: '12px', marginTop: '20px' }}
          ></iframe>
          <KeyboardArrowDownIcon className="arrow-icon" sx={{ fontSize: 50, color: 'white' }}/>
        </Container>,

        <Container className="home-container">
          <Typography variant="h5" sx={{ mb: 4 }}>Want to see what I’ve built?</Typography>
          <Button variant="contained" href="/projects" sx={{ fontWeight: 600 }}>View My Work</Button>
          <Typography variant="h5" sx={{ mt: 4, mb: 4 }}>Like what you see? Let's chat!</Typography>
          <Button variant="contained" href="/contact" sx={{ fontWeight: 600 }}>Contact me</Button>
        </Container>,
      ].map((content, index) => (
        <div
          key={index}
          className="home-block inactive"
          ref={(el) => {
            if (el) blocksRef.current[index] = el;
          }}
        >
          {content}
        </div>
      ))}
    </section>
  );
};

export default HomePage;
