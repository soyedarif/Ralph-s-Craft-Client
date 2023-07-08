import SectionHeader from "../../../components/SectionHeader";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";

const AddaClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const newCourse = {
      course: data.class,
      classImg: data.classImg,
      instructor: user?.displayName,
      seat: parseInt(data.seat),
      price: parseFloat(data.price),
      instructorEmail: user?.email,
    };
    axiosSecure.post("/classes", newCourse).then(res => {
      const data = res.data;
      if (data?.insertedId) {
        toast.success(`${newCourse.course} Course Added`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
      }
    });
  };
  return (
    <>
      <SectionHeader header="Add Class" description="Make sure you fulfill all the requirements"></SectionHeader>
      <form onClick={handleSubmit(onSubmit)} className=" card-body">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input type="text" placeholder="class name" className="input input-bordered" {...register("class", { required: true })} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image URL</span>
            </label>
            <input type="text" placeholder="class imageURL" className="input input-bordered" {...register("classImg", { required: true })} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input type="text" readOnly defaultValue={user?.displayName} placeholder="class imageURL" className="input input-bordered" {...register("instructor", { required: true })} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor email</span>
            </label>
            <input type="text" readOnly defaultValue={user?.email} placeholder="class imageURL" className="input input-bordered" {...register("instructorEmail", { required: true })} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="number" placeholder="Course Price" className="input input-bordered" {...register("price", { required: true })} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seats Counts</span>
            </label>
            <input type="number" placeholder="seats" className="input input-bordered" {...register("seat", { required: true })} />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-red-500 text-white hover:text-black" type="submit" value="Add Class" />
        </div>
      </form>
    </>
  );
};

export default AddaClass;
