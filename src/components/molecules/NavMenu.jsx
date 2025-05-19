import { FaRegPenToSquare } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

function NavMenu() {
  const { handleSubmit, register } = useForm();
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function onSubmit(data) {
    navigate("/");
    setSearchParams(data);
  }

  return (
    <div className="flex w-full h-20 fixed top-0 bg-white justify-between items-center shadow-md  px-[30px]">
      <div className="flex gap-5 justify-center items-center">
        <Link to="/">
          <h1 className="text-5xl font-extrabold font-serif">Medium</h1>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            id="search"
            type="text"
            {...register("search")}
            placeholder="Search"
            className="w-[384px] h-[34px] rounded-full py-[5px] px-[24px] bg-white border border-black hover:border-orange-500"
            autoFocus
          />
          <button type="submit" className="hidden">
            Search
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <FaRegPenToSquare /> <span className="font-light">Write</span>
        <div className="flex justify-center items-center ml-10">
          <h1 className="text-2xl font-bold">Setya</h1>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
