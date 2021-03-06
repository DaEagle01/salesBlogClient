import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const LeaveComment = ({ id }) => {
    // console.log(id)
    const { register, handleSubmit, reset } = useForm();

    const [comments, setComments] = useState([])

    const onSubmit = (data) => {
        let now = new Date()
        data.date = now.toDateString();
        data.blogId = id;
        console.log(data)
        fetch(`https://salesblogapi.herokuapp.com/comments`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data)
                    alert("Congratulation! Your comment has been published successfully!");
                    reset();
                }
            });
    };

    useEffect(() => {
        fetch('https://salesblogapi.herokuapp.com/comments')
            .then(res => res.json())
            .then(info => setComments(info))
    }, [comments])

    const comment = comments.filter(feedback => feedback.blogId === id)


    return (
        <>
            <div className="container px-8 md:px-36 font-sans antialiased bg-gray-50 dark:bg-gray-900 py-8">
                <div className="px-8 md:mr-16">
                    <p className="font-sans font-bold text-2xl leading-none my-4 text-gray-900 dark:text-white">
                        Discussion

                        <span className="ml-2 text-base font-normal text-gray-600 dark:text-gray-400">{comment.length}
                            comment</span>

                    </p>
                </div>

                {comment.map(com => {
                    return <div className="px-2 md:px-8 py-4" key={com?._id}>
                        <div className="flex">
                            <div className="w-10 h-10 bg-cover bg-center rounded-full mr-3 shadow-inner">
                                <img src={com?.img} alt="pic" className="overflow-hidden h-10 w-10" />
                            </div>
                            <div>

                                <p className="text-gray-900 dark:text-white font-medium">{com?.email}</p>

                                <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                                    <p>
                                        {com?.date}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                                {com?.comment}
                            </p>
                        </div>
                    </div>
                })}


                <div className="flex px-8">

                    <div className="w-full md:w-1/ 4 commentForm">
                        <p className="font-sans font-bold text-2xl leading-none my-2 text-gray-900 dark:text-white">Leave a comment
                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col justify-center w-full space-y-4 px-8"
                        >
                            <label className="block" htmlFor="id_name">Enter your name/email:</label>
                            <input
                                {...register("email", {
                                    required: "Required",
                                })}
                                required
                                placeholder="Your email or name..."
                                className=" rounded-1 p-2 shadow-md dark:border-gray-700 text-gray-600 dark:text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400" id="id_name"
                            />
                            <label className="block" htmlFor="id_body">Enter your message:</label>
                            <textarea
                                {...register("comment", {
                                    required: "Required",
                                })}
                                required
                                placeholder="Write your comment..."
                                className=" rounded-1 p-2 shadow-md h-48 dark:border-gray-700 text-gray-600 dark:text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400"
                                rows={12}
                                id="id_body"
                            />

                            <input
                                className="bg-teal-500 mt-4 text-white active:bg-teal-400 rounded shadow hover:shadow-lg outline-none focus:outline-none h-auto text-lg font-bold p-3 w-1/6"
                                type="submit"
                                placeholder="Publish"
                                value={"Comment"}
                            />
                        </form>



                    </div>
                </div>
            </div>

        </>
    );
};

export default LeaveComment;
