import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Grid, Switch } from '@material-ui/core';
import  useDarkMode  from '../hooks/useDarkMode';

const Pricing = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode(); // Custom hook for dark mode state

  const [pricingPlans, setPricingPlans] = useState([
    { id: 1, name: 'Basic', price: 9.99, features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { id: 2, name: 'Standard', price: 19.99, features: ['Feature 1', 'Feature 2', 'Feature 3', ] },
    { id: 3, name: 'Premium', price: 29.99, features: [ 'Feature 3', 'Feature 4', 'Feature 5'] },
  ]);

  return (
    <div className={`container mx-auto ${isDarkMode ? 'dark' : ''}`}>
      <h2 className="text-3xl font-semibold mb-6">Choose a Pricing Plan</h2>
      <Grid container spacing={3}>
        {pricingPlans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" className="font-semibold mb-3">
                  {plan.name}
                </Typography>
                <Typography variant="h6" component="div" className="text-2xl mb-4">
                  ${plan.price}/month
                </Typography>
                <ul className="list-disc pl-6 mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="contained" color="primary">
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="mt-8">
        <Typography variant="h6" component="div" className="font-semibold mb-3">
          Dark Mode
        </Typography>
        <Switch checked={isDarkMode} onChange={toggleDarkMode} color="primary" />
      </div>
    </div>
  );
};

export default Pricing;
