import dollar from '../dollar-wheel.svg'
import '../css/Main.css';

import {Query} from "react-apollo";
import {gql} from "apollo-boost";
import {Box, LinearProgress} from "@material-ui/core";
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
                            <header className="Main-header">
                                <Box component="span" m={1}/>
                                <img src={dollar} className="Main-logo" alt="logo"/>
                                {/*<p>*/}
                                {/*    Edit <code>src/App.js</code> and save to reload.*/}
                                {/*</p>*/}
                                {/*<a*/}
                                {/*    className="Main-link"*/}
                                {/*    href="https://reactjs.org"*/}
                                {/*    target="_blank"*/}
                                {/*    rel="noopener noreferrer"*/}
                                {/*>*/}
                                {/*    Learn React*/}
                                {/*</a>*/}
                                {/*<div>{JSON.stringify(data)}</div>*/}
                                    <Box component="span" m={5}/>
                                    <ArticleList articles={articles}/>
                            </header>
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



