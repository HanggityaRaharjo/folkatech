import Layout from "../../components/Layout";
import {
  BreadcrumbActive,
  BreadcrumbDivider,
  BreadcrumbItem,
  Breadcrumbs,
} from "../../components/Breadcrumb";
import { ProductRate } from "../../components/Card/CardProduct";
import useFormatNumber from "../../utils/useFormatNumber";
import { useEffect, useState } from "react";
import useFetchData from "../../utils/useFetchData";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/AuthStore";

const ProductPage = () => {
  const [productData, setProductData] = useState({});
  const [quantityCounter, setQuantityCounter] = useState(1);
  const [currentShowImage, setCurrentShowImage] = useState("");
  const [tabBodyProduct, setTabBodyProduct] = useState("deskripsi");
  const { id } = useParams();
  const productId = id;
  const user = useAuthStore((state) => state);

  console.log(user);

  const navigate = useNavigate();

  const GetAllData = async () => {
    const data = await useFetchData(
      `http://localhost:5000/product/${productId}`
    );
    setProductData(data);
    setCurrentShowImage(data.data[0].relationship.image[0].source);
  };

  const HandleProductToChart = () => {
    const price =
      Object.keys(productData).length !== 0
        ? productData.data[0].attributes.price
        : 0;

    const dataStructure = {
      quantity: quantityCounter,
      total_price: price * quantityCounter,
      productId: productId,
      userId: user.id,
    };

    axios.post("http://localhost:5000/cart", dataStructure).then(({ data }) => {
      console.log(data);
      navigate("/home");
    });
  };

  useEffect(() => {
    GetAllData();
  }, []);

  useEffect(() => {
    if (!user.isAuth) {
      navigate("/");
    }
  }, [user.isAuth]);
  return (
    <Layout>
      <Breadcrumbs className="mb-[49px]">
        <BreadcrumbItem>
          <Link to={"/home"}>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbDivider>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="translate-y-[2px]"
          >
            <g id="chevrons-right">
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.65865 3.40865C6.87018 3.19712 7.21315 3.19712 7.42468 3.40865L10.133 6.11698C10.3446 6.32852 10.3446 6.67148 10.133 6.88302L7.42468 9.59135C7.21315 9.80288 6.87018 9.80288 6.65865 9.59135C6.44712 9.37982 6.44712 9.03685 6.65865 8.82532L8.98397 6.5L6.65865 4.17468C6.44712 3.96315 6.44712 3.62018 6.65865 3.40865Z"
                fill="#868686"
              />
              <path
                id="Vector (Stroke)_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.86702 3.40865C3.07856 3.19712 3.42152 3.19712 3.63306 3.40865L6.34139 6.11698C6.55292 6.32852 6.55292 6.67148 6.34139 6.88302L3.63306 9.59135C3.42152 9.80288 3.07856 9.80288 2.86702 9.59135C2.65549 9.37982 2.65549 9.03685 2.86702 8.82532L5.19234 6.5L2.86702 4.17468C2.65549 3.96315 2.65549 3.62018 2.86702 3.40865Z"
                fill="#868686"
              />
            </g>
          </svg>
        </BreadcrumbDivider>
        <BreadcrumbActive>
          {Object.keys(productData).length !== 0
            ? productData.data[0].attributes.product_name
            : null}
        </BreadcrumbActive>
      </Breadcrumbs>
      <section className="bg-white px-[77px] flex gap-[35px] mb-[73px]">
        <div className="p-2 w-[560px]">
          <div className="flex justify-center">
            <img
              src={currentShowImage}
              className="w-96"
              alt={
                Object.keys(productData).length !== 0
                  ? productData.data[0].attributes.product_name
                  : null
              }
            />
          </div>
          <div className="flex  justify-between relative">
            <button className="absolute top-1/2 -translate-y-1/2 -left-4 bg-[#E2E2E2] w-[33px] h-[33px] rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="chevron-left">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
                    fill="black"
                  />
                </g>
              </svg>
            </button>
            <div className="w-[165px] h-[165px] border">
              <img src={currentShowImage} alt="" />
            </div>

            <button className="absolute top-1/2 -translate-y-1/2 -right-4 bg-[#E2E2E2] w-[33px] h-[33px] rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="chevron-right">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
                    fill="black"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[20px] font-semibold text-[#696969]  mb-5">
            {Object.keys(productData).length !== 0
              ? productData.data[0].attributes.product_name
              : null}
          </p>
          <p className="text-base font-semibold text-[#696969] mb-2">
            {Object.keys(productData).length !== 0
              ? productData.data[0].attributes.brand
              : null}
          </p>
          <ProductRate rate={5} totalRate={7} className="mb-[19px]" />
          <div className="flex justify-between mb-[30px]">
            <p className="font-[500] text-primary text-[22px]">
              Rp{" "}
              {useFormatNumber(
                Object.keys(productData).length !== 0
                  ? productData.data[0].attributes.price
                  : 0
              )}
            </p>
            <div className="flex items-center ">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="check-square">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L6.35355 7.35355C6.15829 7.54882 5.84171 7.54882 5.64645 7.35355L4.14645 5.85355C3.95118 5.65829 3.95118 5.34171 4.14645 5.14645C4.34171 4.95118 4.65829 4.95118 4.85355 5.14645L6 6.29289L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645Z"
                    fill="#6F8EFF"
                  />
                  <path
                    id="Vector (Stroke)_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 2C2.36739 2 2.24021 2.05268 2.14645 2.14645C2.05268 2.24021 2 2.36739 2 2.5V9.5C2 9.63261 2.05268 9.75978 2.14645 9.85355C2.24021 9.94732 2.36739 10 2.5 10H9.5C9.63261 10 9.75978 9.94732 9.85355 9.85355C9.94732 9.75978 10 9.63261 10 9.5V6C10 5.72386 10.2239 5.5 10.5 5.5C10.7761 5.5 11 5.72386 11 6V9.5C11 9.89783 10.842 10.2794 10.5607 10.5607C10.2794 10.842 9.89783 11 9.5 11H2.5C2.10217 11 1.72064 10.842 1.43934 10.5607C1.15804 10.2794 1 9.89783 1 9.5V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H8C8.27614 1 8.5 1.22386 8.5 1.5C8.5 1.77614 8.27614 2 8 2H2.5Z"
                    fill="#6F8EFF"
                  />
                </g>
              </svg>
              <p className="text-[#6F8EFF]">Tersedia</p>
            </div>
          </div>
          <div className="flex gap-[19px] items-center mb-7">
            <div className="flex items-center">
              <button
                className="h-[53px] w-[53px] border border-[#F1F1F1] text-base font-semibold text-[#979797]"
                onClick={() => {
                  quantityCounter != 1
                    ? setQuantityCounter(parseInt(quantityCounter - 1))
                    : setQuantityCounter(1);
                }}
              >
                -
              </button>
              <input
                className="h-[53px] w-[78px] border border-[#F1F1F1] text-base font-semibold text-[#979797] text-center px-2"
                value={quantityCounter}
                onChange={(e) => setQuantityCounter(parseInt(e.target.value))}
                type="number"
                min={1}
              />

              <button
                onClick={() =>
                  setQuantityCounter(parseInt(quantityCounter + 1))
                }
                className="h-[53px] w-[53px] border border-[#F1F1F1] text-base font-semibold text-[#979797]"
              >
                +
              </button>
            </div>
            <button
              onClick={() => HandleProductToChart()}
              className="bg-primary h-[53px] text-white leading-[17.23px] text-lg font-[500] px-5"
            >
              Tambah Keranjang
            </button>
            <button className="bg-[#F5F5F5] h-[53px] w-[53px] flex justify-center items-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="heart">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3987 2.91093C18.319 2.52961 19.3054 2.33334 20.3015 2.33334C21.2977 2.33334 22.2841 2.52961 23.2044 2.91093C24.1245 3.29218 24.9605 3.85095 25.6646 4.55532C26.369 5.25946 26.9282 6.09585 27.3094 7.01596C27.6907 7.93625 27.887 8.92264 27.887 9.9188C27.887 10.915 27.6907 11.9014 27.3094 12.8216C26.9281 13.7418 26.3693 14.5779 25.6648 15.2821C25.6648 15.2822 25.6649 15.282 25.6648 15.2821L15.3515 25.5954C14.8959 26.051 14.1572 26.051 13.7016 25.5954L3.38824 15.2821C1.9658 13.8597 1.16669 11.9304 1.16669 9.9188C1.16669 7.90718 1.9658 5.97794 3.38824 4.55551C4.81067 3.13308 6.7399 2.33396 8.75153 2.33396C10.7632 2.33396 12.6924 3.13308 14.1148 4.55551L14.5265 4.96722L14.938 4.55571C14.938 4.55577 14.9381 4.55564 14.938 4.55571C15.6422 3.85124 16.4785 3.29221 17.3987 2.91093ZM20.3015 4.66667C19.6119 4.66667 18.929 4.80255 18.2919 5.06654C17.6548 5.33053 17.0759 5.71746 16.5883 6.20523L15.3515 7.44209C14.8959 7.89771 14.1572 7.89771 13.7016 7.44209L12.4649 6.20543C11.4801 5.22058 10.1443 4.6673 8.75153 4.6673C7.35874 4.6673 6.023 5.22058 5.03815 6.20543C4.0533 7.19028 3.50002 8.52602 3.50002 9.9188C3.50002 11.3116 4.0533 12.6473 5.03815 13.6322L14.5265 23.1206L24.0149 13.6322C24.5027 13.1446 24.8898 12.5656 25.1538 11.9285C25.4178 11.2913 25.5537 10.6084 25.5537 9.9188C25.5537 9.22916 25.4178 8.54627 25.1538 7.90915C24.8898 7.27202 24.5029 6.69316 24.0151 6.20562C23.5276 5.71785 22.9483 5.33053 22.3112 5.06654C21.6741 4.80255 20.9912 4.66667 20.3015 4.66667Z"
                    fill="#EB3F36"
                  />
                </g>
              </svg>
            </button>
          </div>
          <p className="leading-[17.23px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet
            quam alias voluptatum, temporibus ipsa ex fugit dolor ad et, facilis
            minima illum. Exercitationem obcaecati veniam cum magni
            consequuntur, eaque autem. Aliquam natus delectus laboriosam, quam
            incidunt tempora ab porro quisquam provident blanditiis dolor
            dolorum. Exercitationem veniam obcaecati assumenda ab!
          </p>
        </div>
      </section>
      <section className="bg-white px-[77px] mb-[26px]">
        <div className="flex gap-[35px]">
          <div className="h-[64px] w-full flex justify-center">
            <div
              onClick={() => setTabBodyProduct("deskripsi")}
              className={`w-[300px] border-b-4 text-[22px] font-semibold h-full flex justify-center items-center cursor-pointer ${
                tabBodyProduct == "deskripsi"
                  ? "border-primary text-primary"
                  : "border-transparent text-[#BEBEBE]"
              }`}
            >
              DESKRIPSI
            </div>
            <div
              onClick={() => setTabBodyProduct("informasi")}
              className={`w-[300px] border-b-4 text-[22px] font-semibold h-full flex justify-center items-center cursor-pointer ${
                tabBodyProduct == "informasi"
                  ? "border-primary text-primary"
                  : "border-transparent text-[#BEBEBE]"
              }`}
            >
              INFORMASI
            </div>
          </div>
        </div>
        <div className="min-h-[300px]">
          {tabBodyProduct == "deskripsi" ? (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus eius, nam, nulla iusto eos rem labore aliquid repellat
                eum unde rerum quia aspernatur beatae. Reiciendis distinctio
                explicabo ea facilis, labore perferendis repudiandae! Error,
                temporibus maxime? Distinctio quae veritatis amet consectetur
                voluptates, debitis omnis ab sit minus quibusdam aliquam fugiat
                libero odit illum vitae voluptatum nesciunt ducimus sunt
                repellat, alias magni dolor reprehenderit ipsam. Libero
                accusamus quas error magnam quisquam illo? Rem voluptates eum
                quia aut, ipsam in molestias? Fugit molestias obcaecati labore
                natus! Aperiam minus ut veniam eligendi dolor! Eligendi voluptas
                est doloribus possimus maxime corporis quis ut et eos.
              </p>
              <p>Spesifikasi:</p>
              <p>Dimensi : 11x16,5x8cm</p>
              <p>Berat :350gr</p>
              <p>Warna : Abu-abu / Grey</p>
              <p>Brand : Hario</p>
            </div>
          ) : (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus eius, nam, nulla iusto eos rem labore aliquid repellat
                eum unde rerum quia aspernatur beatae. Reiciendis distinctio
                explicabo ea facilis, labore perferendis repudiandae! Error,
                temporibus maxime? Distinctio quae veritatis amet consectetur
                voluptates, debitis omnis ab sit minus quibusdam aliquam fugiat
                libero odit illum vitae voluptatum nesciunt ducimus sunt
                repellat, alias magni dolor reprehenderit ipsam. Libero
                accusamus quas error magnam quisquam illo? Rem voluptates eum
                quia aut, ipsam in molestias? Fugit molestias obcaecati labore
                natus! Aperiam minus ut veniam eligendi dolor! Eligendi voluptas
                est doloribus possimus maxime corporis quis ut et eos.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
