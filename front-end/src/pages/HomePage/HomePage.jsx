import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {
  BreadcrumbActive,
  BreadcrumbDivider,
  BreadcrumbItem,
  Breadcrumbs,
} from "../../components/Breadcrumb";
import { SliderRange } from "../../components/Form";
import useFormatNumber from "../../utils/useFormatNumber";
import DropdownCollapse from "../../components/DropdownCollapse";
import Dropdown from "../../components/Dropdown";
import { CardProduct, ProductRate } from "../../components/Card/CardProduct";
import useFetchData from "../../utils/useFetchData";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/AuthStore";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const user = useAuthStore((state) => state);

  const GetAllDataProduct = async () => {
    const data = await useFetchData("http://localhost:5000/products");
    setProductData(data.data);
  };

  useEffect(() => {
    GetAllDataProduct();
  }, []);

  useEffect(() => {
    if (!user.isAuth) {
      navigate("/");
    }
  }, [user.isAuth]);
  return (
    <Layout>
      <Breadcrumbs className="mb-[17px]">
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
        <BreadcrumbItem>Product</BreadcrumbItem>
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
        <BreadcrumbActive>Roasted Bean</BreadcrumbActive>
      </Breadcrumbs>
      <section className="bg-white px-[70px] flex gap-[18px]">
        <SidebarFilter />
        <div className="flex-1 pt-[21px]">
          <div className="flex justify-between items-center mb-[27px]">
            <div className="flex items-center gap-[14px]">
              <span>Menampilkan</span>
              <Dropdown />
              <span>dari 132</span>
            </div>
            <div className="flex items-center gap-[14px]">
              <span>Urutkan</span>
              <Dropdown />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-[55px]">
            {productData.map((item, index) => (
              <Link to={`/product/${item.id}`} key={index}>
                <CardProduct>
                  <div className="flex justify-center">
                    <img
                      src={item.relationship.image[0].source}
                      alt={item.attributes.product_name}
                    />
                  </div>
                  <div className="card-desc flex flex-col items-center gap-[10px]">
                    <p className="text-[20px] font-semibold text-[#696969] text-center">
                      {item.attributes.product_name.substr(0, 25)}
                    </p>
                    <p className="text-base font-semibold text-[#696969]">
                      {item.attributes.brand}
                    </p>
                    <ProductRate rate={5} totalRate={7} />
                    <p className="font-[500] text-primary text-lg">
                      Rp {useFormatNumber(item.attributes.price)}
                    </p>
                  </div>
                </CardProduct>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mb-5">
            <button className="flex justify-center items-center h-[53px] w-[53px] border">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="chevron left">
                  <path
                    id="XMLID 1512"
                    d="M15.1651 16.4199C15.4851 16.7199 15.4851 17.2399 15.1851 17.5599C15.0251 17.7199 14.8251 17.7999 14.6051 17.7999C14.4051 17.7999 14.2051 17.72 14.0451 17.58L8.84509 12.5799C8.68509 12.4199 8.6051 12.2199 8.6051 11.9999C8.6051 11.7799 8.68509 11.5799 8.84509 11.4199L14.0451 6.41995C14.3651 6.11995 14.8651 6.11995 15.1851 6.43995C15.4851 6.75995 15.4851 7.25995 15.1651 7.57995L10.5651 11.9999L15.1651 16.4199Z"
                    fill="#959595"
                  />
                </g>
              </svg>
            </button>
            <button className="flex justify-center items-center h-[53px] w-[53px] border">
              1
            </button>
            <button className="flex justify-center items-center h-[53px] w-[53px] border">
              2
            </button>
            <button className="flex justify-center items-center h-[53px] w-[53px] border">
              3
            </button>
            <button className="flex justify-center items-center h-[53px] w-[53px] border">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="chevron right">
                  <path
                    id="XMLID 1510"
                    d="M15.405 11.9999C15.405 12.2199 15.325 12.4199 15.165 12.5799L9.96499 17.58C9.80499 17.72 9.60498 17.7999 9.40498 17.7999C9.18498 17.7999 8.98497 17.7199 8.82497 17.5599C8.52497 17.2399 8.52497 16.7399 8.84497 16.4199L13.445 11.9999L8.84497 7.57995C8.52497 7.27995 8.52497 6.75995 8.82497 6.43995C9.12497 6.11995 9.64499 6.11995 9.96499 6.41995L15.165 11.4199C15.325 11.5799 15.405 11.7799 15.405 11.9999Z"
                    fill="#959595"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const SidebarFilter = () => {
  const dropdownData = [
    {
      title: "Origin",
      data: [
        { name: "Aceh", value: 8 },
        { name: "Semarang", value: 2 },
        { name: "Bandung", value: 7 },
        { name: "Jawa", value: 5 },
        { name: "Amerika Selatan", value: 6 },
        { name: "Lain - Lain", value: 8 },
      ],
    },
    {
      title: "Species",
      data: [
        { name: "Arabika", value: 128 },
        { name: "Robusta", value: 23 },
        { name: "Bandung", value: 9 },
      ],
    },
    {
      title: "Roast Level",
      data: [
        { name: "Light Roast", value: 8 },
        { name: "Medium Roast", value: 2 },
        { name: "Dark Roast", value: 7 },
        { name: "Light to Medium Roast", value: 5 },
      ],
    },
    {
      title: "Tasted",
      data: [
        { name: "Sweet", value: 18 },
        { name: "Floral", value: 21 },
        { name: "Fruity", value: 7 },
        { name: "Nutty", value: 5 },
        { name: "Cocoa", value: 21 },
        { name: "Spices", value: 18 },
      ],
    },
    {
      title: "Processing",
      data: [
        { name: "Honey White", value: 8 },
        { name: "Natural", value: 2 },
        { name: "Honey Gold", value: 7 },
        { name: "Honey Yellow", value: 5 },
      ],
    },
  ];
  return (
    <>
      <div className=" w-[338px] pt-[21px]">
        <div className="mb-[18px]">
          <h3 className="text-lg font-semibold text-[#696969]">
            URUTKAN BERDASARKAN
          </h3>
        </div>
        <FilterPrice />
        {dropdownData.map((item, index) => (
          <DropdownCollapse key={index} title={item.title} data={item.data} />
        ))}
      </div>
    </>
  );
};

const FilterPrice = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5000000);
  const HandleChangePrice = (data) => {
    const multiplyPrice = 50000;
    setMinValue(data[0] * multiplyPrice);
    setMaxValue(data[1] * multiplyPrice);
  };
  return (
    <>
      <h3 className="text-lg font-semibold mb-[7px] text-[#696969]">Harga</h3>
      <SliderRange HandleChangePrice={HandleChangePrice} />
      <div className="flex justify-center gap-[40px] text-[#868686] mb-[9px]">
        <div className="h-[30px] w-[100px] px-[5px] border bg-[#F2F2F2] relative">
          <div className="absolute -left-7">Rp.</div>
          {useFormatNumber(minValue)}
        </div>
        <div className="h-[30px] w-[100px] px-[5px] border bg-[#F2F2F2] relative">
          <div className="absolute -left-9">- Rp.</div>
          {useFormatNumber(maxValue)}
        </div>
      </div>
    </>
  );
};
export default HomePage;
