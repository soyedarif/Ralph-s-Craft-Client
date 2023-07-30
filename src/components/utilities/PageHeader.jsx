import { Fade } from "react-awesome-reveal";
const PageHeader = ({ heading, children }) => {
  return (
    <>
      <div className={`h-[350px] p-header text-center grid place-content-center bg-cover bg-fixed bg-center `}>
        <Fade triggerOnce direction="right">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent tracking-tighter bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B] mb-4">{heading}</h1>
            <div className="breadcrumbs text-white w-fit mx-auto">
              <ul>{children}</ul>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default PageHeader;
