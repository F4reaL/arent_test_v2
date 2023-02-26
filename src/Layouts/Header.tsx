import logo from "../assets/img/logo.svg";
import IconList from "../assets/img/icon_memo.svg";
import IconChallenge from "../assets/img/icon_challenge.svg";
import IconMenu from "../assets/img/icon_menu.svg";
import IconInfo from "../assets/img/icon_info.svg";
import IconClose from "../assets/img/icon_close.png";
import { useState } from "react";
import {  Link } from "react-router-dom";

import OutsideAlerter from "../hooks/useOutsideAlerter";

const MenuList = () => {
  return (
    <div className="absolute top-[150%] right-0">
      <ul className="list-none flex flex-col whitespace-nowrap bg-gray400 font-Hiragino font-light text-[18px]">
        <li className="py-[22px] px-8 min-w-[280px] hover:bg-slate-400 cursor-pointer ">自分の記録</li>
        <li className="py-[22px] px-8 min-w-[280px] hover:bg-slate-400 cursor-pointer ">体重グラフ</li>
        <li className="py-[22px] px-8 min-w-[280px] hover:bg-slate-400 cursor-pointer ">目標</li>
        <li className="py-[22px] px-8 min-w-[280px] hover:bg-slate-400 cursor-pointer ">選択中のコース</li>
        <li className="py-[22px] px-8 min-w-[280px] hover:bg-slate-400 cursor-pointer ">コラム一覧</li>
        <li className="py-[22px] px-8 min-w-[280px] hover:bg-slate-400 cursor-pointer ">設定</li>
      </ul>
    </div>
  );
};
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <div className="fixed top-0 w-full bg-[#414141] px-10 sm:px-[80px] xl:px-[160px] flex justify-between items-center h-16 text-base text-light font-Hiragino">
      <Link to={'/'} className="w-[120px] sm:w-[144px]">
        <img src={logo} alt="" className="w-full object-contain" />
      </Link>
      <div className="navbar flex gap-6">
        <Link to={'/List'} className="flex items-center gap-2">
          <img src={IconList} alt="" />
          <span>自分の記録</span>
        </Link>
        <Link to={'/challenge'} className="flex items-center gap-2">
          <img src={IconChallenge} alt="" />
          <span>チャレンジ</span>
        </Link>
        <Link to={'/info'} className="flex items-center gap-2">
          <img src={IconInfo} alt="" />
          <span>お知らせ</span>
        </Link>
        <div className="flex items-center gap-2 relative cursor-pointer">
          <OutsideAlerter setModal={setIsOpenMenu}>
            <img src={isOpenMenu ? IconClose : IconMenu} alt="" onClick={()=>setIsOpenMenu(!isOpenMenu)}/>
            {isOpenMenu &&<MenuList />}
          </OutsideAlerter>
        </div>
      </div>
    </div>
  );
};

export default Header;
