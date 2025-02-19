import React from 'react';

export async function getServerSideProps() {
  return { props: {} };
}

export default function Home() {
  return (
    <div style={{ margin: '20px auto', maxWidth: '700px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px' }}>Bulk Redirect Checker Tool</h1>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Check Bulk HTTP Header Responses &amp; Redirect Chains for multiple URLs
      </p>
      <div style={{ marginBottom: '15px' }}>
        <textarea
          placeholder="Add your list of URLs. Max 100 URLs can be checked."
          rows="6"
          style={{ width: '100%', padding: '10px', fontSize: '14px' }}
        />
      </div>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '14px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        analyse
      </button>
      <h2 style={{ fontSize: '18px', marginTop: '30px' }}>Redirect Checker Options:</h2>
      <p style={{ fontSize: '14px' }}>
        You can check bulk redirects with a specific user-agent. Just select another browser user-agent you want for your redirects.
      </p>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="userAgent" style={{ marginRight: '10px' }}>
          Set User-Agent:
        </label>
        <select id="userAgent" style={{ fontSize: '14px', padding: '5px' }}>
          <option value="DEFAULT (ToolBot)">DEFAULT (ToolBot)</option>
          <option value="GoogleBot">GoogleBot</option>
          <option value="BingBot">BingBot</option>
          <option value="Mozilla/5.0 (Chrome)">Mozilla/5.0 (Chrome)</option>
          <option value="Mozilla/5.0 (Firefox)">Mozilla/5.0 (Firefox)</option>
        </select>
      </div>
      <p style={{ fontSize: '14px' }}>
        Check your URL redirect for accuracy. Do you use search engine friendly redirections like 301 or do you lose link juice for SEO by redirects using HTTP Statuscode 302? Check now!
      </p>
    </div>
  );
}
