import { useEffect, useState } from "react";
import LayoutAuthentication from "../../components/LayoutAuthentication";
import { Input, Form } from "../../components/Form";
import Button from "../../components/Actions/Button";
import TitleAuthentication from "../../components/TitleAuthentication";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PasswordRegisterPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const navigate = useNavigate();

  const HandlePreviousPage = () => {
    localStorage.removeItem("register_username");
    navigate("/register");
  };

  const HandleRegister = (data) => {
    const storageData = JSON.parse(localStorage.getItem("register_username"));
    const dataStructure = {
      first_name: storageData.first_name,
      last_name: storageData.last_name,
      email: storageData.email,
      password: data.password,
      confirmation_password: data.confirmation_password,
    };

    axios
      .post("http://localhost:5000/register", dataStructure)
      .then(({ data }) => {
        localStorage.removeItem("register_username");
        navigate("/");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("register_username")) {
    } else {
      localStorage.removeItem("register_username");
      navigate("/register");
    }

    setFadeIn(true);
  }, []);
  return (
    <LayoutAuthentication>
      <section className="min-h-screen font-gotham font-normal flex justify-center items-center">
        <div
          className={`w-[568px] h-[509px] bg-white shadow-[0px_1px_12px_0px_#00000040] pt-[42px] px-[34px] py-[46px] rounded-[10px] fade-in-out ${
            fadeIn ? "fade-in" : "fade-out"
          }`}
        >
          <button
            onClick={() => HandlePreviousPage()}
            className="flex gap-[5px] items-center  mb-[25px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L7.41421 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H7.41421L12.7071 5.70711Z"
                fill="#730C07"
              />
            </svg>
            <h3 className="text-[18px] font-[900] leading-[24.88px] text-secondary">
              Kembali
            </h3>
          </button>
          <Form onSubmit={HandleRegister}>
            <Input
              className="mb-[25px]"
              placeholder="Nomor Telepon"
              name="phone_number"
            />
            <Input
              type="password"
              className="mb-[20px]"
              placeholder="Password"
              name="password"
            />
            <Input
              type="password"
              className="mb-[20px]"
              placeholder="Konfirmasi Password"
              name="confirmation_password"
            />

            <Button
              className="text-white leading-[17.23px] text-lg font-[500]"
              type={"submit"}
            >
              Selanjutnya
            </Button>
            <div className="flex justify-center mb-[39px]">
              <div className="h-[1px] bg-[#C2C2C2] w-[420px]"></div>
            </div>
          </Form>
          <Link to={"/"} className="flex justify-center w-full">
            <p>
              Belum punya akun?
              <span className="font-bold text-secondary"> Masuk</span>
            </p>
          </Link>
        </div>
      </section>
    </LayoutAuthentication>
  );
};

export default PasswordRegisterPage;
