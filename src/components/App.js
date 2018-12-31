import React, { Component } from "react";
import { database } from "../firebase";
import _ from "lodash";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import renderHTML from "react-render-html";
import Navigation from "./presentational/Navigation";
import Form from "./presentational/Form";
import ToolBarQuill from "./presentational/ToolBarQuill";
import Picture from "./presentational/Picture";

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
    this.onDrop = this.onDrop.bind(this);
  }
  //when react mounts we want to log the data from firebase
  componentDidMount() {
    database.on("value", snapshot => {
      this.setState({
        posts: snapshot.val()
      });
    });
  }

  onHandleChange(e) {
    // e.preventDefault();
    this.setState({
      body: e
      // [e.target.name]: e.target.value
    });
  }
  //adding post to db
  onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    //adding post to db

    database.push(post);
    this.setState({
      title: "",
      body: "",
      pictures: ""
    });
  }
  titleHandler(e) {
    this.setState({ title: e.target.value });
  }
  onDrop(picture) {
    console.log("Picture", picture);

    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }
  renderPosts() {
    return _.map(this.state.posts, (post, key) => {
      return (
        <div key={key} className="row article">
          <hr />
          <div className="col-sm-6 home-post-image">
            <a href="#">{/* <img src={post.img} /> */}</a>
          </div>
          <div className="col-sm-6 centered-content">
            <a href="#">
              <h3>{post.title}</h3>
              <span className="body-text">{renderHTML(post.body)}</span>
            </a>
            <div className="read-more">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Navigation />
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
          <div className="row col-sm-6">
            <ToolBarQuill
              onHandleChange={this.onHandleChange}
              bodyValue={this.state.body}
            />
          </div>
          <div className="row col-sm-6">
            <Picture Drop={this.onDrop} />
          </div>
          <button className="btn btn-primary">Post</button>
        </form>

        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
