import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { MdOndemandVideo } from "react-icons/md";
const videos = [
  {
    url: "https://youtu.be/OA3Txp94pjs",
    name: "Interstellar",
    description: "A team of astronauts ventures through a wormhole to find a new home for humanity, racing against time and space."
  },
  {
    url: "https://youtu.be/IrHTT2IEKpE",
    name: "Solo Leveling",
    description: "Sung Jinwoo, a weak hunter, rises to power and faces the monstrous Ant King in a thrilling showdown of strength and will."
  },
  {
    url: "https://youtu.be/zqYlJQ0JxLA",
    name: "Demon Slayer: Kimetsu no Yaiba",
    description: "Tengen Uzui, the flamboyant Sound Hashira, clashes with the demonic Gyutaro in a dazzling, high-stakes battle to save lives."
  },
  {
    url: "https://youtu.be/nECYNYgwyww",
    name: "Avengers: Infinity War",
    description: "Thor, the God of Thunder, confronts the cosmic tyrant Thanos in a desperate fight to save the universe from annihilation."
  },
  {
    url: "https://youtu.be/1gIJENPZ7ac",
    name: "The Legend of Hanuman",
    description: "A mighty monkey warrior embarks on an epic quest, wielding divine strength to protect the innocent in a mythical Indian tale."
  },
  {
    url: "https://youtu.be/B5c2PkSRfc8",
    name: "Boruto: Naruto Next Generations",
    description: "Boruto, Naruto’s rebellious son, trains to become a ninja, facing new threats and forging his own legacy in a hidden village."
  },
 
  {
    url: "https://youtu.be/JZ_IqU4kELA",
    name: "Thor: Ragnarok",
    description: "Thor battles to save Asgard from the goddess of death, Hela, in a vibrant, action-packed cosmic adventure."
  },
 
  {
    url: "https://youtu.be/2ZdLNsLJRdw",
    name: "Hunter x Hunter",
    description: "Gon Freecss embarks on a thrilling journey to become a Hunter, facing deadly trials and forging unbreakable bonds."
  },
  {
    url: "https://youtu.be/44pt8w67S8I",
    name: "Jujutsu Kaisen",
    description: "Yuji Itadori joins sorcerers to battle cursed spirits, wielding newfound powers in a dark, action-packed supernatural world."
  }

  
];

const VideoBackground = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const { url, name } = videos[currentVideo];

  return (
    <div className="w-full relative mt-[-12] mb-12 overflow-hidden">
      <div className="relative pt-[56.25%]">
        <ReactPlayer
          url={url}
          playing
          muted={true}
          loop={true}
          controls={false}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                controls: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                cc_load_policy: 0,
                
                vq: "hd1080",
              },
            },
          }}
        />
      </div>

      <div className="absolute bottom-100 left-5 bg-black/50 bg-opacity-50 text-white p-4 rounded-lg text-lg max-w-[90%]">
      <p className="flex items-center gap-4"><MdOndemandVideo />Watch Now</p>
        {name}
      </div>
    </div>
  );
};

export default VideoBackground;



