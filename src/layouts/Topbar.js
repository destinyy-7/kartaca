import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Search,ShoppingCart} from "@mui/icons-material";
import { Logout } from "../redux/actions/Auth";

const Topbar = () => {
  
  const state = useSelector((state) => state.user?.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logout = async (e) => {
    e.preventDefault();
    try {
      await dispatch(Logout(state));
      navigate("/");
      toast.success("Çıkış yapıldı", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }; 
  return (
    <>

<div className="navbar h-[60-px] shadow-md relative z-10">
        <div
          className="wrapper p1-[20px] pr-[20px] pt-[10px] pb-[10px]
            flex justify-between items-center "
        >
          <div className="left flex flex-1 items-center">
            <div className="language cursor-pointer text-[16px]">Ara</div>
            <div className="searchInput flex border-[2px] border-solid border-lighgrey 
            rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
              <input className="input outline-none"
                type='text'/> 
              <Search className="" style={{fontSize:'16px'}}/>
            </div>
          </div>
          <div className="center flex-1 text-center">
          <Link to={`/homepage`} variant="body2">
            <div className="logo font-bold text-lg ">KARTACA</div>
            </Link>
          </div>
          <div className="right flex flex-1 items-center justify-end">
          <Link to={`/signUp`} variant="body2">
            <Button className=" text-[14px] cursor-pointer ml-[25px]">Sign Up</Button>
            </Link>
            <Link to={`/`} variant="body2">
            <Button className="text-[14px] cursor-pointer ml-[25px]">Sign in</Button>
            </Link>
            <Button 
            className="text-[14px] cursor-pointer ml-[25px]"
            onClick={logout}>Exit</Button>
            <Button className="text-[14px] cursor-pointer ml-[25px]">
            <badge badgeContent={2} color='primary'>
              <ShoppingCart/>
            </badge>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
