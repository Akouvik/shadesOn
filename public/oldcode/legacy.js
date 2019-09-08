//TAB.JS
//  import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { database } from "../../firebase";
// import _ from "lodash";
// import renderHTML from "react-render-html";
// import Form from "./Form";
// import ToolBarQuill from "./ToolBarQuill";
// // import Login from "./Login";
// import Picture from "./Picture";
// import Modal from "./Login";
// import Signup from "./Signup";

// const MyContext = React.createContext();
// class MyProvider extends Component {
//   state = {
//     title: "",
//     body: "",
//     posts: {},
//     src: [],
//     username: "",
//     password: "",
//     showLogin: false,
//     showSignup: false,
//     signupEmail: "",
//     signupPassword: "",
//     repeatPassword: ""
//   };
//   componentDidMount() {
//     database.on("value", snapshot => {
//       this.setState({
//         posts: snapshot.val()
//       });
//     });
//   }

//   render() {
//     return (
//       <MyContext.Provider
//         value={{
//           state: this.state,
//           username: e => {
//             this.setState({
//               username: e.target.value
//             });
//           },
//           password: e => {
//             this.setState({
//               password: e.target.value
//             });
//           },
//           signupEmail: e => {
//             this.setState({
//               signupEmail: e.target.value
//             });
//           },
//           signupPassword: e => {
//             this.setState({
//               signupPassword: e.target.value
//             });
//           },
//           repeatPassword: e => {
//             this.setState({
//               repeatPassword: e.target.value
//             });
//           },
//           showModal: e => {
//             if (
//               e.target.id == "contribute-button" ||
//               e.target.id == "login-button-at-signup"
//             ) {
//               this.setState({ showSignup: false, showLogin: true });
//             } else {
//               this.setState({ showLogin: false, showSignup: true });
//             }
//           },
//           hideModal: () => {
//             this.setState({ showLogin: false, showSignup: false });
//           },
//           handleLogin: e => {
//             console.log("event", e.target);
//           },
//           handleSignup: () => {
//             console.log("signup");
//             //hide the signin and show the signup
//           },
//           /////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//           //when react mounts we want to log the data from firebase

//           //ARTICLE TITLE
//           titleHandler: e => {
//             this.setState({ title: e.target.value });
//           },

//           //ARTICLE BODY
//           onHandleChange: e => {
//             this.setState({
//               body: e
//             });
//           },

//           //UPLOADING  ARTICLE PICTURES
//           onPictureUpload: event => {
//             if (event.target.files) {
//               let allFiles = event.target.files;
//               for (var i = 0; i < allFiles.length; i++) {
//                 let oneFile = allFiles[i];
//                 //for multiple files
//                 (oneFile => {
//                   var reader = new FileReader();
//                   reader.onload = e => {
//                     // console.log("event", e.target.result);
//                     this.setState(preveState => ({
//                       src: [...preveState.src, e.target.result]
//                     }));
//                   };
//                   reader.readAsDataURL(event.target.files[0]);
//                 })(event.target.files[i]);
//               }
//             }
//           },

//           //ADDING POST TO DB
//           onHandleSubmit: e => {
//             e.preventDefault();
//             const post = {
//               title: this.state.title,
//               body: this.state.body,
//               src: this.state.src
//             };
//             //adding post to db
//             database.push(post);
//             this.setState({
//               title: "",
//               body: "",
//               src: []
//             });
//           },

//           renderPosts: () => {
//             return _.map(this.state.posts, (post, key) => {
//               if (post.src) {
//                 return (
//                   <div key={key} className="row article">
//                     <div className="col-xs-6">
//                       <img src={post.src[0]} />
//                     </div>
//                     <div className="col-xs-6">
//                       <a href="#">
//                         <h3>{post.title}</h3>
//                         <span className="body-text">
//                           {renderHTML(post.body)}
//                         </span>
//                         <button className="read-more" href="#">
//                           Read More
//                         </button>
//                       </a>
//                     </div>
//                   </div>
//                 );
//               } else {
//                 return (
//                   <div key={key} className="row article">
//                     {/* <div className="col-6"> */}
//                     <a href="#">
//                       <h3>{post.title}</h3>
//                       <span className="body-text">{renderHTML(post.body)}</span>
//                       <button className="read-more" href="#">
//                         Read More
//                       </button>
//                     </a>
//                     {/* </div> */}
//                   </div>
//                 );
//               }
//             });
//           }
//         }}
//       >
//         {this.props.children}
//       </MyContext.Provider>
//     );
//   }
// }
// const TabObject = {
//   Home: () => {
//     return (
//       <div>
//         <MyProvider>
//           <MyContext.Consumer>
//             {context => (
//               <React.Fragment>
//                 {/* {context.renderPosts()} */}
//                 <Signup
//                   handleClose={context.hideModal}
//                   show={context.state.showSignup}
//                   handleLogin={context.handleLogin}
//                   signupModal={context.showModal}
//                   // handleSignup={context.handleSignup}
//                 >
//                   <h3>Join Us!</h3>
//                   <input
//                     className="form-control"
//                     placeholder="Enter email"
//                     onChange={context.signupEmail}
//                   />
//                   <input
//                     className="form-control"
//                     placeholder="Enter password"
//                     onChange={context.signupPassword}
//                   />
//                   <input
//                     className="form-control"
//                     placeholder="Repeat password"
//                     onChange={context.repeatPassword}
//                   />
//                 </Signup>

//                 <Modal
//                   handleClose={context.hideModal}
//                   show={context.state.showLogin}
//                   handleLogin={context.handleLogin}
//                   signupModal={context.showModal}
//                   loginModal={context.showModal}
//                 >
//                   <h3>Login to Contribute</h3>
//                   <input
//                     className="form-control"
//                     placeholder="username"
//                     onChange={context.username}
//                   />
//                   <input
//                     className="form-control"
//                     placeholder="password"
//                     onChange={context.password}
//                   />
//                 </Modal>
//                 <button
//                   className="btn btn-primary"
//                   id="contribute-button"
//                   onClick={context.showModal}
//                 >
//                   Login to Contribute
//                 </button>
//               </React.Fragment>
//             )}
//           </MyContext.Consumer>
//         </MyProvider>
//       </div>
//     );
//   },

//   Travel: () => {
//     return (
//       <div>
//         <h2>Travel</h2>
//         <p>what was the last place you visited?</p>
//         <p>How much was the ticket?</p>
//         <p>How much time did you spend there?</p>
//         <p>What did you like about it?</p>
//         <p>What would you do differently</p>
//       </div>
//     );
//   },
//   Readme() {
//     return (
//       <div>
//         <h2>User Posts</h2>
//       </div>
//     );
//   },
//   Beauty: () => {
//     return (
//       <div>
//         <h2>beauty & Etiquette makes the modern woman</h2>
//       </div>
//     );
//   },

//   Tech: ({ match, Topic }) => {
//     return (
//       <div>
//         <h2>Technology</h2>
//         <ul>
//           <li>
//             <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//           </li>
//           <li>
//             <Link to={`${match.url}/components`}>Components</Link>
//           </li>
//           <li>
//             <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//           </li>
//         </ul>

//         <Route path={`${match.path}/:topicId`} component={Topic} />
//         <Route
//           exact
//           path={match.path}
//           render={() => <h3>Please select a topic.</h3>}
//         />
//       </div>
//     );
//   },

//   Topic: ({ match }) => {
//     return (
//       <div>
//         <h3>{match.params.topicId}</h3>
//       </div>
//     );
//   },

//   Contributor: () => {
//     return (
//       <MyProvider>
//         <MyContext.Consumer>
//           {context => (
//             <div className="container">
//               <form onSubmit={context.onHandleSubmit} className="input-form">
//                 <Form
//                   onHandleChange={context.onHandleChange}
//                   onHandleSubmit={context.onHandleSubmit}
//                   placeholder="Title"
//                   titleValue={context.state.title}
//                   type="text"
//                   name="title"
//                   titleHandler={context.titleHandler}
//                 />
//                 <ToolBarQuill
//                   onHandleChange={context.onHandleChange}
//                   bodyValue={context.state.body}
//                 />
//                 <Picture
//                   imgUpload={context.onPictureUpload}
//                   src={context.state.src[0]}
//                 />
//                 <button className="btn btn-primary">Post</button>
//               </form>
//             </div>
//           )}
//         </MyContext.Consumer>
//       </MyProvider>
//     );
//   }
// };

// export default TabObject;
