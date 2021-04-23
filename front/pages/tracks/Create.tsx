import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';

const Create = () => {

    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activStep={2}>
                {activeStep === 0 && <Grid container direction={'column'} style={{ padding: 20 }}>
                    <TextField label={'Навание трека'} style={{ marginTop: 10 }} />
                    <TextField label={'Имя исполнителя'} style={{ marginTop: 10 }} />
                    <TextField label={'Слова к треку'} multiline rows={3} style={{ marginTop: 10 }} />
                </Grid>}
                {activeStep === 1 &&
                    <FileUpload
                        file={''}
                        setFile={setPicture}
                        accept="image/*"
                    >
                        <button> Загрузите изоброжение</button>
                    </FileUpload>}
                {activeStep === 2 &&
                    <FileUpload
                        file={''}
                        setFile={setAudio}
                        accept="audio/*"
                    >
                        <button> Загрузите аудио</button>
                    </FileUpload>}
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;