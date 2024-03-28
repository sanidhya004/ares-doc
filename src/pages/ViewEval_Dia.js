import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetEvalDiaForm } from "../features/apiCall";

const ViewEval_Dia = () => {
  const Eval_Dia_form = useSelector((state) => state.fetch_app.Eval_Dia_form);
  const isFetching = useSelector((state) => state.fetch_app.isFetching);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { appointmentId } = useParams();

  const fetchData = async () => {
    try {
      await GetEvalDiaForm(dispatch, { appointmentId });
    } catch (error) {
      console.error("Error fetching profile details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, navigate]);

  return (
    <DoctorMenu>
      <div className="p-3 main-wrapper mt-2 booking-presc">
        <div className="frame" style={{ overflowY: "scroll" }}>
          <div className="recent-booking-head">
            <div style={{ paddingLeft: "15px" }}>
              <h2 className="text-gradient text-uppercase">
                View Evaluation Form
                <h6>APPOINTMENT ID- {Eval_Dia_form?.appointmentId}</h6>
              </h2>
            </div>
          </div>
          <br />
          <div className="recent-booking-head">
            <div style={{ paddingLeft: "15px" }}>
              <h2 className="text-gradient text-uppercase">
                View Diagnosis Form
                <h6>APPOINTMENT ID- {Eval_Dia_form?.appointmentId}</h6>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </DoctorMenu>
  );
};

export default ViewEval_Dia;
