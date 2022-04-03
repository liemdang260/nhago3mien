import type {NextPage} from "next";
import {useRouter} from "next/router";

const Services: NextPage = () => {
  const router = useRouter();
  const {loaiDichVuID} = router.query;

  return (
    <div className="underline decoration-sky-500/30">
      <div>Trang hien thi loai dich vu: {loaiDichVuID}</div>
    </div>
  );
};

export default Services;
