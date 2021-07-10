import React from "react";
import {Query } from "react-apollo";
import {gql} from "apollo-boost";
import Error from '../components/Shared/Error';
import Loading from '../components/Shared/Loading';
import '../css/Main.css';
import {Container, Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import sortFunction from "../utils/dateSort";
import LineChart from "../components/Graphs/LineGraphComponent";

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
                                            Current Price : $ {data.article.articlepriceSet.sort(sortFunction)[0].price}
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
                                            <LineChart priceSet={data.article.articlepriceSet.sort(sortFunction)} title={data.article.name}/>
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