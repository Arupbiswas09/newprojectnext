import { useState } from "react";
import CheckRedirects from "./check-redirects";
import RedirectChecker from "./redirect-checker";

export default function CombinedPage() {
  const [activePage, setActivePage] = useState("page1");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold">Bulk Redirect Checker Tool</h1>
      <div className="flex space-x-4 mt-6">
        <button
          className={`px-4 py-2 rounded-lg ${activePage === "page1" ? "bg-green-500" : "bg-gray-600"}`}
          onClick={() => setActivePage("page1")}
        >
          Page One
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activePage === "page2" ? "bg-green-500" : "bg-gray-600"}`}
          onClick={() => setActivePage("page2")}
        >
          Page Two
        </button>
      </div>

      <div className="mt-6 w-full max-w-2xl">
        {activePage === "page1" ? <CheckRedirects /> : <RedirectChecker />}
      </div>
    </div>
  );
}
