
const Instructor = ({ instructor }) => {
  const { name, assignedClass, email, photoUrl } = instructor;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-72 object-cover" src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-red-600">{name}</h2>
          <p><span className="text-red-600 font-semibold">Email</span>: {email}</p>
          <p><span className="text-red-600 font-semibold">Class</span>: {assignedClass}</p>
        </div>
      </div>
    </>
  );
};

export default Instructor;
