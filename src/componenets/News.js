import React, { Component } from 'react'
import LoadingScreen from './LoadingScreen';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 12,
        category: "sports"
    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loadingScreen: false,
            page: 1,
            pageSize: 12,
            totalArticles: 0
        }

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?apiKey=7bea0729c32242d693fda3809336f988&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pagesize=${this.state.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(this.state.page)
        this.setState(
            {
                articles: parsedData.articles,
                totalArticles: parsedData.totalResults,
                loadingScreen: true,
            }
        )
    }
    handlePrevClick = async () => {
        await this.setState(
            {
                page: this.state.page - 1,
                loadingScreen: false

            }
        )
        let url = `https://newsapi.org/v2/top-headlines?apiKey=7bea0729c32242d693fda3809336f988&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pagesize=${this.state.pageSize}`
        console.log(url)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(this.state.page)
        this.setState(
            {
                articles: parsedData.articles,
                loadingScreen: true
            }
        )

    }

    handleNextClick = async () => {
        await this.setState(
            {
                page: this.state.page + 1,
                loadingScreen: false
            }
        )
        let url = `https://newsapi.org/v2/top-headlines?apiKey=7bea0729c32242d693fda3809336f988&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pagesize=${this.state.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState(
            {
                articles: parsedData.articles,
                loadingScreen: true
            }
        )
    }

    render() {

        return (
            <>
                {this.state.loadingScreen === false ?
                    <LoadingScreen /> :
                    <div className='container my-3'>
                        <h2>Top HeadLines</h2>
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4">
                                    <NewsItem title={element.title ? element.title.slice(0, 40) : "none"} description={element.description ? element.description.slice(0, 85) : "None"} imagesrc={element.urlToImage} newsUrl={element.url} />
                                </div>

                            })}

                        </div>

                        <div className="d-flex justify-content-between my-5">
                            <button type="button" disabled={this.state.page <= 1} class="btn btn-dark px-3 mx-2" onClick={this.handlePrevClick}>Prev</button>
                            <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalArticles / this.state.pageSize)} class="btn btn-dark px-3 mx-2" onClick={this.handleNextClick}>Next</button>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default News