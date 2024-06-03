import React, { useRef, useState } from "react";

import HeaderAuth from "./HeaderAuth";

import { checkUserName } from "../../Helpers/checkName.js";

const SingUp = () => {
    const username = useRef(null);
    const phone = useRef(null);
    const city = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const [textAlert, setTextAlert] = useState("");
    const [isAlert, setIsAlert] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        const useInformation = {
            username: username.current.value,
            phone: phone.current.value,
            city: city.current.value,
            password: password.current.value,
            confirmPassword: confirmPassword.current.value,
        };

        if (
            !username.current.value ||
            !phone.current.value ||
            !password.current.value ||
            !confirmPassword.current.value ||
            !city.current.value
        ) {
            setTextAlert("اطلاعات کامل وارد نشده است");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        } else if (password.current.value !== confirmPassword.current.value) {
            setTextAlert("رمزها مطابقت ندارند");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        } else if (
            phone.current.value.length !== 11 ||
            !phone.current.value.startsWith("09")
        ) {
            setTextAlert("شماره تماس صحیح نیست");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        } else if (checkUserName(username.current.value)) {
            setTextAlert("نام کاربری می بایستی فارسی باشد");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        } else if (password.current.value.length < 8) {
            setTextAlert("رمز عبور باید حداقل 8 کاراکتر باشد");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
            return;
        }
    };

    return (
        <>
            <HeaderAuth />
            <form
                onSubmit={submitHandler}
                className="w-80 mx-auto mt-5 rounded-lg primaryBoxShadow px-4 py-5"
            >
                <div>
                    <label
                        htmlFor="userName"
                        className=" text-black opacity-65 text-sm"
                    >
                        نام کاربری خود را وارد کنید
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        ref={username}
                        className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm "
                    />
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="phoneNumber"
                        className=" text-black opacity-65 text-sm "
                    >
                        شماره تماس خود را وارد کنید
                    </label>
                    <input
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        ref={phone}
                        className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm "
                    />
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="cityUser"
                        className=" text-black opacity-65 text-sm "
                    >
                        محل زندگی خود را وارد کنید
                    </label>
                    <select
                        name="city"
                        id="cityUser"
                        ref={city}
                        className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-2 text-gray-900 text-sm "
                    >
                        <option value="tehran">تهران</option>
                        <option value="mashhad">مشهد</option>
                        <option value="esfahan">اصفهان</option>
                        <option value="yazd">یزد</option>
                        <option value="shiraz">شیراز</option>
                        <option value="tabriz">تبریز</option>
                        <option value="rasht">رشت</option>
                        <option value="abadan">آبادان</option>
                        <option value="ahvaz">اهواز</option>
                        <option value="arak">اراک</option>
                        <option value="ardabil">اردبیل</option>
                        <option value="bandarabbas">بندرعباس</option>
                        <option value="birjand">بیرجند</option>
                        <option value="bojnourd">بجنورد</option>
                        <option value="bushehr">بوشهر</option>
                        <option value="chabahar">چابهار</option>
                        <option value="hamadan">همدان</option>
                        <option value="ilam">ایلام</option>
                        <option value="kerman">کرمان</option>
                        <option value="kish">کیش</option>
                        <option value="mazandaran">مازندران</option>
                        <option value="oromieh">ارومیه</option>
                        <option value="qazvin">قزوین</option>
                        <option value="qom">قم</option>
                        <option value="sanandaj">سنندج</option>
                        <option value="semnan">سمنان</option>
                        <option value="shahrekord">شهرکرد</option>
                        <option value="sari">ساری</option>
                        <option value="yasuj">یاسوج</option>
                        <option value="zanjan">زنجان</option>
                        <option value="kermanshah">کرمانشاه</option>
                        <option value="golestan">گلستان</option>
                        <option value="gorgan">گرگان</option>
                        <option value="khorramabad">خرم‌آباد</option>
                        <option value="saveh">ساوه</option>
                        <option value="zahedan">زاهدان</option>
                        <option value="zanjan">زنجان</option>
                    </select>
                </div>

                <div className="mt-3">
                    <label
                        htmlFor="password"
                        className=" text-black opacity-65 text-sm "
                    >
                        رمز عبور خود را وارد کنید
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        ref={password}
                        className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm"
                        autoComplete="new-password"
                    />
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="password"
                        className=" text-black opacity-65 text-sm "
                    >
                        رمز عبور خود را دوباره وارد کنید
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        ref={confirmPassword}
                        className="primaryBoxShadow rounded-md outline-none mt-2 w-full h-8 px-3 text-sm"
                        autoComplete="new-password"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primaryColor text-white font-bold w-24 h-10 mt-5 mx-auto flex items-center justify-center rounded-md border-solid border-2 primary-transition hover:hoverBtn"
                >
                    ثبت نام
                </button>
            </form>
            <p
                className={`${
                    isAlert ? "flex" : "hidden"
                } absolute top-1 left-1 rounded-lg rounded-tl-none bg-primaryColor text-white font-bold w-80 px-5 py-1 items-center justify-center`}
            >
                {textAlert}
            </p>
        </>
    );
};

export default SingUp;
