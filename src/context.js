import React from 'react';
import { blogList, blogDetails } from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    blogs: [],
    blogDetails: blogDetails
  };

  componentDidMount() {
    this.setStories();
  }

  setStories = () => {
    let tempStories = [];
    blogList.forEach(story => {
      const singleItem = {...story};
      tempStories = [...tempStories, singleItem]
    });
    this.setState({blogs: tempStories});
  }

  getItem = (id) => {
    const blog = this.state.blogs.find(item => item.id === id);
    return blog;
  }

  handleDetail = (id) => {
    const blog = this.getItem(id);
    this.setState({blogDetails: blog});
  }

  render () {
    return(
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
