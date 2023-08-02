import React, { useEffect, useState } from "react";

function NotFound() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 milliseconds (3 seconds) wait time, you can adjust this value as per your preference

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* Add your custom 404 content here */}
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      )}
    </div>
  );
}

export default NotFound;
