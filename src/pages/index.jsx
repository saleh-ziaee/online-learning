import Header from "@/component/Layout/Header/Header.jsx";
import CategoryPanel from "@/component/TopCategory/CategoryPanel/CategoryPanel.jsx";
import SearchPanel from "@/component/SearchPanel/SearchPanel.jsx";
import CardTwo from "@/component/CardTwo/CardTwo.jsx";
import Footer from "@/component/Layout/footer/Footer.jsx";
import Cards from "@/component/Cards/Cards.jsx";
import Title from "@/component/TitlePic/Title.jsx";
import DescriptionCards from "@/component/DescriptionCards/DescriptionCards.jsx";
import {useAuthContext} from "@/providers/AuthProvider";
import Link from "next/link";

function Home() {
    const { isLoggedIn } = useAuthContext();
    return (
    <div className={"container w-[95%] md:w-[85%]  mx-auto"}>
      <Header></Header>
      <CategoryPanel></CategoryPanel>
      <Title></Title>
      <SearchPanel></SearchPanel>
      <div className={"flex items-center"}>
        <div className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}></div>
        <span className={"text-black ms-3 font-bold text-2xl"}>
          جدیدترین دوره ها
        </span>
      </div>
      <Cards></Cards>



      <DescriptionCards></DescriptionCards>
        {isLoggedIn?(

            <>
                <div className={"flex items-center mt-10"}>
                    <div className={"w-[7px] h-[7px] bg-[#9E5CF2] rounded-[100%]"}></div>
                    <span className={"text-black ms-3 font-bold md:text-2xl"}>
          دوره های شما
        </span>
                </div>
            <CardTwo></CardTwo>
            </>

        ):(
            <div className={"flex justify-center text-gray-500 bg-purple-200 font-bold text-[18px] md:text-2xl p-12 border-2 rounded-2xl mx-auto "}><Link href={"/Login"}>
              برای دیدن دوره های خود وارد سایت شوید
            </Link></div>
        )

        }
      <Footer />
    </div>
  );
}

export default Home;
