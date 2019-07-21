import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import BlogItem from './BlogItem';
import { Link } from 'react-router-dom';

function BlogList() {
  return (
    <BlogGrid>
        <ProductConsumer>
          {value => {
            return value.blogs.map((blog) => {
              return (
                <Link onClick={() => value.handleDetail(blog.id)} key={blog.id} to="/details">
                  <BlogItem key={blog.id} blog={blog} />
                </Link>
              )
            })
          }}
        </ProductConsumer>
    </BlogGrid>
  )
}

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
  grid-gap: 1rem;

`

export default BlogList;
