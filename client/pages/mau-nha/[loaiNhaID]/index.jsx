import {useRouter} from "next/router";

const HomeTemplate = () => {
  const router = useRouter();
  const {loaiNhaID} = router.query;

  return (
    <div className="underline decoration-sky-500/30">
      <div>Trang hien thi loai nha: {loaiNhaID}</div>
    </div>
  );
};

export default HomeTemplate;
