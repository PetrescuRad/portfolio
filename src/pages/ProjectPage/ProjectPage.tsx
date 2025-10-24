import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import './ProjectPage.css';
import ImageMagnifier from './ImageMagnifier';

const projects = [
  {
    title: 'Space Collision Prevention System',
    desc: 'Developed a comprehensive web-based visualization and alerting tool to support collision avoidance operations for the Canadian Space Agency. The system enables both frontline and technical operators to assess conjunction risks and plan maneuvers using live data visualizations, statistical analysis, and 3D modeling. Built with React and TypeScript on the frontend, Express and Supabase on the backend, and Hasura GraphQL for real-time data subscriptions, the platform features secure authentication with role-based access control (RBAC), dynamic filtering of Conjunction Data Messages (CDMs), and interactive 3D visualizations using CesiumJS.',
    bullets: [
      'Real-time event monitoring and customizable alert thresholds for collision probability.',
      'Interactive dashboards with D3.js-based graphs (Probability of Collision, Miss Distance, RSS).',
      '3D orbital visualization and maneuver simulation tools allowing operators to model ΔV strategies and visualize resulting trajectories.'
    ],
    image: '/images/scps_poster.jpg',
    links: ['/documents/scps_report1.pdf'],
  },
  {
    title: 'Applied Machine Learning (COMP 551)',
    desc: 'In the context of a university course, we explored fundamental and advanced machine learning algorithms, deepening our understanding of model design, implementation, evaluation, and interpretability. The course emphasized hands-on learning — requiring us to implement models from scratch, conduct empirical analyses, and interpret results across a variety of datasets. We transitioned from classic supervised learning algorithms such as KNN, Decision Trees, and Logistic Regression to more complex neural network architectures, culminating in transfer learning with the BERT model for natural language processing.',
    bullets: [
      "Implemented and compared weighted K-Nearest Neighbors and Decision Trees for binary and multiclass classification on the Heart Disease and Penguins datasets.",
      "Developed linear, logistic, and multiclass logistic regression models from scratch and evaluated them on Breast Cancer and Penguins datasets, with linear regression showing the best accuracy.",
      "Built and analyzed multilayer perceptrons for the Kuzushiji-MNIST dataset, comparing architectures and activation functions, and achieving 98.17% accuracy with a CNN baseline.",
      "Experimented with and fine-tuned the BERT model on the AG News dataset for text classification, achieving 92.14% test accuracy and analyzing attention weights for interpretability."
    ],
    image: '/images/ml_examples.png',
    links: [
      '/documents/ml_a1.pdf',
      '/documents/ml_a2.pdf',
      '/documents/ml_a3.pdf',
      '/documents/ml_a4.pdf',
    ],
  },
  {
    title: 'Segmentation in Medical Imaging (ECSE 415)',
    desc: "Final project for ECSE 415, focused on supervised and unsupervised segmentation of histopathology images for nucleus and tumor detection. Implemented clustering, Random Forest, SVM, and a fine-tuned FCN-ResNet50 deep learning model for pixel-wise classification and tissue analysis.",
    bullets: [
      "Applied K-means and Mean Shift clustering for unsupervised nucleus segmentation, evaluated using Dice scores.",
      "Trained Random Forest classifiers with pixelwise and patch-based features for supervised segmentation, achieving strong binary accuracy.",
      "Built a tumor detection pipeline using grayscale preprocessing, masking, SIFT features, and SVM classification.",
      "Compared masked vs. full-image models, showing improved performance when leveraging full context.",
      "Fine-tuned an FCN-ResNet50 model achieving 0.59 Dice score and 0.83 pixel accuracy on test samples."
    ],
    image: '/images/image_seg.png',
    links: ['/documents/ECSE415 - Project Report (1).pdf'],
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // small delay to ensure transition fires

    return () => clearTimeout(timer);
  }, []);


  return (
    <section id="projects" className="projects-section">
      <Container maxWidth={false}>
        <Typography variant="h3" className="section-title" gutterBottom>
          Projects
        </Typography>

        {projects.map((proj) => (
          <Card
            key={proj.title}
            className={`project-card ${isVisible ? 'isVisible' : ''}`}
            elevation={3}
            sx={{
              marginBottom: '4rem',
              minHeight: '800px',
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.25)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '20px',
              opacity: 0,
              transform: 'scale(0.8)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
              '&.isVisible': {
                opacity: 1,
                transform: 'scale(1)',
              },
              '&:hover': {
                boxShadow: '0 12px 50px rgba(0, 0, 0, 0.35)',
              }
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <ImageMagnifier src={`${process.env.PUBLIC_URL}/${proj.image}`} alt={proj.title} />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography variant="h4">{proj.title}</Typography>
                  <Typography variant="h6" sx={{ mb: 2 }}>{proj.desc}</Typography>
                  <ul>
                    {proj.bullets?.map((point, i) => (
                      <li key={i}>
                        <Typography variant="h6" color="white">{point}</Typography>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {proj.links?.map((link, i) => (
                      <li key={i}>
                        <a href={`${process.env.PUBLIC_URL}/${link}`} target="_blank" rel="noopener noreferrer">
                          Download Full Report #{i + 1} Here
                        </a>
                      </li>
                    ))
                    }
                  </ul>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
