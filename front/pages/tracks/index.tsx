import { Button, Grid, Card } from '@material-ui/core';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const Index = () => {
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card>
                    <Grid container justifyContent='space-between'>
                        <h1>Список треков</h1>
                        <Button>Загрузка</Button>
                    </Grid>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;