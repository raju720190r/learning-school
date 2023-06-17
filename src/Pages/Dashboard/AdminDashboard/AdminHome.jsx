import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const AdminHome = () => {
  useTitle("AdminHome")
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-state");
      console.log("stats", res.data);
      return res.data;
    },
  });

  return (
    <div className="w-full mx-auto px-16 bg-pink-100">
        <h1 className="font-bold text-2xl py-4">Welcome {user?.displayName}</h1>
      <div className="stats shadow flex">
        <div className="stat flex items-center bg-sky-200 py-10">
        <div className="stat-title text-black text-3xl font-bold">Total Revenue :</div>
          <div className="stat-value">${stats.revenue}</div>
        </div>

        <div className="stat flex items-center bg-pink-200 py-10">
        <div className="stat-title text-black text-3xl font-bold">Total Users :</div>
          <div className="stat-value">{stats.user}</div>
        </div>

        <div className="stat flex items-center bg-sky-200 py-10">
          <div className="stat-title text-black text-3xl font-bold">Total Class :</div>
          <div className="stat-value">{stats.product}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
