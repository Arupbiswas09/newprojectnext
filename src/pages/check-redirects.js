import { useEffect, useRef } from "react";
import RedirectChecker from "./redirect-checker";

export default function CheckRedirects() {
  const pageTwoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pageTwoRef.current) {
        const pageTwoTop = pageTwoRef.current.getBoundingClientRect().top;
        if (pageTwoTop < window.innerHeight / 2) {
          pageTwoRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      {/* Page One */}
      <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg font-sans">
        <h1 className="text-2xl font-bold">Check Your Redirects and Status Code</h1>
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
            <option value="ArupBot">ArupBot</option>
          </select>
        </div>

        <p className="text-gray-300 mt-4">
          Check your URL redirect for accuracy. Do you use search engine friendly redirections like 301 or do you lose link juice for SEO by redirects using HTTP Statuscode 302? Check now!
        </p>

        {}
        <div className="mt-10 text-center">
          <a
            href="#page-two"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Scroll to Page Two ⬇
          </a>
        </div>
      </div>

      {}
      <div ref={pageTwoRef} id="page-two" className="mt-10">
        <RedirectChecker />
      </div>
    </div>
  );
}
