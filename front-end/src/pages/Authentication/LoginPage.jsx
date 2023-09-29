import { useEffect, useState } from "react";
import LayoutAuthentication from "../../components/LayoutAuthentication";
import { Input, Form } from "../../components/Form";
import Button from "../../components/Actions/Button";
import TitleAuthentication from "../../components/TitleAuthentication";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../../store/AuthStore";

const LoginPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const authenticate = useAuthStore((state) => state.setAuth);
  const user = useAuthStore((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    if (user.isAuth) {
      navigate("/home");
    }
  }, [user.isAuth]);

  const HandleSubmitLogin = async (data) => {
    const dataStructure = data;
    await axios
      .post("http://localhost:5000/login", dataStructure)
      .then(({ data }) => {
        authenticate(data.accessToken);
      });
  };
  return (
    <LayoutAuthentication>
      <section className="min-h-screen font-gotham font-normal flex justify-center items-center">
        <div
          className={`w-[568px] h-[509px] bg-white shadow-[0px_1px_12px_0px_#00000040] pt-[42px] px-[34px] py-[46px] rounded-[10px] fade-in-out ${
            fadeIn ? "fade-in" : "fade-out"
          }`}
        >
          <TitleAuthentication>Masuk</TitleAuthentication>
          <Form onSubmit={HandleSubmitLogin}>
            <Input
              className="mb-[25px]"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Input
              type="password"
              name="password"
              className="mb-[20px]"
              placeholder="Password"
            />
            <div className="flex justify-end mb-[30px]">
              <button>
                <span className="text-secondary text-xs text-right font-[500]">
                  Lupa Password?
                </span>
              </button>
            </div>
            <Button
              className="text-white leading-[17.23px] text-lg font-[500]"
              type={"submit"}
            >
              MASUK
            </Button>
            <div className="flex justify-center mb-[39px]">
              <div className="h-[1px] bg-[#C2C2C2] w-[420px]"></div>
            </div>
          </Form>
          <Link to={"/register"} className="flex justify-center w-full">
            <p>
              Belum punya akun?
              <span className="font-bold text-secondary"> Daftar Sekarang</span>
            </p>
          </Link>
        </div>
      </section>
    </LayoutAuthentication>
  );
};

export default LoginPage;
