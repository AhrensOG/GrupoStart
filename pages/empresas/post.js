import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { useRouter } from "next/router";
import Head from "next/head";
import EmpresasCardPost from "../../components/empresas/auxComponents/EmpresasCardPost";
import axios from "axios";
import RefreshButton from "../../components/empresas/auxComponents/RefreshButton";
import SkeletonLoader from "../../components/empresas/auxComponents/SkeletonLoader";
import PostForm from "../../components/empresas/auxComponents/PostForm";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const post = () => {
  const { asPath } = useRouter();
  const navbarButtons = asPath === "/empresas";

  const skeletonLoader = [1, 2, 3, 4, 5]
  const [empresas, setEmpresas] = useState([]);
  const [refreshButton, setRefreshButton] = useState(false)
  const [deletePost, setDeletePost] = useState(false)
  const [updatePost, setUpdatePost] = useState(false)


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}`);
        setEmpresas(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    const deletPost = async () => {
      try {
        await axios.delete(`${SERVER_URL}?id=${deletePost}`)
      } catch (error) {
        console.log(error)
      }
    }
    if (refreshButton) {
      setEmpresas([])
      getData()
      setRefreshButton(false)
    }
    if (deletePost) {
      setDeletePost(false)
      deletPost()
      setEmpresas([])
      getData()
    }
    getData();
  }, [refreshButton, deletePost]);

  return (
    <div>
      <Head>
        <title>GrupoStart</title>
      </Head>
      <NavBar servicesDropdown={!navbarButtons} isFixed={false} />
      <div className="flex flex-row w-full h-full p-4 pt-8 gap-6 ">
        <div className="basis-[40%] relative overflow-scroll">
          <div className="flex flex-col absolute justify-center items-center gap-10 w-full">
            <RefreshButton setRefresh={setRefreshButton}/>
            {
              empresas.length === 0 
              ? skeletonLoader?.map((l) => {
                return (
                  <SkeletonLoader key={l}/>
                )
              })
              : empresas?.map((emp) => {
                return (
                  <EmpresasCardPost
                    id={emp.id}
                    key={emp.name}
                    name={emp.name}
                    description={emp.description}
                    image={emp.image}
                    setDeletePost={setDeletePost}
                    setUpdatePost={setUpdatePost}
                  />
                );
              })
            }
          </div>
        </div>
        <div className="px-4 basis-[60%] w-full h-full">
          <PostForm updatePost={updatePost} />
        </div>
      </div>
    </div>
  );
};

export default post;
