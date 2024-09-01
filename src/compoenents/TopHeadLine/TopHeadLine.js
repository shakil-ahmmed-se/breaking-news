import React, { useEffect, useState } from 'react';
import News from '../News/News';
import axios from 'axios';

const TopHeadLine = () => {

    const [articles, setArticle] = useState([])

    // useEffect(()=> {
    //     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2c4d553cdf344431951f181d49422e2c')
    //    .then(response => response.json())
    //    .then(data => setArticle(data.articles));
    // },[])

    useEffect(()=>{
        axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=2c4d553cdf344431951f181d49422e2c')
        .then(data => setArticle(data.data.articles))
    },[])
    return (
        <div>
            <h1>Top Head line: {articles.length}</h1>
            {
                articles.map( article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadLine;