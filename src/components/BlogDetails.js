import React from 'react';
import { ProductConsumer } from '../context';
import { PageContainer } from './Shared/StyledComponents';
import styled from 'styled-components';


class BlogDetails extends React.Component {
  render () {
    return (
      <ProductConsumer>
        {(value) => {
          const { title, img, dateCreated, tags, story } = value.blogDetails;
          return (
            <PageContainer>
              <Detail>
                <DetailImg>
                  <img src={img} alt="detail-img"/>
                </DetailImg>
                <DetailCard>
                  <h1>{title}</h1>
                  <p>{dateCreated}</p>
                  <p>{tags}</p>
                  <p>{story}</p>
                </DetailCard>
              </Detail>
            </PageContainer>
          )
        }}
      </ProductConsumer>
    )
  }
}

const Detail = styled.div`
  background: #f5f5f5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const DetailImg = styled.div`
  width: 100%;


  img {
    height: 100%;
    width: 100%;
  }
`

const DetailCard = styled.div`
  padding: 40px;
  text-align: center;
  background: #fff;
  width: 60%;
  box-shadow: 0px 0px 8px 1px grey;
  transform: translateY(-30%);
`

export default BlogDetails;
