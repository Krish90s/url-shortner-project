import React from "react";
import Form from "../components/form";
import Joi from "joi-browser";

import { submitUrl } from "../services/urlshortner";

class UrlShortner extends Form {
  constructor() {
    super();
    this.state = {
      data: {
        longUrl: "",
      },
      urlShort: {},
      errors: {},
    };
  }

  schema = {
    longUrl: Joi.string().required().label("Long Url"),
  };

  doSubmit = async () => {
    try {
      const { data: urlShort } = await submitUrl(this.state.data);
      this.setState({ urlShort });
    } catch (ex) {}
  };

  render() {
    return (
      <div className="container-fluid student-form py-3">
        <h1 className="display-4 text-center mt-4">Url Shortner</h1>
        <div className="input-group my-5">
          <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
            {this.renderInput("longUrl")}
            {this.renderButton("Submit Url")}
          </form>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <a
              className="text-dark"
              href={this.state.urlShort.shortUrl}
              target="_blank"
            >
              {this.state.urlShort.shortUrl}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UrlShortner;
