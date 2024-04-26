import PropTypes from "prop-types";

export const UntilLimit = ({ limit }) => {
  function subDate() {
    const nowDate = new Date();
    const limitDate = new Date(limit);
    limitDate.setHours(limitDate.getHours() - 9);
    // oldDate.setHours(oldDate.getHours() - 9)
    console.log("now:", nowDate);
    console.log("limit:", limitDate);
    const secDateValue = limitDate - nowDate;
    const minDate = parseInt(secDateValue / 1000 / 60);
    console.log(minDate / 60 + "時間");
  }
  subDate();
  return (
    <>
      <span>tesxt</span>
    </>
  );
};
UntilLimit.propTypes = {
  limit: PropTypes.string.isRequired,
};
