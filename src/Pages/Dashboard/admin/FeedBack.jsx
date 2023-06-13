import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxios";
import { toast } from "react-toastify";

const FeedBack = ({ updateId }) => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    const response = await axiosSecure.patch(`/classes/feedback/${updateId}`, {
      feedback: data.message,
    });
    if (response.data.modifiedCount > 0) {
      toast.success("Feedback sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      
      <dialog id="my_modal_3" className="modal">
        <form onSubmit={handleSubmit(onSubmit)}  method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg mb-5">Provide Feedback!</h3>
          <div className="form-control">
            <textarea {...register("message")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
          </div>
          <div className="modal-action">
            <input className="btn" type="submit" value="Send Feedback" />
          </div>
        </form>
      </dialog>
    </>
  );
};

export default FeedBack;
