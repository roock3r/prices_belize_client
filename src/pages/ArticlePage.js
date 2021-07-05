import React from "react";
import {Query } from "react-apollo";
import {gql} from "apollo-boost";
import {Line} from 'react-chartjs-2';
import Error from '../components/Shared/Error';
import Loading from '../components/Shared/Loading';
import '../css/Main.css';
import {Container, Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
        // {
        //     label: '# of Floats',
        //     data: [10, 12, 9, 2, 1, 10],
        //     fill: false,
        //     backgroundColor: 'rgb(255, 99, 132)',
        //     borderColor: 'rgba(255, 99, 132, 0.2)',
        // },
        // {
        //     label: '# of Boats',
        //     data: [2, 1, 8, 9, 2, 14],
        //     fill: false,
        //     backgroundColor: 'rgb(255, 99, 132)',
        //     borderColor: 'rgba(255, 99, 132, 0.2)',
        // },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};


const ArticleDetail = ({classes, match}) => {
    const article_id = match.params.id;
    return (
            <Query query={ARTICLE_QUERY} variables={{article_id}}>
                {({data, loading, error}) => {
                    if (loading) return <Loading/>
                    if (error) return <Error error={error}/>
                    return(
                        <>
                            <Container maxWidth="lg">
                                {/*<div>{JSON.stringify(data)}</div>*/}

                                <Grid
                                    container
                                    direction="row"
                                    justify="space-around"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Grid item>
                                        <Typography variant="h1" align="left" gutterBottom>
                                            {data.article.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h4" align="right" gutterBottom>
                                            Current Price : $ {data.article.articlepriceSet[0].price}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item>
                                        <Typography variant="h4" align="right" gutterBottom>
                                            {data.article.description}
                                        </Typography>
                                        <Grid item>
                                            <Typography variant="h5" align="left" gutterBottom>
                                                Category : {data.article.articlecategorySet[0].category}
                                            </Typography>
                                        </Grid>
                                        <Paper >
                                            <Line data={data} options={options}/>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Container>
                        </>
                    )
                }}
            </Query>
    );
};

const ARTICLE_QUERY = gql`
query ($article_id: String!){
  article(id: $article_id){
    id
    name
    description
    image
    updatedAt
    createdAt
    articlecategorySet{
      id
      category
      description
      updatedAt
      createdAt
      active
    }
    articlepriceSet{
      id
      price
      pubDate
    }
  }
}
`

export default ArticleDetail;