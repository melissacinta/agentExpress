import { ChangeEvent, useState, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import useComments from '../hooks/useComments';
import Spinner from './Spinner';
const Comments = () => {
  const { comments, addNewComment, id, isLoading } = useComments();
  const [newComment, setNewComment] = useState({
    title: '',
    comment: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddComment = () => {
    if (newComment.title && newComment.comment) {
      addNewComment.mutate({ ...newComment, id });
      setNewComment({
        title: '',
        comment: '',
      });
    }
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center  mb-4">
        <h2 className="text-xl font-bold">My Comments</h2>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-full bg-gradient-linear hover:bg-gradient-rev transition-all duration-500 ease-in-out text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 px-4 py-2`}
              >
                New Comment
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 w-screen max-w-xs md:max-w-sm transform px-4 sm:px-0 bg-white dark:bg-primary-dark rounded-xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-semibold mb-2">
                        Add a Comment
                      </h3>
                      <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={newComment.title}
                        onChange={handleInputChange}
                        disabled={addNewComment.isLoading}
                        className="w-full px-4 py-2 dark:bg-primary-dark  rounded-full border-2 border-gray-300 mb-2"
                      />
                      <textarea
                        name="comment"
                        placeholder="Comment"
                        value={newComment.comment}
                        onChange={handleInputChange}
                        disabled={addNewComment.isLoading}
                        className="w-full px-4 py-2 dark:bg-primary-dark  rounded-2xl border-2 border-gray-300 mb-2"
                        rows={4}
                      ></textarea>
                      <button
                        onClick={handleAddComment}
                        disabled={addNewComment.isLoading}
                        className="bg-gradient-linear hover:bg-gradient-rev transition-all duration-500 ease-in-out text-white px-4 py-2 rounded-full"
                      >
                        {addNewComment.isLoading ? <Spinner /> : 'Add Comment'}
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>

      {isLoading ? (
        <div className="min-h-[6.25rem] flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <ul className="grid md:grid-cols-2 gap-x-4">
          {comments?.map((comment, index) =>
            comment.title ? (
              <li
                key={index}
                className="bg-gradient-dark p-4 mb-4 rounded-md shadow"
              >
                <h3 className="text-lg font-semibold">{comment.title}</h3>
                <p className="mt-2">{comment.comment}</p>
              </li>
            ) : (
              []
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Comments;
