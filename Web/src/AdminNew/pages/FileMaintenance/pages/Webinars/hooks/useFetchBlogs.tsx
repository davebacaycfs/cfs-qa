import axios from "axios";
import ENDPOINTS from "constants/endpoints";
import { useState, useEffect } from "react";

export type BlogValueType = {
  _id: string;
  thumbnail: string;
  title: string;
  tags: [];
  content: string;
  author: string;
  createdAt: Date;
};

const useFetchBlogs = (id?: string) => {
  const [blogs, setBlogs] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id?.toString() !== "add") {
      setLoading(true);
      const endpoint = id
        ? ENDPOINTS.BLOGS_SINGLE.replace(":blogId", id)
        : ENDPOINTS.BLOGS;
      axios
        .get(endpoint)
        .then((response) => {
          setBlogs(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [id]);

  return {
    blogs,
    loading,
  };
};

export default useFetchBlogs;
