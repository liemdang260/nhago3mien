import {useRouter} from "next/router";
import {PageItem, PageWrapper} from "components/common/PageWrapper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faListSquares,
  faBars,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import {useEffect, useState} from "react";
import {Item} from "components/common/gridLayoutMauNha";
import {Item2} from "..";
import LandingPages from "components/common/LandingPages";
import Category from "components/common/SideBar/Category";
import Support from "components/common/SideBar/Support";
import Contact from "components/common/SideBar/Contact";
import BreadCrumb from "components/common/SideBar/Breadcrumb";

const dummyData = [
  {
    title: "Lhòi hóng mát",
    codeProduct: "NNC-03",
  },
  {
    title: "Bhòi ngắm cảnh",
    codeProduct: "NNC-02",
  },
  {
    title: "Cẫu chòi hóng mát",
    codeProduct: "NNC-04",
  },
  {
    title: "Dẫu nhà Bát Giác trên Hồ bằng gỗ Căm Xe",
    codeProduct: "NGBG-01",
  },
  {
    title: "Eẫu nhà chòi Lục Giác",
    codeProduct: "NLG-01",
  },
  {
    title: "Fẫu nhà gỗ",
    codeProduct: "NGCT-12",
  },
  {
    title: "Gẫu nhà gỗ 3 gian cổ truyền",
    codeProduct: "NGCT-32",
  },
  {
    title: "Hẫu nhà gỗ 5 gian truyền thống",
    codeProduct: "NSG-29",
  },
  {
    title: "Iẫu nhà cổ truyền",
    codeProduct: "NGCT-04",
  },
  {
    title: "Kẫu nhà gỗ cổ truyền đẹp nhất Vính Bắc Bộ",
    codeProduct: "NGBG-01",
  },
  {
    title: "Lẫu nhà gỗ hiện đại",
    codeProduct: "NGBG-01",
  },
  {
    title: "Mẫu nhà gỗ hiện đại 02",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Mẫu nhà gỗ hiện đại 02",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Mẫu nhà gỗ hiện đại 02",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Mẫu nhà gỗ hiện đại 02",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Mẫu nhà gỗ hiện đại 02",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Mẫu nhà gỗ hiện đại 02",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Mẫu nhà gỗ hiện đại 02",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
  {
    title: "Nẫu nhà gỗ hiện đại 03",
    codeProduct: "NGBG-01",
  },
];

const DetailHomeTemplate = () => {
  const router = useRouter();
  const {mauNhaID, loaiNhaID} = router.query;
  const [landingIndex, setLandingIndex] = useState(0);
  const [landingVisionIndex, setLandingVisionIndex] = useState(0);

  const [data, setData] = useState(dummyData);
  const [gridLayout, setGridLayout] = useState(true);
  const [selectedOption, setSelectedOption] = useState({
    value: "Default",
    label: "Mặc định",
  });
  const [selectedOption2, setSelectedOption2] = useState({
    value: "15",
    label: "15 mục",
  });
  const options2 = [
    {value: "15", label: "15 mục"},
    {value: "30", label: "30 mục"},
    {value: "45", label: "45 mục"},
    {value: "60", label: "60 mục"},
  ];
  const options = [
    {value: "Default", label: "Mặc định"},
    {value: "NameASC", label: "Tên A-Z"},
    {value: "NameDESC", label: "Tên Z-A"},
    {value: "PriceASC", label: "Giá (Thấp -> Cao)"},
    {value: "PriceDESC", label: "Giá (Cao -> Thấp)"},
    {value: "RatingHighest", label: "Đánh Giá (Cao nhất)"},
    {value: "RatingLowest", label: "Đánh giá (Thấp nhất)"},
    {value: "TypeASC", label: "Kiểu (A-Z)"},
    {value: "TypeDESC", label: "Kiểu (Z-A)"},
  ];
  const handleLandingIndex = index => {
    setLandingIndex(index);
  };
  const handleLandingVision = action => {
    setLandingVisionIndex(landingVisionIndex + action);
  };
  useEffect(() => {
    setLandingIndex(landingVisionIndex * 10);
  }, [landingVisionIndex]);

  const handleChangeOption = change => {
    switch (change.value) {
      case "NameASC":
        var newData = data.sort((a, b) => a.title.localeCompare(b.title));
        setData(newData);
        break;
      case "Default":
        setData(dummyData);
        break;
      case "NameDESC":
        var newData = data.sort((a, b) => b.title.localeCompare(a.title));
        setData(newData);
        break;
      default:
        break;
    }
    setSelectedOption(change);
  };

  return (
    <PageWrapper>
      <PageItem>
        {" "}
        <BreadCrumb
          location={[
            {title: "Trang chủ", link: "/"},
            {
              title: `${loaiNhaID}`.replace(/[^\w\s]/gi, " "),
              link: `/${loaiNhaID}`,
            },
            {
              title: `${mauNhaID}`.replace(/[^\w\s]/gi, " "),
              link: `/${loaiNhaID}/${mauNhaID}`,
            },
          ]}
        />
      </PageItem>
      <PageItem>
        <Category />
        <Support />
        <Contact />
      </PageItem>
      <PageItem>
        <div className="pl-4 pt-4 pr-4">
          <div className="text-lg text-primary-color text-semibold mb-2">
            {mauNhaID} ( {loaiNhaID} )
          </div>
          <div className="w-full flex justify-between">
            <div className="mt-2">
              <span
                onClick={() => setGridLayout(true)}
                className={`border-solid border-primary-color py-2 px-3 rounded-l-md ${
                  gridLayout ? "border-4" : "border"
                }`}
              >
                <FontAwesomeIcon icon={faListSquares} size="lg" />
              </span>
              <span
                onClick={() => setGridLayout(false)}
                className={`border-solid border-primary-color py-2 px-3 rounded-r-md ${
                  !gridLayout ? "border-4" : "border"
                }`}
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </span>
            </div>
            <div>
              <Select
                className="w-52 inline-block mr-4"
                value={selectedOption}
                onChange={change => {
                  handleChangeOption(change);
                }}
                options={options}
              />
              <Select
                className="w-32 inline-block"
                value={selectedOption2}
                onChange={change => {
                  setSelectedOption2(change);
                }}
                options={options2}
              />
            </div>
          </div>
          <div
            className={`w-full ${
              gridLayout ? "grid grid-cols-3 gap-7" : ""
            } mt-4`}
          >
            {gridLayout
              ? data
                  .slice(
                    landingIndex * Number(selectedOption2.value),
                    landingIndex * Number(selectedOption2.value) +
                      Number(selectedOption2.value)
                  )
                  .map((_item, _index) => (
                    <Item
                      key={_index}
                      params={{
                        title: _item.title,
                        codeProduct: _item.codeProduct,
                      }}
                    />
                  ))
              : data
                  .slice(
                    landingIndex * Number(selectedOption2.value),
                    landingIndex * Number(selectedOption2.value) +
                      Number(selectedOption2.value)
                  )
                  .map((_item, _index) => (
                    <Item2
                      key={_index}
                      params={{
                        title: _item.title,
                        codeProduct: _item.codeProduct,
                        url: _item.url,
                      }}
                    />
                  ))}
          </div>
        </div>
        <div>
          <LandingPages
            handleLandingIndex={handleLandingIndex}
            itemsPerPage={Number(selectedOption2.value)}
            landingVisionIndex={landingVisionIndex}
            landingIndex={landingIndex}
            length={data.length}
            handleLandingVision={handleLandingVision}
          />
        </div>
      </PageItem>
    </PageWrapper>
  );
};

export default DetailHomeTemplate;
