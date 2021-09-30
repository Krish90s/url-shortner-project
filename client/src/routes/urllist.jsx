import React, { Component } from "react";
import { getUrls } from "../services/urlshortner";

class UrlsList extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
    };
  }

  async componentDidMount() {
    const { data: urls } = await getUrls();
    this.setState({ urls });
  }
  render() {
    return (
      <div className="container-fluid student-form py-3">
        <h1 className="display-4 text-center mt-4">Generated URLs</h1>
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">Short Url</th>
              <th scope="col">Click Count</th>
            </tr>
          </thead>
          <tbody>
            {this.state.urls.map((url) => (
              <tr key={url._id}>
                <td>
                  <a href={url.shortUrl} target="_blank">
                    {url.shortUrl}
                  </a>
                </td>
                <td>{url.clickCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UrlsList;
