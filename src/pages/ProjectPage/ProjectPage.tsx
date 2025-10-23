import React from 'react';
import { Container, Card, Grid, CardContent, Typography } from '@mui/material';
import './ProjectPage.css';

const projects = [
  { title: 'Space Collision Prevention System', desc: 'An AI-powered dashboard for space debris monitoring.' },
  { title: 'To-Do API Testing', desc: 'Exploratory testing suite for RESTful APIs using Postman.' },
  { title: 'Puzzle Solver', desc: 'DFS and BFS algorithms implemented in Python to solve sliding puzzles.' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <Typography variant="h4" className="section-title">Projects</Typography>
        <Grid container spacing={3} className="projects-grid">
          {projects.map((proj) => (
            <Grid item xs={12} md={4} key={proj.title}>
              <Card className="project-card">
                <CardContent>
                  <Typography variant="h6">{proj.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{proj.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;