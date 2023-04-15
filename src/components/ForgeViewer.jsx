import QueryString from "qs";
import React, { Component } from "react";
import ForgeViewer from "react-forge-viewer";
import axios from "axios";

class ForgeViewerArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: null,
    };
  }

  handleViewerError(error) {
    console.log("Error loading viewer.");
  }

  /* after the viewer loads a document, we need to select which viewable to
  display in our component */
  handleDocumentLoaded(doc, viewables) {
    if (viewables.length === 0) {
      console.error("Document contains no viewables.");
    } else {
      //Select the first viewable in the list to use in our viewer component
      this.setState({ view: viewables[0] });
    }
  }

  handleDocumentError(viewer, error) {
    console.log("Error loading a document");
  }

  handleModelLoaded(viewer, model) {
    console.log("Loaded model:", model);
  }

  handleModelError(viewer, error) {
    console.log("Error loading the model.");
  }

  async getForgeToken() {}

  /* Once the viewer has initialized, it will ask us for a forge token so it can
  access the specified document. */
  async handleTokenRequested(onAccessToken) {
    console.log("Token requested by the viewer.");
    if (onAccessToken) {
      let token;
      var data = QueryString.stringify({
        client_id: "sRa2XTxOhJZw28B1FAbUHoKenARt15Ow",
        client_secret: "GFWocronJStqj7vx",
        grant_type: "client_credentials",
        scope:
          "code:all data:create data:write data:read bucket:create bucket:delete",
      });
      var config = {
        method: "post",
        url: "https://developer.api.autodesk.com/authentication/v1/authenticate",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: "PF=enUt6mzmDc6ltfcnT8Sy9Z",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          token = response.data;
          console.log(token);
          if (token) onAccessToken(token.access_token, token.expires_in);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div style={{ width: "80%", zIndex: -1 }}>
        <ForgeViewer
          version="7.0"
          urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dmlld2VyLXJvY2tzLXJlYWN0L1JDJTIwQ2FyLmYzZA"
          view={this.state.view}
          headless={true}
          onViewerError={this.handleViewerError.bind(this)}
          onTokenRequest={this.handleTokenRequested.bind(this)}
          onDocumentLoad={this.handleDocumentLoaded.bind(this)}
          onDocumentError={this.handleDocumentError.bind(this)}
          onModelLoad={this.handleModelLoaded.bind(this)}
          onModelError={this.handleModelError.bind(this)}
          className="w-100"
        />
      </div>
    );
  }
}

export default ForgeViewerArea;
