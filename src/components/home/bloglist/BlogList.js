import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {

  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('https://salesblogapi.herokuapp.com/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  console.log(blogs)
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />

      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Latest Blog
                </h2>
                <p className="text-base text-body-color">
                  Read our blogs to have a broader perspective about everything!
                </p>
              </div>
            </div>
          </div>



          <div className="flex flex-wrap -mx-4">
            {blogs.map(blog => {
              return <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={blog?._id}>
                <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                    <img
                      src={blog?.coverimage}
                      alt="cover img" style={{ height: '200px', width: '350px' }}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h1
                      className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                    >
                      {blog?.date}
                    </h1> <br />
                    <Link to={`bloglist/${blog?._id}`}>   <h3
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        ">
                      {blog?.title}
                    </h3> </Link>
                    <p className="text-base text-body-color">
                      {blog?.mainblog.slice(0, 80)}...
                    </p>
                  </div>
                </div>


              </div>
            })}


          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
