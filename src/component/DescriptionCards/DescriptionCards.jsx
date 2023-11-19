import React from 'react';
import PencilLine from "../../assets/images/DescriptionCards/PencilLine.svg"

function DescriptionCards(props) {
    return (

        <div>
            <section className="relative py-32">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 md:px-4 mr-auto ml-auto -mt-78">
                            <div
                                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-purple-700">
                                <div className="relative p-8 mb-4">
                                    <h4 className="text-xl font-bold text-white">
                                        هدف ما در آنلاین آکادمی                                    </h4>
                                    <p className="text-md font-light mt-2 text-white leading-8">
                                        ما به عنوان یک وبسایت آموزشی سعی داریم به همه شما عزیزان فارسی زبان کمک کنیم که در این دنیای بی کران از زبان ها و فریمورک‌ها و ابزارهای مختلف برنامه نویسی مسیر فعالیت خود را پیدا کنید و همچنین سعی داریم در این مسیر همراه شما باشیم تا این قابلیت را بدست بیاورید که از دانش کسب شد در کسب و کار خود یا برای استخدام در شرکتی که قصد فعالیت در آن را دارید استفاده کنید . هدف ما پیروزی شماست .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto border-r-2 border-r-yellow-400">
                                            <div
                                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-300">
                                                <img src={PencilLine.src}/>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">اجازه تدریس
                                            </h6>
                                            <p className="mt-5 text-gray-500">
                                                به هر مدرسی رو نمیده و فقط فقط با مدرسای سینیور و مید لول وارد همکاری میشه چون کیفیت براش مهمه
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto border-r-2 border-r-red-400">
                                            <div
                                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-300">
                                                <img src={PencilLine.src}/>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                اولویت بندی به ترتیب منافع
                                            </h6>
                                            <p className="mt-5 text-gray-500">
                                                در انلاین آکادمی اولویت اول با مدرس هست چون اون قراره دل بسوزونه. اولویت دوم با کاربره چون باید کمکش کرد و درنهایت اولویت آخر با انلاین اکادمیه
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto border-r-2 border-r-sky-400">
                                            <div
                                                className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-300">
                                                <img src={PencilLine.src}/>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">هدایت به بازار کار
                                            </h6>
                                            <p className="mt-5 text-gray-500">
                                                دانشجویان نیز درصورت بهره‌مندی کامل از محتوای دوره و تکمیل مهارت‌های خود به‌راحتی قادر به اشتغال و فعالیت در زمینه موردنظر خود خواهند بود.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div class="px-4 py-5 flex-auto border-r-2 border-r-green-400">
                                            <div
                                                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                                <img src={PencilLine.src}/>
                                            </div>
                                            <h6 class="text-xl mb-1 font-semibold">گارانتی بازگشت وجه
                                            </h6>
                                            <p class=" mt-5 text-gray-500">
                                                اگر پس از خرید دوره به‌صورت جامع، به هر دلیلی از شرکت در آن منصرف شدید تا ١ ماه پس از خريد امكان انصراف و بازگشت كامل وجه برای شما درنظر گرفته شده است.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default DescriptionCards;