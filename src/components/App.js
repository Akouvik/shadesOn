import React, { Component } from "react";
import { database } from "../firebase";
import _ from "lodash";
import "react-quill/dist/quill.snow.css";
import renderHTML from "react-render-html";
import Navigation from "./presentational/Navigation";
import Form from "./presentational/Form";
import ToolBarQuill from "./presentational/ToolBarQuill";
import Authentication from "./presentational/Auth";
import Picture from "./presentational/Picture";
import { read } from "fs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      posts: {},
      pictures: []
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.onPictureUpload = this.onPictureUpload.bind(this);
  }

  //when react mounts we want to log the data from firebase
  componentDidMount() {
    database.on("value", snapshot => {
      this.setState({
        posts: snapshot.val()
      });
    });
  }
  //HANDLING THE LOGIN!!!
  // onHandleLogin(){
  //   const credentials = {

  //   }
  // }

  //ARTICLE TITLE
  titleHandler(e) {
    this.setState({ title: e.target.value });
  }

  //ARTICLE BODY
  onHandleChange(e) {
    this.setState({
      body: e
    });
  }

  //UPLOADING  ARTICLE PICTURES
  onPictureUpload(event) {
    console.log("input", event);
    this.readFile(event);

    if (event.files && event.files[0]) {
      console.log("inside");

      let reader = new FileReader();
      console.log("reader", reader);
      reader.onload = function(e) {
        // e.preventDefault();
        console.log("hey im in event");

        document
          .getElementById("blog-img")
          .setAttribute("src", e.target.result)
          .width(150)
          .height(1200);
      };
      reader.readAsDataURL(event.files[0]);
    }
  }

  //ADDING POST TO DB
  onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
      pictures: this.state.pictures
    };
    //adding post to db
    database.push(post);
    this.setState({
      title: "",
      body: "",
      pictures: []
    });
  }

  renderPosts() {
    return _.map(this.state.posts, (post, key) => {
      return (
        <div key={key} className="row article">
          <hr />
          {/* <div className="col-sm-6 home-post-image">
            <a href="#">
              <img src={post.img} />
            </a>
          </div> */}
          {/* <div className="col-sm-6 centered-content"> */}
          <a href="#">
            <h3>{post.title}</h3>
            <span className="body-text">{renderHTML(post.body)}</span>
          </a>
          <div className="read-more">
            <a href="#">Read More</a>
          </div>
        </div>
        // </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Navigation />
        <Authentication />
        <form onSubmit={this.onHandleSubmit} className="input-form">
          <Form
            onHandleChange={this.onHandleChange}
            onHandleSubmit={this.onHandleSubmit}
            placeholder="Title"
            titleValue={this.state.title}
            type="text"
            name="title"
            titleHandler={this.titleHandler}
          />

          <ToolBarQuill
            onHandleChange={this.onHandleChange}
            bodyValue={this.state.body}
          />
          <Picture imgUpload={this.onPictureUpload} />

          <button className="btn btn-primary">Post</button>
        </form>

        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
