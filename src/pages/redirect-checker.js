import { useState } from "react";

export default function RedirectChecker() {
  const [url, setUrl] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h1 className="text-4xl font-bold">Check Your Redirects and Status Code</h1>
      <p className="text-lg italic mt-2">301 vs 302, meta refresh & JavaScript redirects</p>

      <div className="flex mt-6 w-full max-w-lg">
        <input
          type="text"
          placeholder="please add http:// or https://"
          className="w-full px-4 py-2 rounded-md border border-gray-400 text-gray-900"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg">
          Analyse
        </button>
      </div>

      <p className="mt-4 text-gray-300">add http:// or https:// on your URL.</p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Redirect Checker Options:</h2>
        <p className="text-gray-300 mt-2">
          You want to check your redirect with a specific user-agent. Just select the browser user-agent to test your redirect.
        </p>

        <select className="mt-2 px-4 py-2 border border-gray-500 text-gray-900 rounded-md">
          <option>DEFAULT (ToolBot)</option>
          <option>Google Chrome</option>
          <option>Mozilla Firefox</option>
        </select>
      </div>
    </div>
  );
}
