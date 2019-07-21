import React from 'react';
import Aside from './Shared/Aside';
import { PageContainer, PageContent, Main } from './Shared/StyledComponents';
import BlogList from './BlogList';

function BlogPage() {
  return (
    <PageContainer>
      <PageContent>
        <Main>
          <div>
            <BlogList/>
          </div>
        </Main>
        <Aside/>
      </PageContent>
    </PageContainer>
  )
}

export default BlogPage;
