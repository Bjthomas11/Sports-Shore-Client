import React from "react";
import "./articles.css";
import { API_BASE_URL } from "../config";

export default class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  getNews(data) {
    let fromDate = new Date();
    let x = 5;
    fromDate.setDate(fromDate.getDate() - x);

    var dd = fromDate.getDate();
    var mm = fromDate.getMonth() + 1;
    var yyyy = fromDate.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    fromDate = yyyy + "-" + mm + "-" + dd;

    console.log(fromDate);
    var url =
      "https://newsapi.org/v2/everything?" +
      `q="${data}"&` +
      `from=${fromDate}&` +
      "language=en&" +
      "sortBy=relevancy&" +
      "pageSize=50&" +
      "apiKey=508b1fda120441e68b78ef8483883676";

    var req = new Request(url);

    fetch(req)
      .then(function(res) {
        return res.json();
      })
      .then(data =>
        this.setState({
          articles: data.articles
        })
      );
  }

  componentDidMount() {
    this.refreshArticles();
  }

  refreshArticles() {
    fetch(`${API_BASE_URL}/teams/` + localStorage.getItem("username"))
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          teams: data.teams,
          id: data.teams[0].id
        });
        let teams = data.teams[0].team.toString();
        console.log(data.teams[0].team.length);
        let teamsData = teams.replace(/,/g, '" OR "');
        console.log(teamsData);
        this.getNews(teamsData);
      })
      .catch(error => {
        console.log(error);
      });
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    const { articles } = this.state;
    let articleFeed = articles.map((article, index) => {
      return (
        <div className="article" key={index}>
          <div className="content">
            <a
              href={article.url}
              id="articleLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="source">{article.source.name}</p>
              <p className="articleTitle">{article.title}</p>
              <img
                src={article.urlToImage}
                className="articleImg"
                alt="team article logo"
              />
            </a>
          </div>
        </div>
      );
    });

    return <div className="articles">{articleFeed}</div>;
  }
}
