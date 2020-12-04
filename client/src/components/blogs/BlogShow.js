import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id);
  }

  renderImage() {
    console.log(this.props);
    // console.log(`https://blog-bucket-9968.s3-ap-southeast-2.amazonaws.com/
    // ${this.props.blog.imageUrl}`);
    if (this.props.blog.imageUrl) {
      return (
        <img
          src={`https://blog-bucket-9968.s3-ap-southeast-2.amazonaws.com/${this.props.blog.imageUrl}`}
        />
      );
    }
  }

  render() {
    console.log(this.props);
    if (!this.props.blog) {
      return '';
    }

    const { title, content } = this.props.blog;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        {this.renderImage()}
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchBlog })(BlogShow);
