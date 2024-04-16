import React from 'react';
import { Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';

const Articles = ({ articles }) => {
    return (
        <Grid container spacing={2}>
            {articles.slice(0,9).map((article, index) => (
                article.events.map((event, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={`${index}-${idx}`}>
                        <Card>
                            {event.attribute.thumbnail && <CardMedia
                                component="img"
                                height="140"
                                image={event.attribute.thumbnail.resolutions[0].url}
                                alt={event.attribute.title}
                            />}
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {event.attribute.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Publisher: {event.attribute.publisher}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Publish Time: {new Date(event.attribute.providerPublishTime * 1000).toLocaleDateString()} at {new Date(event.attribute.providerPublishTime * 1000).toLocaleTimeString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            ))}
        </Grid>
    );
};

export default Articles;