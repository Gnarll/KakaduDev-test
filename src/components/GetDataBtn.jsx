import { useDispatch } from "react-redux";
import { requestData } from "../redux/actions/data";
import "./index.css";

export const GetDataBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button className="get-data-btn" onClick={() => dispatch(requestData())}>
        Get Data
      </button>
    </>
  );
};
