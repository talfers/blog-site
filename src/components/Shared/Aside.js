import React from 'react';
import { AsideContainer } from './StyledComponents';

function Aside() {
  return (
        <AsideContainer>
          <div id="aside-img"><img src={"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"} alt="author"/></div>
          <div id="aside-blogs"></div>
          <div id="aside-tags"></div>
        </AsideContainer>
  )
}

export default Aside;
