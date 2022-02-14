import React from "react";
import { useForm } from "react-hook-form";

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    
   
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    let now = new Date()
    data.date = now.toDateString();
    console.log(data)
    fetch("https://salesblogapi.herokuapp.com/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Congratulation! Your blog Has been published successfully!");
          reset();
        }
      });
  };

  return (
    <>

      <div className="mt-8 mb-48">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center w-screen  space-y-4 px-8"
        >
          <input
            {...register("title", {
              required: "Required",
            })}
            required
            placeholder="Title of your blog..."
            className=" rounded-1 p-2 shadow-md "
          />
          <input
            {...register("coverimage", {
              required: "Required",
            })}
            required
            placeholder="Cover image URL..."
            className=" rounded-1 p-2 shadow-md "
          />
          <textarea
            {...register("mainblog", {
              required: "Required",
            })}
            required
            placeholder="Write blog..."
            className=" rounded-1 p-2 shadow-md h-96 "
            rows={12}

          />

          <input
            className="bg-green-400 text-whit text-xl font-bold rounded-pill px-4 rounded-xl py-2 text-lg mt-4 w-1/6"
            type="submit"
            placeholder="Publish"
            value={"Publish"}
          />
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
