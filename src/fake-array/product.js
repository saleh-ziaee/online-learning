import img1 from "@/assets/images/product/learning-education-ideas-insight-intelligence-study-concept.png"
import img2 from "@/assets/images/product/unsplash_5QgIuuBxKwM.png";
import img3 from "@/assets/images/product/unsplash_5J3G5E6Brgg.png";
import animationImg from "@/assets/images/CourseDetail/unsplash_bOKIptPzdPk.png"
import backendImage from "@/assets/images/CourseDetail/07.png"
import teacherImage from "@/assets/images/CourseDetail/4597b4e10ba34611af39b83d5ade2c32.jpg"
import teacherImage2 from "@/assets/images/CourseDetail/30ad48bcfe7dd58a6fe95bec9530c846.jpg"
export const product =[
    {
        id:1,
        image: img1.src,
        title: 'آموزش برنامه نویسی فرانت',
        subTitle: 'شامل ۱۴۴ ساعت آموزش همراه با تمرین و پروژه‌های عملی',
        student:80,
        deadline:3,
        lesson:110,
        category:"programing",
        level :'مبتدی',
        point :4,
        section:12,
        videos:92,
        price:1200000,
        offPrice:1100000,
        off:10,
        watchTime :124,
        teaches:"ماش همدانی",
        comment:400,
        // teacherImg:teacherImage,
        teachers:[
            {
                name: 'ماش همدانی',
                teacherImage:teacherImage,
                category:"مدرس فرانت‌اند",
                comment:400,
                description:"\"مدرس فرانت‌اند با بیش از هفت سال تجربه. علاقه‌مند به ارائه دانش و توانایی‌های خود در توسعه وب و برنامه‌نویسی. هدفم ارائه یادگیری مفید و کاربردی برای دانشجویان به شکلی ساده و قابل فهم است.\""
            }
        ],
        sections: [
            {
                title: 'شروع ماجراجویی توسعه وب با HTML/CSS',
                videos: 3,
                watchTime: 5,
                subSection: [
                    {
                        title: 'Introduction to vcbcvbcvbcelements, and attributes.',
                        watchTime: 1,
                    },
                    {
                        title: 'Introduction to CSS: vbcvbc styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    // Add more subsections here if needed
                ],
            },
            {
                title: 'شروع ماجراجویی توسعه وب با ',
                videos: 3,
                watchTime: 7,
                subSection: [
                    {
                        title: 'Introduction to HTML: Basic syntax, tags, elements, and attributes.',
                        watchTime: 1,
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    // Add more subsections here if needed
                ],
            },
            {
                title: 'شروع ماجراجویی توسعه وب با HTML/CSS',
                videos: 3,
                watchTime: 5,
                subSection: [
                    {
                        title: 'Introduction to HTML: Basic syntax, tags, elements, and attributes.',
                        watchTime: 1,
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    // Add more subsections here if needed
                ],
            },
            ],

            description:"تو این دوره، به صورت تیمی، با کسایی مثل خودت که علاقه به یادگیری دارند، در کنار منتورهای دوره، روی پروژه‌های عملی برنامه‌نویسی فرانت‌اند رو از صفر تا حل چالش‌های واقعی یاد می‌گیری.\n" +
            "قسمت رابط کاربری یک نرم افزار می‌تواند پیچیدگی‌های زیادی داشته باشد. به عنوان مثال، ممکن است المنت‌های زیادی بعد از درخواست‌های HTTP به سرور دچار تغییر شوند. در چنین مواردی کتابخانه React به عنوان یک راه حل در نظر گرفته می‌شود. معماری این کتابخانه به گونه‌ای توسعه داده شده که بتواند تغییرات قسمت فرانت‌اند را با سرعت بیشتری پیاده سازی کند. به همین دلیل React به یکی از ابزارهای محبوب توسعه فرانت‌اند برای بسیاری از شرکت‌های نرم افزاری تبدیل شده است. محبوبیت بالای React باعث شده است تا شرکت‌های بزرگی همانند Instagram ،Netflix ،Uber و … از آن برای ایجاد و توسعه سایت‌های خود استفاده کنند. همینطور استارت‌اپ‌های اسنپ، دیوار، سازیتو و … نیز از نمونه‌های موفق داخلی هستند که از این ابزار استفاده کرده‌اند ."
    },
    {
        id:2,
        image: img2.src,
        category:"hack",

        title: 'آموزش هک  ',
        student:40,
        lesson:250,
        level :'مقدماتی ',
        point :5,
        descriptions:'آموزش هک کردن' ,
        sections: [
            {
                title: 'شروع ماجراجویی توسعه وب با HTML/CSS',
                videos: 3,
                watchTime: 5,
                subSection: [
                    {
                        title: 'Introduction to vcbcvbcvbcelements, and attributes.',
                        watchTime: 1,
                    },
                    {
                        title: 'Introduction to CSS: vbcvbc styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    // Add more subsections here if needed
                ],
            },
            {
                title: 'شروع ماجراجویی توسعه وب با ',
                videos: 3,
                watchTime: 7,
                subSection: [
                    {
                        title: 'Introduction to HTML: Basic syntax, tags, elements, and attributes.',
                        watchTime: 1,
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    // Add more subsections here if needed
                ],
            },
            {
                title: 'شروع ماجراجویی توسعه وب با HTML/CSS',
                videos: 3,
                watchTime: 5,
                subSection: [
                    {
                        title: 'Introduction to HTML: Basic syntax, tags, elements, and attributes.',
                        watchTime: 1,
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    {
                        title: 'Introduction to CSS: Basic styling, selectors, properties, and values.',
                        watchTime: '1:30',
                    },
                    // Add more subsections here if needed
                ],
            },
        ],

    },
    {
        id:3,
        image: img3.src,
        title: 'آموزش گرافیک',
        student:60,
        lesson:50,
        category:"graphic",
        level :'حرفه ای ',
        point :3,
        descriptions:'تو این دوره، به صورت تیمی، با کسایی مثل خودت که علاقه به یادگیری دارند، در کنار منتورهای دوره، روی پروژه‌های عملی برنامه‌نویسی فرانت‌اند رو از صفر تا حل چالش‌های واقعی یاد می‌گیری.' +
            'قسمت رابط کاربری یک نرم افزار می‌تواند پیچیدگی‌های زیادی داشته باشد. به عنوان مثال، ممکن است المنت‌های زیادی بعد از درخواست‌های HTTP به سرور دچار تغییر شوند. در چنین مواردی کتابخانه React به عنوان یک راه حل در نظر گرفته می‌شود. معماری این کتابخانه به گونه‌ای توسعه داده شده که بتواند تغییرات قسمت فرانت‌اند را با سرعت بیشتری پیاده سازی کند. به همین دلیل React به یکی از ابزارهای محبوب توسعه فرانت‌اند برای بسیاری از شرکت‌های نرم افزاری تبدیل شده است. محبوبیت بالای React باعث شده است تا شرکت‌های بزرگی همانند Instagram ،Netflix ،Uber و … از آن برای ایجاد و توسعه سایت‌های خود استفاده کنند. همینطور استارت‌اپ‌های اسنپ، دیوار، سازیتو و … نیز از نمونه‌های موفق داخلی هستند که از این ابزار استفاده کرده‌اند.',
        teachers:[
            {
                name: 'ماش همدانی',
                teacherImage:teacherImage.src,
                category:"مدرس فرانت‌اند",
                comment:400,
                description:"\"مدرس فرانت‌اند با بیش از هفت سال تجربه. علاقه‌مند به ارائه دانش و توانایی‌های خود در توسعه وب و برنامه‌نویسی. هدفم ارائه یادگیری مفید و کاربردی برای دانشجویان به شکلی ساده و قابل فهم است.\""
            }
        ],

        sections: [
            {
                title: 'آشنایی با فتوشاپ',
                videos: 3,
                watchTime: 5,
                subSection: [
                    {
                        title: 'آموزش ساخت',
                        watchTime: 1,
                    },
                    {
                        title: 'جابجایی تصویر    \n',
                        watchTime: '1:30',
                    },
                    {
                        title: 'معرفی ابزار های کاربردی ',
                        watchTime: '1:30',
                    },
                    // Add more subsections here if needed
                ],
            },
            {
                title: 'درس یکم: مقدمه و آشنایی با محیط\n ',
                videos: 4,
                watchTime: 7,
                subSection: [
                    {
                        title: 'آشنایی با محیط فتوشاپ\n',
                        watchTime: 1,
                    },
                    {
                        title: 'تنظیم Opacity، Flow، نوک قلم و ایجاد یک نوک قلم جدید     \n',
                        watchTime: '00:30',
                    },
                    {
                        title: 'معرفی کاربردهای فتوشاپ در رتوش، مونتاژ و ساخت کلیپ\n',
                        watchTime: '00:45',
                    },
                    {
                        title: 'تعیین رنگ قلم و زمینه     \n',
                        watchTime: '00:15',
                    },
                    // Add more subsections here if needed
                ],
            },
            {
                title: 'درس دوم: رتوش',
                videos: 3,
                watchTime: 5,
                subSection: [
                    {
                        title: 'ابزار واضح‌ تر کردن تصویر    \n',
                        watchTime: 2,
                    },
                    {
                        title: 'روشن ‌تر کردن تصویر    \n',
                        watchTime: '1:05',
                    },
                    {
                        title: 'معرفی تمامی ابزارهای رتوش و نکات مهم در رتوش',
                        watchTime: '1:10',
                    },
                    // Add more subsections here if needed
                ],
            },
            {
                title: 'درس سوم: لایه ‌ها',
                videos: 3,
                watchTime: 5,
                subSection: [
                    {
                        title: 'معرفی انواع لایه‌ها و کاربرد هر نوع    \n',
                        watchTime: "00:25",
                    },
                    {
                        title: 'انواع افکت بر روی لایه‌ها    \n',
                        watchTime: 1,
                    },
                    {
                        title: 'فریم و ماسک بر روی لایه‌ها    \n',
                        watchTime: '1:30',
                    },
                    // Add more subsections here if needed
                ],
            },
            {
                title: 'درس چهارم : فیلتر، اکشن و چند نمونه کار',
                videos: 5,
                watchTime: 9,
                subSection: [
                    {
                        title: 'انجام کارهای تکراری توسط اکشن    \n',
                        watchTime: "00:25",
                    },
                    {
                        title: 'انواع فیلترها و کاربرد آن‌ها    \n',
                        watchTime: 1,
                    },
                    {
                        title: 'تنظیمات مختلف رنگ یک تصویر    \n',
                        watchTime: '1:30',
                    },
                    {
                        title: 'تنظیمات مختلف سایز تصویر    \n',
                        watchTime: '1:30',
                    },
                    {
                        title: 'گزینه‌های مهم در منوی Image\n',
                        watchTime: '1:30',
                    },
                ],
            },
        ],
    },
    {
        id:4,
        image: backendImage.src,
        title: 'آموزش برنامه نویسی بک ',
        category:"programing",
        student:35,
        section:9,
        videos:86,
        price:1000000,
        offPrice:8000000,
        off:20,
        watchTime :124,
        teaches:"ماش همدانی",
        comment:400,
        lesson:90,
        level :'مبتدی',
        point :4,
        teachers:[
            {
                name: ' فرشید شیرافکن',
                teacherImage:teacherImage2,
                category:"مدرس بکند ",
                comment:358,
                description:"\"مدرس بکند  با بیش از سه  سال تجربه. علاقه‌مند به ارائه دانش و توانایی‌های خود در توسعه وب و برنامه‌نویسی. هدفم ارائه یادگیری مفید و کاربردی برای دانشجویان به شکلی ساده و قابل فهم است.\""
            }
        ],
        descriptions:'تو این دوره، به صورت تیمی، با کسایی مثل خودت که علاقه به یادگیری دارند، در کنار منتورهای دوره، روی پروژه‌های عملی برنامه‌نویسی بک اند رو از صفر تا حل چالش‌های واقعی یاد می‌گیری.' +
            'قسمت بکند یک نرم افزار می‌تواند پیچیدگی‌های زیادی داشته باشد. به عنوان مثال، ممکن است المنت‌های زیادی بعد از درخواست‌های HTTP به سرور دچار تغییر شوند. در چنین مواردی کتابخانه جنگو به عنوان یک راه حل در نظر گرفته می‌شود. معماری این کتابخانه به گونه‌ای توسعه داده شده که بتواند تغییرات قسمت بکند را با سرعت بیشتری پیاده سازی کند. به همین دلیل پایتون به یکی از ابزارهای محبوب توسعه بکند برای بسیاری از شرکت‌های نرم افزاری تبدیل شده است. محبوبیت بالای پایتون باعث شده است تا شرکت‌های بزرگی همانند Instagram ،Netflix ،Uber و … از آن برای ایجاد و توسعه سایت‌های خود استفاده کنند. همینطور استارت‌اپ‌های اسنپ، دیوار، سازیتو و … نیز از نمونه‌های موفق داخلی هستند که از این ابزار استفاده کرده‌اند.',
        sections: [
            {
                title: 'انواع داده‌ ها',
                videos: 3,
                watchTime: 4,
                subSection: [
                    {
                        title: 'نصب پایتون\n',
                        watchTime: "00:20",
                    },
                    {
                        title: 'انواع داده ها\n',
                        watchTime: 1,
                    },
                    {
                        title: 'روش های صحیح نامگذاری متغیرها\n',
                        watchTime: '00:30',
                    },
                ],
            },
            {
                title: 'عملگرها ',
                videos: 3,
                watchTime: 1,
                subSection: [
                    {
                        title: 'عملگرهای مقایسه ای',
                        watchTime: '00:15',
                    },
                    {
                        title: 'عملگرهای منطقی',
                        watchTime: '00:15',
                    },
                    {
                        title: 'کار با توابع موجود در ماژول math',
                        watchTime: '00:15',
                    },
                    // Add more subsections here if needed
                ],
            },
            {
                title: ' دستورات شرطی و حلقه ها \n',
                videos: 5,
                watchTime: 3,
                subSection: [
                    {
                        title: 'دستور If\n',
                        watchTime: 1,
                    },
                    {
                        title: 'دستور else...if\n',
                        watchTime: '00:30',
                    },
                    {
                        title: 'دستور for\n',
                        watchTime: '00:45',
                    },
                    {
                        title: 'حلقه های تو در تو\n',
                        watchTime: '00:25',
                    },
                    {
                        title: 'دستور while\n',
                        watchTime: '00:45',
                    },
                ],
            },
        ],

    },
    {
        id:5,
        image: animationImg.src,
        title: 'آموزش انیمیشن ',
        student:20,
        lesson:170,
        level :'پیشرفته',
        point :4,
        descriptions: "آموزش از صفر تا صد طراحی انیمیشن دو بعدی با نرم افزار های روز دنیا برای ورود به بازار کار",
        teachers:[
            {
                name: '  محمد نسیمی فر',
                teacherImage:teacherImage2,
                category:"مدرس انیمیشن ",
                comment:212,
                description: "حدود 4 سال است که در حوزه طراحی انمیشین دو بعدی و سه بعدی مشغول به فعالیت هستم و حدودا یک سال تجربه تدریس در این حوزه را دارم "
            }
        ],
        sections: [
            {
                title: 'درس یکم: کار با فضای سه بعدی (3D)\n',
                videos: 4,
                watchTime: 11,
                subSection: [
                    {
                        title: 'ایجاد حالت سه بعدی مجازی\n',
                        watchTime: 3,
                    },
                    {
                        title: 'کار با دوربین ها (Cameras)\n',
                        watchTime: 1,
                    },
                    {
                        title: 'کار با تنظیمات نورپردازی (Lights) و مواد (Material)\n',
                        watchTime: '2:30',
                    },
                    {
                        title: 'ایجاد افکت Depth of field\n',
                        watchTime: '1:30',
                    },
                ],
            },
            {
                title: 'درس دوم: خروجی و رندرینگ (Rendering)\n ',
                videos: 2,
                watchTime: 4,
                subSection: [
                    {
                        title: 'رندرینگ با Adobe Media Encoder\n',
                        watchTime: 2,
                    },
                    {
                        title: 'آرشیو کردن پروژه و کامپوزیشن ها\n',
                        watchTime: 2,
                    },
                ],
            },
            {
                title: 'درس سوم: متحرک سازی نوشته (Type)\n',
                videos: 4,
                watchTime: 3,
                subSection: [
                    {
                        title: 'کار با Type Animator\n',
                        watchTime: 1,
                    },
                    {
                        title: 'متحرک سازی نوشته روی یک مسیر (Path)\n',
                        watchTime: '00:30',
                    },
                    {
                        title: 'کار با Text Presets\n',
                        watchTime: '00:45',
                    },
                    {
                        title: 'متحرک سازی Brush Strokes با ابزار Paint\n',
                        watchTime: '00:25',
                    },

                ],
            },
        ],

    },
    {
        id:6,
        image: img3.src,
        title: 'آموزش گرافیک',
        category:"graphic",

        student:60,
        lesson:50,
        level :'متوسط',
        point :3,
        descriptions:'تو این دوره، به صورت تیمی، با کسایی مثل خودت که علاقه به یادگیری دارند، در کنار منتورهای دوره، روی پروژه‌های عملی برنامه‌نویسی فرانت‌اند رو از صفر تا حل چالش‌های واقعی یاد می‌گیری.' +
            'قسمت رابط کاربری یک نرم افزار می‌تواند پیچیدگی‌های زیادی داشته باشد. به عنوان مثال، ممکن است المنت‌های زیادی بعد از درخواست‌های HTTP به سرور دچار تغییر شوند. در چنین مواردی کتابخانه React به عنوان یک راه حل در نظر گرفته می‌شود. معماری این کتابخانه به گونه‌ای توسعه داده شده که بتواند تغییرات قسمت فرانت‌اند را با سرعت بیشتری پیاده سازی کند. به همین دلیل React به یکی از ابزارهای محبوب توسعه فرانت‌اند برای بسیاری از شرکت‌های نرم افزاری تبدیل شده است. محبوبیت بالای React باعث شده است تا شرکت‌های بزرگی همانند Instagram ،Netflix ،Uber و … از آن برای ایجاد و توسعه سایت‌های خود استفاده کنند. همینطور استارت‌اپ‌های اسنپ، دیوار، سازیتو و … نیز از نمونه‌های موفق داخلی هستند که از این ابزار استفاده کرده‌اند.',

    },
];
// export {product}