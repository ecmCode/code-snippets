import { Metadata } from "next/types";

export const metadata : Metadata = {
  title: "Snippets",
}

export default function Page() {
  return (
    <div>
      <h1>Snippets</h1>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>Python</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
}
