import React from "react";

import styles from "./Category.module.sass";

const Category = ({ category: categoryData }) => {
  const [category, subCategory] = categoryData.split(": ");

  return (
    <>
      <div className={styles.categoryContainer}>
        <div className={styles.category}>{category}</div>
        <div className={styles.subCategory}>{subCategory}</div>
      </div>
      <div className={styles.line} />
    </>
  );
};

export default Category;
