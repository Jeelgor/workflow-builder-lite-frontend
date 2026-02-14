import React, { useEffect, useState } from "react";
import api from "../api/client";
import { Link } from "react-router";

const StatusCard = ({ label, status }) => {
  const isOk = status === "ok";

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
      <span className="font-medium text-gray-700">{label}</span>

      <span
        className={`px-3 py-1 text-xs font-semibold rounded-full 
          ${isOk ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
      >
        {status?.toUpperCase()}
      </span>
    </div>
  );
};

const Health = () => {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSystemHealth = async () => {
      try {
        const res = await api.get("/health");
        setHealth(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getSystemHealth();
  }, []);

  if (loading) {
    return (
      <div className="text-gray-500">Checking system health...</div>
    );
  }

  if (!health) {
    return (
      <div className="text-red-500">Unable to fetch health status</div>
    );
  }

  return (
    <div className="space-y-4 mt-7 px-10">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          System Health
        </h2>
        <div className="ml-auto mr-28 ">
          <Link to={'/'}>
            <p className="text-green-900 text-[20px] hover:underline">Back To Home</p>
          </Link>
        </div>
      </div>

      <StatusCard label="Backend Service" status={health.backend} />
      <StatusCard label="Database Connection" status={health.database} />
      <StatusCard label="LLM Service" status={health.llm} />
    </div>
  );
};

export default Health;
