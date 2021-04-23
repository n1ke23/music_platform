import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import { ITrack } from "../../types/track";
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { GetServerSideProps } from 'next';
import axios from "axios";


const TrackPage = ({ serverTrack }) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter();

    return (
        <MainLayout>
            <Button onClick={() => router.push('/tracks')}>
                К списку
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={track.picture} width={200} height={200} alt={'picture'} />
                <div style={{ margin: '20px 0' }}>
                    <h2>Название трека - {track.name}</h2>
                    <h2>Исполнитель - {track.artist}</h2>
                    <h2>Прослушиваний - {track.listens}</h2>
                </div>
            </Grid>
            <h2>Слова в треке</h2>
            <p>{track.text}</p>
            <h2>Комментарии</h2>
            <Grid container>
                <TextField
                    label="Ваше имя"
                    fullWidth
                />
                <TextField
                    label="Коментарий"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <ul>
                        <li>Автор - {comment.username}</li>
                        <li>Комментарий - {comment.text}</li>
                    </ul>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}