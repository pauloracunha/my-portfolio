import { useEffect } from "react";
import BgProfile from "../components/svg/BgProfile";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    axios.get(`https://api.github.com/users/pauloracunha`).then((response) => {
      setProfile(response.data);
    });
  }, []);
  return (
    <section className="w-full min-h-[75vh] bg-gradient-to-r from-[66%] from-[#010521] to-[66%] to-[#53CB85]">
      <header className="px-16 py-8">
        <h1 className="text-4xl text-[#53CB85] leading-5">
          paulo
          <br />
          <span className="pl-8">cunha</span>
        </h1>
      </header>
      <article className="container m-auto p-32 grid grid-cols-3 min-h-[70vh]">
        <div className="flex flex-col col-span-2">
          <h2 className="text-6xl text-[#53CB85] mb-8 font-extrabold">
            Fullstack
            <br />
            Developer
          </h2>
          <p className="text-2xl leading-relaxed text-white text-balance">
            Há mais de cinco anos desenvolvendo soluções simples para problemas
            complexos.
          </p>
          <div className="flex gap-8 mt-auto text-2xl text-white">
            <a href="#" title="LinkedIn"><i className="ri-linkedin-line"></i></a>
            <a href="#" title="Github"><i className="ri-github-line"></i></a>
            <a href="#" title="Instagram"><i className="ri-instagram-line"></i></a>
          </div>
        </div>
        <figure className="relative border-white border-[1px] w-72 h-80 z-10">
          <BgProfile className="absolute w-[60rem] h-[160%] -top-[25%] -z-[1] -right-[19rem]" />
          <span
            aria-label="Foto de perfil de Paulo Cunha"
            role="img"
            className="z-10 block w-full h-full -mt-8 -ml-12 bg-center bg-cover"
            style={{
              backgroundImage: `url(${profile?.avatar_url})`,
            }}
          />
        </figure>
      </article>
    </section>
  );
}

export default App;
