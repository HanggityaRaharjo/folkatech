import { useEffect, useState } from "react";
import LayoutAuthentication from "../../components/LayoutAuthentication";
import { Input, Form } from "../../components/Form";
import Button from "../../components/Actions/Button";
import TitleAuthentication from "../../components/TitleAuthentication";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setFadeIn(true);
  }, []);
  const HandleSubmitFormNext = (data) => {
    localStorage.setItem("register_username", JSON.stringify(data));
    navigate("/register/password");
  };
  return (
    <>
      <LayoutAuthentication>
        <section className="min-h-screen font-gotham font-normal flex justify-center items-center">
          <div
            className={`w-[568px] h-[560px] bg-white shadow-[0px_1px_12px_0px_#00000040] pt-[42px] px-[34px] py-[46px] rounded-[10px] fade-in-out ${
              fadeIn ? "fade-in" : "fade-out"
            }`}
          >
            <TitleAuthentication>Daftar Sekarang</TitleAuthentication>
            <Form onSubmit={HandleSubmitFormNext}>
              <Input
                className="mb-[25px]"
                name="first_name"
                placeholder="Nama Depan"
              />
              <Input
                className="mb-[25px]"
                name="last_name"
                placeholder="Nama Belakang"
              />
              <Input
                className="mb-[46px]"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Button
                type="submit"
                className="text-white leading-[17.23px] text-lg font-[500]"
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
    </>
  );
};

export default RegisterPage;
