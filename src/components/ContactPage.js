import React from 'react';
import Aside from './Shared/Aside';
import { PageContainer, PageContent, Main } from './Shared/StyledComponents';

function ContactPage() {
  return (
    <PageContainer>
      <PageContent>
        <Main>
          <div>Hello from Contact</div>
        </Main>
        <Aside/>
      </PageContent>
    </PageContainer>
  )
}

export default ContactPage;
