import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxios";
import { toast } from "react-toastify";

const FeedBack = ({ updateId }) => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit,reset } = useForm();
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
      reset()
    }
  };
  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">Provide Feedback!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mb-2">
              <textarea {...register("message")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            </div>
            <input className="btn" type="submit" value="Send Feedback" />
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default FeedBack;
