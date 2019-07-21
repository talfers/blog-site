import React from 'react';
import Aside from './Shared/Aside';
import { PageContainer, PageContent, Main } from './Shared/StyledComponents';

function AboutPage() {
  return (
    <PageContainer>
      <PageContent>
        <Main>
          <div>Hello from About</div>
        </Main>
        <Aside/>
      </PageContent>
    </PageContainer>
  )
}

export default AboutPage;
