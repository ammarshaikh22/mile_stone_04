'use client'
import { PostsOverview } from "@/components/posts-overview"
import { UserWelcome } from "@/components/user-welcome"
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/getUser', {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        });
        setUserData(response.data.data);
      } catch (err: any) {
        console.log("Error fetching user data:", err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container py-6 space-y-8 px-8">
      <UserWelcome user={userData} />
      <PostsOverview user={userData?.blogs} />
    </div>
  )
}
