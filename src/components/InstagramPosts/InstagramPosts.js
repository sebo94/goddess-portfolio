import React, { Component } from "react";
import InstagramPost from "./InstagramPost/InstagramPost";
import classes from "./InstagramPosts.module.css";

const posts = [
  { id: 1, classList: [classes.InstagramPost] },
  { id: 2, classList: [classes.InstagramPost, classes.IsActive] },
  { id: 3, classList: [classes.InstagramPost] },
  { id: 4, classList: [classes.InstagramPost] },
];

class InstagramPosts extends Component {
  state = {
    posts: posts,
  };

  handleClick = (postId) => {
    let newClassList,
      newOtherPostsClasses = [];
    const clickedPost = this.state.posts.filter(
      (post) => post.id === postId
    )[0];
    const otherPosts = this.state.posts.filter((post) => post.id !== postId);
    // If the classlist for that element contains "IsActive"
    if (clickedPost["classList"].includes(classes.IsActive)) {
      // remove it and remove "IsInactive" from the other posts
      newClassList = clickedPost.classList.filter(
        (cls) => cls !== classes.IsActive
      );
      newOtherPostsClasses = otherPosts.map((post) =>
        post.classList.filter((cls) => cls !== classes.IsInactive)
      );
      let newOtherPosts = { ...otherPosts };
      newOtherPostsClasses.map()
      newOtherPosts = newOtherPosts.map((post, index)=> console.log(post, newOtherPostsClasses[index]))
    } else {
      // Otherwise, add the "IsInactive" class to any other post that the onw being clicked, add the "IsActive to the clicked one"
      newOtherPostsClasses = otherPosts.map((post) =>
        post.classList.concat(classes.IsInactive)
      );
      newClassList = clickedPost.classList.concat(classes.IsActive);
    }
    const newClickedPost = { ...clickedPost };
    newClickedPost.classList = newClassList;
    this.setState({});
  };

  handleHoverEnter = (postId) => {
    // Do something on hovet enter
  };

  handleHoverExit = (postId) => {
    // Do something on hover exit
  };

  render() {
    const igPosts = this.state.posts.map((post) => (
      <InstagramPost
        key={post.id}
        id={post.id}
        class={post.classList.join(" ")}
        click={this.handleClick}
        hoverEnter={this.handleHoverEnter}
        hoverExit={this.handleHoverExit}
      />
    ));
    return (
      <section id="instagramPosts" className={classes.InstagramPosts}>
        <div className={classes.Container}>{igPosts}</div>
      </section>
    );
  }
}

export default InstagramPosts;
