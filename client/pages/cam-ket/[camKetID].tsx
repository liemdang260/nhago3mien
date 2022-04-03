import type {NextPage} from "next";
import {useRouter} from "next/router";

const Services: NextPage = () => {
  const router = useRouter();
  const {camKetID} = router.query;

  return (
    <div className="underline decoration-sky-500/30">
      <div>Trang hien thi loai cam ket: {camKetID}</div>
    </div>
  );
};

export default Services;
