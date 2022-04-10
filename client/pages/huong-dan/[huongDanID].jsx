import {useRouter} from "next/router";

const Guild = () => {
  const router = useRouter();
  const {huongDanID} = router.query;

  return (
    <div className="underline decoration-sky-500/30">
      <div>Trang hien thi huong dan: {huongDanID}</div>
    </div>
  );
};

export default Guild;