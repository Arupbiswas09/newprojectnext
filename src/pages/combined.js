import React from 'react';
import RedirectChecker from './redirect-checker';
import CheckRedirects from './check-redirects';

export default function CombinedPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Combined Page</h1>
      <RedirectChecker />
      <hr style={{ margin: '20px 0' }} />
      <CheckRedirects />
    </div>
  );
}
