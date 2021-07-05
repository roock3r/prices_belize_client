import dollar from '../dollar-wheel.svg'
import '../css/Main.css';

import {Query} from "react-apollo";
import {gql} from "apollo-boost";
import {Container, LinearProgress} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import ArticleList from "../components/Article/ArticleList";


function Main() {

    return (
        <Query query={GET_ARTICLES_QUERY}>
            {
                ({data, loading, error}) => {
                    if (loading) return <LinearProgress color="secondary"/>
                    if (error) return 'error...'
                    const articles = data.articles
                    return (
                        <div className="Main">
                            <Container maxWidth="lg">
                                <Typography variant="h1" component="h2" gutterBottom>
                                   Welcome to Prices Belize
                                </Typography>
                                <img src={dollar} className="Main-logo" alt="logo"/>
                                <Typography variant="h3" gutterBottom>
                                    Find the lastest prices of essential goods and services we use everyday.
                                </Typography>
                                <ArticleList articles={articles}/>
                            </Container>
                        </div>
                    )
                }}
        </Query>

    )
        ;
}

export const GET_ARTICLES_QUERY = gql`
query{
  articles{
    id
    name
    description
    slug
    image
    articlepriceSet{
      id
      price
      pubDate
    }
  }
}
`

export default Main;



