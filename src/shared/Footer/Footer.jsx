import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import bannerImage from "../../assets/logo.png";
import logo from "../../assets/logo.png";

import {
  FaRegAddressBook,
  FaMailBulk,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10">
      <div>
        <div className="avatar">
          <img className="rounded-full" style={{width:100,}} src={bannerImage} alt="" />
        </div>
        <h1 className="text-2xl font-bold text-[#727E9A]">Learning School</h1>
        <p className="md:w-96 text-[#727E9A]">
        There are many variations of passages of  available, but the majority have suffered alteration in some form
        </p>
        <p className="flex items-center gap-3 ">
          <span className="text-info text-lg">
            <FaRegAddressBook></FaRegAddressBook>
          </span>
          <span className="text-[#727E9A]">
            Address:Dhaka, Bangladesh
          </span>
        </p>
        <p className="flex items-center gap-3 ">
          <span className="text-info text-lg">
            <FaMailBulk></FaMailBulk>
          </span>
          <span className="text-[#727E9A]">
            Email: example@gmail.com
          </span>
        </p>
        <p className="flex items-center gap-3 ">
          <span className="text-info text-lg">
            <FaPhoneAlt></FaPhoneAlt>
          </span>
          <span className="text-[#727E9A]">Phone: 01900000000</span>
        </p>
      </div>
      <div>
        <span className="footer-title">Quick Links</span>
        <a className="link link-hover md:mt-3">Help</a>
        <a className="link link-hover md:mt-3">Redeem Voucher</a>
        <a className="link link-hover md:mt-3">Contact Us</a>
        <a className="link link-hover md:mt-3">Policies & Rules</a>
        <a className="link link-hover md:mt-3">Check Offer List</a>
      </div>
      <div>
        <span className="footer-title">Information</span>
        <a className="link link-hover md:mt-3">Class Support</a>
        <a className="link link-hover md:mt-3">Checkout</a>
        <a className="link link-hover md:mt-3">License Policy</a>
        <a className="link link-hover md:mt-3">Affiliate</a>
        <a className="link link-hover md:mt-3">About Us</a>
      </div>
      <div>
        <span className="footer-title">Follow Us On</span>
        <Link className="link link-hover md:mt-3 flex items-center gap-2">
          <FaFacebook className="text-lg"></FaFacebook>Facebook
        </Link>
        <Link className="link link-hover md:mt-3 flex items-center gap-2">
          <FaGithub className="text-lg"></FaGithub>github
        </Link>
        <a className="link link-hover md:mt-3 flex items-center gap-2">
          <FaTwitter className="text-lg"></FaTwitter>Twitter
        </a>
        <a className="link link-hover md:mt-3 flex items-center gap-2">
          <FaInstagram className="text-lg"></FaInstagram>Instagram
        </a>
        <a className="link link-hover md:mt-3 flex items-center gap-2">
          <FaYoutube className="text-lg"></FaYoutube>Youtube
        </a>
      </div>
    </footer>
  );
};

export default Footer;