import React from "react";

export default function ChunkFiles() {
  return (
    <div class="wrapper">
      <div class="section started"></div>

      <div class="section works">
        <div class="content">
          <h2> All about Chunk Files You Need To Know In React!</h2>
        </div>
        <p>
          All the code gets complied into chunk files, and is loaded at the
          first page you visit I.e. irrespective of page you visit, you complete
          code will be loaded up at that page only. You don't feel the lag as
          this only happens once in a while because of caching as all these
          files get cached. <br />
          <br />
          So the new users or incognito users might face more time that taken by
          the user who visits the site again. In simple terms this happens only
          once.
          <br /> <br />
          <h3>What's inside Chunk Files?</h3>
          Number Chunk: Node Modules
          <br /> Main Chunk: Your Code
          <br />
          <br />
          <h3>Ways To Reduce Chunk Files</h3>
          <ul style={{ listStyle: "disc" }}>
            <li>
              Use CDN for static files like images (that includes in src){" "}
              <li>Remove unused and unwanted libraries (depcheck) </li>
              <li>Minify (if not) CHUNK fles (Uglify webpack plugin)</li>
              <li>
                {" "}
                Lazy load routes(code-splitting) and images (loading=“lazy”){" "}
              </li>
              <li>
                Serve gzipped files (nginx configuration) (Major Impact on size)
              </li>
              <li>Remove duplicate code and reuse</li>
            </li>
          </ul>
          <i>
            Note* Use chunk file analyzers to check what’s inside chunk files
            like source-map-explorer, cra-bundle-analyzer
          </i>
          <br />
          <br />
          <h3>
            Libraries Used: <br />{" "}
          </h3>
          1) Depcheck
          <br />
          2) Chunk Analyzers: Cra-bundle-analyzer Or source-map-explorer
          <br /> <br />
          <h4>Depcheck</h4>
          <p>
            Used to find unused libraries in the code.
            <br />
            $ npm install -g depcheck
            <br /> $ Depcheck
          </p>
          <h4>Cra-bundle-analyzer</h4> $ npm install --save-dev
          webpack-bundle-analyzer cra-bundle-analyzer
          <br /> $ npx cra-bundle-analyzer
          <br />
          <br />
          <h4> source-map-explorer</h4> $ npm install --save-dev
          source-map-explorer <br />$ Cd build/static/js <br />$
          source-map-explorer *.js
        </p>
        <h3>How to enable GZIP compression on NGINX server?</h3>
        Add this code to NGINX config to enable gzip compression gzip on;
        gzip_vary
        <br />
        on; gzip_min_length 10240; gzip_proxied expired no-cache no-store
        <br />
        private auth; gzip_types text/plain text/css text/xml text/javascript
        <br />
        application/x-javascript application/javascript application/xml;
        <br />
        gzip_disable "MSIE [1-6]\.";
        <br />
      </div>
    </div>
  );
}
