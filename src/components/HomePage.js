import React from 'react';
import Aside from './Shared/Aside';
import { PageContainer, PageContent, Main } from './Shared/StyledComponents';


function HomePage() {
  return (
    <PageContainer>
      <PageContent>
        <Main>
          <div>Hello from Home</div>
        </Main>
        <Aside/>
      </PageContent>
    </PageContainer>
  )
}

export default HomePage;
