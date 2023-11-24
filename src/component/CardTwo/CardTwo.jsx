import React from "react";
import CardTwoItem from "@/component/CardTwo/CardTwoItem/CardTwoItem.jsx";
import {useQuery} from "react-query";
import { apiGetyourCourseList} from "@/api/yourcourse";
import LoadingProduct from "@/component/Loading/LoadingProduct";
function CardTwo(props) {
    const { data, isLoading } = useQuery({
        queryKey: ["cardTwo",],
        queryFn: () => apiGetyourCourseList(),
    });
  return (
    <div className={"rounded-[12px] gap-4 p-4 "}>
      <div className={"flex w-[100%] items-center justify-between"}>
        {/*<Button className={""} variant={"gray"}>نمایش همه </Button>*/}
      </div>
      <div
        className={
          "flex flex-col items-center justify-around w-full md:grid md:grid-cols-1 xl:grid xl:grid-cols-2 lg:gap-4  gap-4 md:gap-4 mx-auto flex-wrap"
        }
      >
        {
            isLoading ? (
                <>
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />
                </>
            ):data.map((item) => (
          <CardTwoItem
              key={item.id} {...item}
          />
        ))}

      </div>
    </div>
  );
}

export default CardTwo;
