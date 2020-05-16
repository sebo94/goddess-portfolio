import React, { Component } from "react";
import InstagramPost from "./InstagramPost/InstagramPost";
import classes from "./InstagramPosts.module.css";
import imgSrc from '../../assets/images/projects/project2.jpg';

const initialPosts = [
  {
    id: "1",
    classList: [classes.InstagramPost],
    caption: "",
    imgUrl: imgSrc,
  },
  {
    id: "2",
    classList: [classes.InstagramPost],
    caption: "",
    imgUrl: imgSrc,
  },
  {
    id: "3",
    classList: [classes.InstagramPost],
    caption: "",
    imgUrl: imgSrc,
  },
  {
    id: "4",
    classList: [classes.InstagramPost],
    caption: "",
    imgUrl: imgSrc,
  },
];

class InstagramPosts extends Component {
  state = {
    posts: initialPosts,
  };

  // componentDidMount() {
  //   // basic display api is read only so it should not be a problem keeping it in the client
  //   const accessToken =
  //     "IGQVJXQXZAxWDlSckNUTjBDdG9TbERfb2VGaE13U3RybzI3aHJjR2xLSllXTHhGUEgzSUI2MVpyVjZApUmw4MkdvWXViaUZArdURsSTVzakduZA3V4WlBLbU03ZAHh0V2tpeHFYUzJyelB5aDRQWm5QUklSZAQZDZD";
  //   fetch(
  //     `https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${accessToken}`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // Set the state
  //       const data = result.data.slice(4, 8);
  //       // ... We only want to render images so weh might wanna request the media type as well and filter the images only
  //       // Create the array we need
  //       const posts = data.map((post) => {
  //         return {
  //           id: post.id,
  //           imgUrl: post.media_url,
  //           caption: post.caption,
  //           classList: [classes.InstagramPost],
  //         };
  //       });
  //       this.setState({ posts });
  //     });
  // }

  handleClick = (postId) => {
    let newClasses,
      newOtherClasses = [];
    const clickedPost = this.state.posts.filter(
      (post) => post.id === postId
    )[0];
    const otherPosts = this.state.posts.filter((post) => post.id !== postId);
    // If the classlist for the clicked post contains "IsActive"
    if (clickedPost["classList"].includes(classes.IsActive)) {
      // remove "IsActive"
      newClasses = clickedPost.classList.filter(
        (cls) => cls !== classes.IsActive
      );
      // and remove "IsInactive" from the other posts
      newOtherClasses = otherPosts.map((post) =>
        post.classList.filter((cls) => cls !== classes.IsInactive)
      )[0];
    } else {
      // Add the "IsActive" to the clicked one
      newClasses = clickedPost.classList.concat(classes.IsActive);
      // Add the "IsInactive" class to any other post
      newOtherClasses = otherPosts.map((post) =>
        post.classList.concat(classes.IsInactive)
      )[0];
    }

    // Create the newPost object and the newOtherPost object
    let newPost = { ...clickedPost };
    let newOtherPosts = [...otherPosts];

    // Assign the new classList to the newPost
    newPost.classList = newClasses;

    // Assign the new classList to every other post
    newOtherPosts.map((post) => (post.classList = newOtherClasses));

    // Insert the newPost into the collection
    newOtherPosts.splice(newPost.id - 1, 0, newPost);

    this.setState({ posts: newOtherPosts });
  };

  handleHover = (postId) => {
    console.log("handling hover")
    // Do something on hover enter
    let newClasses,
      newOtherClasses = [];
    const hoveredPost = this.state.posts.filter(
      (post) => post.id === postId
    )[0];
    const otherPosts = this.state.posts.filter((post) => post.id !== postId);

    // Remove "WillActive" and "WillInactive" from all the other posts
    newOtherClasses = otherPosts.map((post) =>
      post.classList.filter(
        (cls) => cls !== classes.WillActive && cls !== classes.WillInactive
      )
    )[0];

    // Add "WillActive" to the hoveredPost
    newClasses = hoveredPost.classList.concat(classes.WillActive);

    // Add "WillInactive to all the other posts"
    newOtherClasses.concat(classes.WillInactive);

    // Create the newPost object and the newOtherPost object
    let newPost = { ...hoveredPost };
    let newOtherPosts = [...otherPosts];

    // Assign the new classList to the newPost
    newPost.classList = newClasses;

    // Assign the new classList to every other post
    newOtherPosts.map((post) => (post.classList = newOtherClasses));

    // Insert the newPost into the collection
    newOtherPosts.splice(newPost.id - 1, 0, newPost);

    this.setState({ posts: newOtherPosts });
  };

  render() {
    let igPosts = <p style={{ textAlign: "center" }}>Loading Posts...</p>;
    if (this.state.posts) {
      igPosts = this.state.posts.map((post) => (
        <InstagramPost
          key={post.id}
          id={post.id}
          // imgUrl={post.imgUrl}
          classList={post.classList.join(" ")}
          click={this.handleClick}
          hover={this.handleHover}
        />
      ));
    }
    return (
      <section id="instagramPosts" className={classes.InstagramPosts}>
        <div className={classes.Container}>{igPosts}</div>
      </section>
    );
  }
}

export default InstagramPosts;
