export default {
  required() {
    return "پر کردن این فیلد الزامی است";
  },
  min(fieldName, params) {
    return (
      fieldName +
      " " +
      "باید دارای حداقل" +
      " " +
      params[0] +
      " " +
      "کاراکتر باشد"
    );
  },
  length(fieldName, params) {
    return (
      fieldName + " " + "باید دارای" + " " + params[0] + " " + "کاراکتر باشد"
    );
  },
  numeric() {
    return "فرمت وارد شده نادرست است";
  },
};
