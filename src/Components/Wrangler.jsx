

import React from "react";
import never from "../assets/Images/Brand-Logos/never get too busy.png";
import top from "../assets/Images/Brand-Logos/Top boy.png";
const link1 = [
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051817/Big_loby_f2totd.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051803/Rith_kfk4pj.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051803/topboy_hiyzfr.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051805/run_it_upp_wixc3o.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051805/ROBED_DESIGN_zglhpl.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051806/Stay_paid_gfc8zb.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051806/moby_un097b.jpg",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051806/malik_yxiq2r.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051806/skillz_sillohetts_v0p4mn.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051807/racks_cap_gpvica.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051807/MAEDIN_KNIGHT_uukv01.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051807/IBB_digbjl.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051807/kelly_blaq_m7l7fk.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051809/jobala_trxmyz.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051810/Esiaga_2_ajahhy.png",
  "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051811/go_fashion_6_agllhz.png",
  never
];

  const link2 = [
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051812/de_plug_nuk9ll.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051812/Green_lifestyle_-_12_gk5f2s.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051812/outluxxe_uzgfsk.jpg",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051813/kaykript_h4rses.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051813/GRITURE_caspc9.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051813/DDC_tpjr72.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051814/CREED_CARTEL_m5jfwj.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051814/chd_jdtmw5.jpg",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051814/cataluxe_lwpwvl.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051816/ZAY_cruise_wogaep.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051816/double_yud6qp.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051818/yb_drip_wikpaa.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051818/Echelon_tqo4ju.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051818/umluxe_hyc0so.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051818/big_way_dqtqsm.png",
    "https://res.cloudinary.com/do9qn3d7j/image/upload/v1754051819/east_grammy_o6f6fb.png",
    top,
  ];

const InfiniteScrollAnimationPage = () => {
  return (
    <div className="bg-black py-10 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-rightScroll gap-4 ">
          {[...link1, ...link1].map((link, index) => (
            <img
              key={index}
              src={link}
              alt={`Image ${index + 1}`}
              className={`h-[150px] w-[150px] object-contain rounded  ${[4,7,8,11,13,14,15,16,21,24,25,27,28,29,30].includes(index) ? "bg-white" : "bg-black"}`}
            />
          ))}
          
        </div>
        <div className="flex w-max animate-leftScroll gap-4 mt-8">
          {[...link2, ...link2].map((link, index) => (
            <img
              key={index}
              src={link}
              alt={`Image ${index + 1}`}
              className={`h-[150px] w-[150px] object-contain rounded  ${[0,1,3,4,6,10,13,17,18,20,21,23,27,30].includes(index) ? "bg-white" : "bg-black"}`}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollAnimationPage;
