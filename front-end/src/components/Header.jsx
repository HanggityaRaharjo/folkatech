import React, { useEffect, useState } from "react";
import useFetchData from "../utils/useFetchData";
import useFormatNumber from "../utils/useFormatNumber";
import useAuthStore from "../store/AuthStore";

const Header = () => {
  const [isShowChart, setIsShowChart] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);
  const [chartData, setChartData] = useState([]);
  const user = useAuthStore((state) => state);
  const user_id = user.id;

  const GetAllCartProductByUserId = async () => {
    const data = await useFetchData(
      `http://localhost:5000/cart/user/${user_id}`
    );
    setChartData(data.data);
  };

  const HandleLogout = () => {
    user.Logout();
  };

  useEffect(() => {
    GetAllCartProductByUserId();
  }, []);

  return (
    <header className="bg-white h-[112px] border flex items-center justify-end px-[46px]">
      <div className="flex items-center gap-[25px]">
        <div className="flex items-center rounded-[9px] shadow-[0px_4px_4px_0px_#0000001A] overflow-hidden">
          <input
            type="text"
            className=" w-[521px] rounded-l-[9px] px-6 h-[57px] outline-none "
            placeholder="Cari produk"
          />
          <button className="w-[85px] h-[57px] bg-primary flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="search">
                <path
                  id="Vector (Stroke)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z"
                  fill="white"
                />
                <path
                  id="Vector (Stroke)_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.9429 15.9429C16.3334 15.5524 16.9666 15.5524 17.3571 15.9429L21.7071 20.2929C22.0977 20.6834 22.0977 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.9429 17.3571C15.5524 16.9666 15.5524 16.3334 15.9429 15.9429Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </div>
        <button>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="heart">
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.1559 2.70302C17.0104 2.34893 17.9264 2.16669 18.8514 2.16669C19.7764 2.16669 20.6923 2.34893 21.5469 2.70302C22.4013 3.05704 23.1775 3.57589 23.8314 4.22995C24.4855 4.8838 25.0047 5.66045 25.3587 6.51484C25.7128 7.36939 25.895 8.28533 25.895 9.21033C25.895 10.1353 25.7128 11.0513 25.3587 11.9058C25.0046 12.7603 24.4857 13.5366 23.8316 14.1905C23.8315 14.1906 23.8316 14.1905 23.8316 14.1905L14.2549 23.7672C13.8318 24.1903 13.1459 24.1903 12.7228 23.7672L3.14618 14.1905C1.82535 12.8697 1.08331 11.0783 1.08331 9.21033C1.08331 7.34239 1.82535 5.55096 3.14618 4.23013C4.46701 2.9093 6.25844 2.16727 8.12638 2.16727C9.99432 2.16727 11.7857 2.9093 13.1066 4.23013L13.4889 4.61243L13.871 4.23031C13.8709 4.23037 13.8711 4.23025 13.871 4.23031C14.5249 3.57617 15.3014 3.05707 16.1559 2.70302ZM18.8514 4.33335C18.211 4.33335 17.5769 4.45953 16.9853 4.70466C16.3937 4.9498 15.8561 5.30909 15.4034 5.76202L14.2549 6.91053C13.8318 7.3336 13.1459 7.3336 12.7228 6.91053L11.5745 5.7622C10.66 4.8477 9.41968 4.33393 8.12638 4.33393C6.83308 4.33393 5.59275 4.8477 4.67824 5.7622C3.76374 6.6767 3.24998 7.91703 3.24998 9.21033C3.24998 10.5036 3.76374 11.744 4.67824 12.6585L13.4889 21.4691L22.2995 12.6585C22.7524 12.2058 23.1119 11.6681 23.357 11.0764C23.6022 10.4848 23.7284 9.85072 23.7284 9.21033C23.7284 8.56995 23.6022 7.93583 23.357 7.34422C23.1119 6.75261 22.7526 6.21509 22.2997 5.76238C21.847 5.30945 21.3091 4.9498 20.7175 4.70466C20.1259 4.45953 19.4918 4.33335 18.8514 4.33335Z"
                fill="#696969"
              />
            </g>
          </svg>
        </button>
        <div className="relative h-[26px] w-[26px]">
          <button
            onClick={() => setIsShowChart(!isShowChart)}
            className="relative"
          >
            {chartData.length !== 0 ? (
              <p className="absolute -right-2 -top-2 text-sm w-5 h-5 rounded-full bg-red-500 text-white animate-pulse">
                {chartData.length}
              </p>
            ) : null}
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition duration-300
               ${isShowChart ? "text-primary" : null}`}
            >
              <g id="shopping-bag">
                <g id="Vector">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.63335 1.51668C5.83795 1.24389 6.15903 1.08334 6.50002 1.08334H19.5C19.841 1.08334 20.1621 1.24389 20.3667 1.51668L23.6167 5.85001C23.7573 6.03753 23.8334 6.26561 23.8334 6.50001V21.6667C23.8334 22.5286 23.4909 23.3553 22.8815 23.9648C22.272 24.5743 21.4453 24.9167 20.5834 24.9167H5.41669C4.55473 24.9167 3.72808 24.5743 3.11859 23.9648C2.5091 23.3553 2.16669 22.5286 2.16669 21.6667V6.50001C2.16669 6.26561 2.24271 6.03753 2.38335 5.85001L5.63335 1.51668ZM7.04169 3.25001L4.33335 6.86112V21.6667C4.33335 21.954 4.44749 22.2295 4.65065 22.4327C4.85382 22.6359 5.12937 22.75 5.41669 22.75H20.5834C20.8707 22.75 21.1462 22.6359 21.3494 22.4327C21.5526 22.2295 21.6667 21.954 21.6667 21.6667V6.86112L18.9584 3.25001H7.04169Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.16669 6.50001C2.16669 5.9017 2.65171 5.41668 3.25002 5.41668H22.75C23.3483 5.41668 23.8334 5.9017 23.8334 6.50001C23.8334 7.09832 23.3483 7.58334 22.75 7.58334H3.25002C2.65171 7.58334 2.16669 7.09832 2.16669 6.50001Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.66669 9.75001C9.265 9.75001 9.75002 10.235 9.75002 10.8333C9.75002 11.6953 10.0924 12.5219 10.7019 13.1314C11.3114 13.7409 12.1381 14.0833 13 14.0833C13.862 14.0833 14.6886 13.7409 15.2981 13.1314C15.9076 12.5219 16.25 11.6953 16.25 10.8333C16.25 10.235 16.735 9.75001 17.3334 9.75001C17.9317 9.75001 18.4167 10.235 18.4167 10.8333C18.4167 12.2699 17.846 13.6477 16.8302 14.6635C15.8144 15.6793 14.4366 16.25 13 16.25C11.5634 16.25 10.1857 15.6793 9.16986 14.6635C8.15404 13.6477 7.58335 12.2699 7.58335 10.8333C7.58335 10.235 8.06838 9.75001 8.66669 9.75001Z"
                    fill="currentColor"
                  />
                </g>
              </g>
            </svg>
          </button>
          <div
            className="min-w-[350px] top-[42px] right-0 absolute overflow-hidden z-[999] transition-all duration-300"
            style={{ maxHeight: isShowChart ? "500px" : "0px" }}
          >
            <div className="py-2">
              <div className="flex flex-col bg-white p-2 justify-center  rounded-[9px] shadow-md">
                {chartData &&
                  chartData.map((chart, index) => (
                    <div
                      className="border-b flex justify-between gap-2 py-3 px-2"
                      key={index}
                    >
                      <div className="flex gap-2">
                        <img
                          src={
                            chart.relationship.product.data.relationship
                              .image[0].data.attributes.source
                          }
                          className="w-10 h-10 "
                          alt=""
                        />
                        <div>
                          <p className="text-sm font-bold">
                            {
                              chart.relationship.product.data.attributes
                                .product_name
                            }
                          </p>
                          <p className="text-sm">
                            Rp.{" "}
                            {useFormatNumber(
                              chart.relationship.product.data.attributes.price
                            )}{" "}
                            x {chart.attributes.quantity}
                          </p>
                        </div>
                      </div>
                      <div>
                        Rp. {useFormatNumber(chart.attributes.total_price)}
                      </div>
                    </div>
                  ))}
                <p className="text-center text-sm">lihat semua</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-14 relative">
          <button
            className="flex items-center w-14"
            onClick={() => setIsShowProfile(!isShowProfile)}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="user">
                <path
                  id="Vector (Stroke)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.8365 16.7532C5.85233 15.7373 7.23008 15.1667 8.66667 15.1667H17.3333C18.7699 15.1667 20.1477 15.7373 21.1635 16.7532C22.1793 17.769 22.75 19.1467 22.75 20.5833V22.75C22.75 23.3483 22.265 23.8333 21.6667 23.8333C21.0684 23.8333 20.5833 23.3483 20.5833 22.75V20.5833C20.5833 19.7214 20.2409 18.8947 19.6314 18.2852C19.0219 17.6757 18.1953 17.3333 17.3333 17.3333H8.66667C7.80471 17.3333 6.97806 17.6757 6.36857 18.2852C5.75908 18.8947 5.41667 19.7214 5.41667 20.5833V22.75C5.41667 23.3483 4.93164 23.8333 4.33333 23.8333C3.73502 23.8333 3.25 23.3483 3.25 22.75V20.5833C3.25 19.1467 3.82068 17.769 4.8365 16.7532Z"
                  fill="#696969"
                />
                <path
                  id="Vector (Stroke)_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 4.33332C11.2051 4.33332 9.74998 5.7884 9.74998 7.58332C9.74998 9.37825 11.2051 10.8333 13 10.8333C14.7949 10.8333 16.25 9.37825 16.25 7.58332C16.25 5.7884 14.7949 4.33332 13 4.33332ZM7.58331 7.58332C7.58331 4.59178 10.0084 2.16666 13 2.16666C15.9915 2.16666 18.4166 4.59178 18.4166 7.58332C18.4166 10.5749 15.9915 13 13 13C10.0084 13 7.58331 10.5749 7.58331 7.58332Z"
                  fill="#696969"
                />
              </g>
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="carret - down">
                <path
                  id="Vector"
                  d="M12.277 14.7522L8.45062 10.5007C8.27687 10.3076 8.41388 10 8.67361 10H16.3264C16.5861 10 16.7231 10.3076 16.5494 10.5007L12.723 14.7522C12.6038 14.8846 12.3962 14.8846 12.277 14.7522Z"
                  fill="#696969"
                />
              </g>
            </svg>
          </button>
          <div
            className="absolute top-[42px] right-0  w-56 overflow-hidden transition-all duration-300"
            style={{ maxHeight: isShowProfile ? "500px" : "0px" }}
          >
            <div className="p-2">
              <div className="bg-white p-2 shadow-md rounded-[9px]">
                <p className="py-2 border-b">{user.first_name}</p>
                <p className="py-2 border-b">{user.email}</p>
                <div className="py-2 flex justify-center">
                  <button
                    className="border w-40 py-2 rounded-md bg-primary text-white"
                    onClick={HandleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
