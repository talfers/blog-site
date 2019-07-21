import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class BlogItem extends React.Component {
  render () {
    const { title, img, dateCreated, tags, story } = this.props.blog;
    const parsedDate = dateCreated.split(":", 2);
    const parsedTags = tags.map((tag, i) => {
      tag = tag.charAt(0).toUpperCase() + tag.slice(1, tag.length);
      return (
        <span key={i}>{i===tags.length-1 ? (tag) : (tag + ",")} </span>
      )
    })
    return (
      <BlogCard>
        <img src={img} alt="blog-img"/>
        <div className="card-info">
          <h3>{title}</h3>
          <p className='muted'>{parsedDate}</p>
          <p>Tags: {parsedTags} </p>
          <p>{story.slice(0, 100) + "..."}</p>
        </div>
      </BlogCard>
    )
  }
}


const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: grey solid 1px;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 6px 0px grey;
  }

  img {
    flex: 1 1 70%;
    width: 100%;
    object-fit: cover;
  }
  .card-info {
    padding: 0 1rem 1rem 1rem;
    flex: 1 1 30%;

    h3 {
      font-size: 1.75rem;
      margin: 0.5rem 0;
    }

    p {
      margin: 0.25rem 0;
    }
  }

`

BlogItem.propTypes = {
  blog:PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    dateCreated: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    story: PropTypes.string,
  }).isRequired
};

export default BlogItem;
