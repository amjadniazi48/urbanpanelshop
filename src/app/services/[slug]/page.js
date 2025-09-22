import React from 'react'
const Page = ({ params }) => {
  return (
    <div className="mb-5" style={{ marginTop: "5rem" }}>
      this is my {params.slug}
    </div>
  );
};

export default Page;