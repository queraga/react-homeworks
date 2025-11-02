import styles from "./styles.module.css";
import CategoryCard from "../categoryCard";

import financeIcon from "../../assets/icons/categories/financeIcon.svg";
import transportIcon from "../../assets/icons/categories/transportIcon.svg";
import designIcon from "../../assets/icons/categories/designIcon.svg";
import restaurantIcon from "../../assets/icons/categories/restaurantsIcon.svg";
import medicineIcon from "../../assets/icons/categories/medicineIcon.svg";
import multimediaIcon from "../../assets/icons/categories/multimediaIcon.svg";
import supportIcon from "../../assets/icons/categories/supportIcon.svg";
import managementIcon from "../../assets/icons/categories/managementIcon.svg";
import salesIcon from "../../assets/icons/categories/salesIcon.svg";
import moreIcon from "../../assets/icons/categories/moreIcon.svg";

const categories = [
  { icon: financeIcon, title: "Finance" },
  { icon: transportIcon, title: "Transport" },
  { icon: designIcon, title: "Design" },
  { icon: restaurantIcon, title: "Restaurants" },
  { icon: medicineIcon, title: "Medicine" },
  { icon: multimediaIcon, title: "Multimedia" },
  { icon: supportIcon, title: "Support" },
  { icon: managementIcon, title: "Management" },
  { icon: salesIcon, title: "Sales" },
  { icon: moreIcon, title: "More categories", isMore: true },
];

function Categories() {
  return (
    <section className={styles.categories}>
      <h2>
        Jobs <br /> by categories
      </h2>
      <div className={styles.grid}>
        {categories.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
