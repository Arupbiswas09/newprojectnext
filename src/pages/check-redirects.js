import React from 'react';

export async function getServerSideProps() {
  return { props: {} };
}

export default function CheckRedirects() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg font-sans">
      <h1 className="text-2xl font-bold">Check Your Redirects and Statuscode</h1>
      <p className="text-lg italic mt-2">301 vs 302, meta refresh & JavaScript redirects</p>

      <div className="mt-4">
        <input
          type="text"
          placeholder="please add http:// or https://"
          className="w-full px-4 py-2 text-gray-900 rounded-md border border-gray-400"
        />
      </div>

      <button className="mt-4 px-6 py-2 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 transition">
        Analyse
      </button>

      <h2 className="text-xl font-semibold mt-6">Redirect Checker Options:</h2>
      <p className="text-gray-300 mt-2">
        You can check your redirect with a specific user-agent. Just select the browser user-agent you want for your redirects.
      </p>

      <div className="mt-4">
        <label htmlFor="userAgent" className="mr-2">Set User-Agent:</label>
        <select id="userAgent" className="px-4 py-2 text-gray-900 rounded-md border border-gray-500">
          <option value="DEFAULT (ToolBot)">DEFAULT (ToolBot)</option>
          <option value="GoogleBot">GoogleBot</option>
          <option value="BingBot">BingBot</option>
          <option value="Mozilla/5.0 (Chrome)">Mozilla/5.0 (Chrome)</option>
          <option value="Mozilla/5.0 (Firefox)">Mozilla/5.0 (Firefox)</option>
        </select>
      </div>

      <p className="text-gray-300 mt-4">
        Check your URL redirect for accuracy. Do you use search engine friendly redirections like 301 or do you lose link juice for SEO by redirects using HTTP Statuscode 302? Check now!
      </p>
    </div>
  );
}
