import {useRouter} from "next/router";

const DetailHomeTemplate = () => {
  const router = useRouter();
  const {mauNhaID, loaiNhaID} = router.query;

  return (
    <div className="underline decoration-sky-500/30">
      <div>
        Trang hien thi chi tiet mau nha: {mauNhaID} cua loai nha: {loaiNhaID}
      </div>
    </div>
  );
};

export default DetailHomeTemplate;
