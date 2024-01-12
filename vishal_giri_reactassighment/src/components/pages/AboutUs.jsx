import React from 'react';
import { Typography, Container, Card, CardContent } from '@material-ui/core';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h2" className="my-4">
        About Us
      </Typography>

      <Card className="mb-4">
        <CardContent>
          <Typography variant="h5" component="div">
            Our Mission
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta?
          </Typography>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <Typography variant="h5" component="div">
            Our Team
          </Typography>
          <Typography variant="body1">
            Meet our dedicated team of professionals who work tirelessly to provide you with the best
            services.
          </Typography>
        </CardContent>
      </Card>

      
    </Container>
  );
};

export default AboutUs;
