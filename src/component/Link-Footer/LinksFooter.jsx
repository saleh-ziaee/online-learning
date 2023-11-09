import React from 'react';
import LinkFooter from "@/component/Ui/Link/LinkFooter.jsx";
import {arraylinksfooter} from "@/fake-array/fake-links-footer.js"
import {product} from "@/fake-array/product.js";
import Card from "@/component/Ui/Card-course/Card.jsx";


function LinksFooter(props) {
    return (
        <div className={"flex flex-col gap-2"}>
            {
                arraylinksfooter.map((item) => (
                    <LinkFooter
                        key={item.id}
                        title={item.title}
                    />
                ))
            }

        </div>
    );
}

export default LinksFooter;