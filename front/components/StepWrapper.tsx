import { Card, Container, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';

interface StepWrapperProps {
    activStep: number;
}

const steps = ["Информация о треке", "Загрузите обложку", "Загрузите сам трек"]

const StepWrapper: React.FC<StepWrapperProps> = ({ activStep, children }) => {
    return (
        <Container>
            <Stepper activeStep={activStep}>
                {steps.map((step, index) =>
                    <Step
                        key={index}
                        completed={activStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" style={{ margin: '70px 0', height: 270 }}>
                <Card style={{ width: 600 }}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;